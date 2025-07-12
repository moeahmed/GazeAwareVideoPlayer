"use strict";

// Import parts of electron to use
const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Keep a reference for dev mode
let dev = false;

// Broken:
// if (process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath)) {
//   dev = true
// }

if (
  process.env.NODE_ENV !== undefined &&
  process.env.NODE_ENV === "development"
) {
  dev = true;
}

// Temporary fix broken high-dpi scale factor on Windows (125% scaling)
// info: https://github.com/electron/electron/issues/9691
if (process.platform === "win32") {
  app.commandLine.appendSwitch("high-dpi-support", "true");
  app.commandLine.appendSwitch("force-device-scale-factor", "1");
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    show: false,
    webPreferences: {
      experimentalFeatures: true,
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
    },
  });

  // and load the index.html of the app.
  let indexPath;

  if (dev && process.argv.indexOf("--noDevServer") === -1) {
    indexPath = url.format({
      protocol: "http:",
      host: "localhost:8080",
      pathname: "index.html",
      slashes: true,
    });
  } else {
    indexPath = url.format({
      protocol: "file:",
      pathname: path.join(__dirname, "dist", "index.html"),
      slashes: true,
    });
  }

  mainWindow.loadURL(indexPath);

  // Don't show until we are ready and loaded
  mainWindow.once("ready-to-show", () => {
    mainWindow.setMenuBarVisibility(false);
    mainWindow.maximize();
    mainWindow.show();
    mainWindow.focus();

    // Open the DevTools automatically if developing
    if (dev) {
      const {
        default: installExtension,
        REACT_DEVELOPER_TOOLS,
      } = require("electron-devtools-installer");

      installExtension(REACT_DEVELOPER_TOOLS).catch((err) =>
        console.log("Error loading React DevTools: ", err)
      );
      mainWindow.webContents.openDevTools();
    }
  });

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// Tobii eye tracker backend listener
var PORT = 33333;
var HOST = "127.0.0.1";
var dgram = require("dgram");
var server = dgram.createSocket("udp4");

const screenWidth = 1920;
const screenHeight = 1080;

server.on("listening", function () {
  var address = server.address();
  console.log(
    "Main.js: UDP Server listening on " + address.address + ":" + address.port
  );
});

server.on("message", function (message, remote) {
  try {
    parseMessage(message);
  } catch (error) {
    console.log("Error:", error);
  }
});

function parseMessage(message) {
  var messageObj = JSON.parse(message);

  if (mainWindow !== undefined) {
    if (messageObj.x < screenWidth && messageObj.y < screenHeight) {
      mainWindow.webContents.send("gaze-pos", messageObj);
    } else {
      //console.log("Eye tracker out of bounds");
      messageObj.attention = false;
      mainWindow.webContents.send("gaze-pos", messageObj);
    }
  }
}

server.bind(PORT, HOST);

// Connect to db
/*
const { MongoClient } = require("mongodb");

async function connectDB() {
  const uri = "mongodb://localhost:27017/";
  const client = new MongoClient(uri);
  var taskOrder = "default";
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Find empty document to append participant data to
    const result = await client
      .db("test")
      .collection("test")
      .findOne({ participantID: "name-id" });
    console.log("Task order: ", result.taskOrder);
    taskOrder = result.taskOrder;
    // Set task order

    // Set participant ID
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
  return taskOrder;
}

var taskOrder = connectDB().catch(console.error);
*/
// Mobile quiz
const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("Mobile client has connected");
  let questions = require("./src/constants/distractorQuestions.json");
  //let q = questions['VIDEO4']['questions'];
  /*
    let q
    socket.on('req', (message) => {
      console.log(message);
      io.emit('res', q);
    });
    */
  socket.on("get-qset", (qSet) => {
    console.log("Main.js: Setting question set to", qSet);
    console.log(
      "Main.js: Sending question set to mobile quiz backend",
      qSet
    );
    // Set question set
    let q = questions[qSet]; //questions[qSet]['questions'];
    io.emit("set-qset", q);
  });

  socket.on("timestamp", (currentTime) => {
    //console.log("Timestamp:", currentTime);
    io.emit("question", currentTime);
  });

  socket.on("pid", (pid) => {
    console.log("Starting new Task : Participant ID -", pid);
    io.emit("participantID", pid);
  });

  socket.on("gaze_left", (payload) => {
    console.log("Participant gaze left screen.");
  });

  socket.on("gaze_entered", (time) => {
    console.log("Participant gaze returned to screen after " + time + " seconds.");
  });

  socket.on("max_stacking_reached", (payload) => {
    console.log("Stacking: Maximum stacking reached");
  });

  socket.on("max_stacking_resumed", (payload) => {
    console.log("Stacking: Stacking resumed");
  });

  socket.on("display_question", (payload) => {
    console.log("MobileQuiz: Sent question - " + payload['id'] + ": " + payload['question']);
  });

  socket.on("UPDATE_DB", (message) => {
    // message: {pid: 1234, qSet: VIDEO1, response: ... }
    console.log("MobileQuiz: Received answer - ", message['response'], "Time elapsed - ", message['timeElapsed']);
    /*
    async function connectDB() {
      const uri = "mongodb://localhost:27017/";
      const client = new MongoClient(uri);
      var taskOrder = "default";
      try {
        await client.connect();
        console.log("Connected to MongoDB");
        // Query
        const query = {
          pid: message["pid"],
          distractorResponses: [],
        };
        const updateDocument = {
          $set: { ["distractorResponses." + message["qSet"]]: message["response"] },
        };
        const options = { upsert: true };
        const result = await client
          .db("test")
          .collection("test")
          .updateOne(query, updateDocument, options);

      } catch (error) {
        console.log("Error:", error);
      } finally {
        await client.close();
      }
      return taskOrder;
    }
    connectDB().catch(console.error);
    */
  });
});

http.listen(8001, () => console.log("Main.js: Listening on http://localhost:8001"));
