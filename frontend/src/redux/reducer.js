import {
  CHANGE_PARTICIPANT_ID,
  CHANGE_TASKORDER,
  CHANGE_VIDEO,
  CHANGE_TASK,
  CHANGE_QSET,
  CHANGE_SCORE,
  CHANGE_IP
} from "./types";

// Print local IP
const { networkInterfaces } = require('os');
const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

//console.log("IP Addr:", results);
//const addr = results['Wi-Fi'][0] || results['Ethernet'][0]; // TODO: Update interface
let addr;

if (results['Wi-Fi']) {
  addr = results['Wi-Fi'][0];

}
else if (results['Ethernet']) {
  addr = results['Ethernet'][0];

}

console.log("IP Addr:", addr);

const initialState = {
  participantID: "",
  taskorder: "",
  video: "",
  task: "",
  question_set: "",
  score: 0,
  ip_address: addr
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PARTICIPANT_ID:
      return {
        ...state,
        participantID: action.payload,
      };
    case CHANGE_TASKORDER:
      return {
        ...state,
        taskorder: action.payload,
      };
    case CHANGE_VIDEO:
      return {
        ...state,
        video: action.payload,
      };
    case CHANGE_TASK:
      return {
        ...state,
        task: action.payload,
      };
    case CHANGE_QSET:
      return {
        ...state,
        question_set: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case CHANGE_IP:
      return {
        ...state,
        ip_address: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
