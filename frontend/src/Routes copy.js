import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './constants/routes';
import App from './components/App';
import ConsentPage from './components/ConsentForm';
import PrestudyQuestionnaire from './components/PrestudyQuestionnaire';
import Task1Insructions from './components/Task1Instructions';
import Task1 from './components/Task1';
import Task1Post from './components/Task1Post';
import Task2Insructions from './components/Task2Instructions';
import Task2 from './components/Task2';
import Task2Post from './components/Task2Post';
import Task3Insructions from './components/Task3Instructions';
import Task3 from './components/Task3';
import Task3Post from './components/Task3Post';
import Task4Insructions from './components/Task4Instructions';
import Task4 from './components/Task4';
import Task4Post from './components/Task4Post';
import EndOfStudyPage from './components/EndOfStudyPage';
import ExitPage from './components/ExitPage';
import MobileConnect from './components/MobileConnection';
import MobileConnect2 from './components/MobileConnection2';
import MobileConnect3 from './components/MobileConnection3';
import MobileConnect4 from './components/MobileConnection4';
import CompQuestions1 from './components/CompQuestions1';
import CompQuestions2 from './components/CompQuestions2';
import CompQuestions3 from './components/CompQuestions3';
import CompQuestions4 from './components/CompQuestions4';

import { createStore } from 'redux';
import reducers from './state/reducers/index';
import { io } from "socket.io-client";
const ip = require('ip');
console.log(ip.address());
//const socket = io('ws://' + 'localhost' + ':8001');
const socket = io('ws://' + ip.address() + ':8001');

var TASKORDER = [];
var VIDEOORDER = [];
var QSETORDER = [];

// A11B22C33D44
// TASK-VIDEO-QSET
// 1234-1234-1234

let orderList = {
  "module1": [Task1Insructions, Task1, Task1Post, MobileConnect],
  "module2": [Task2Insructions, Task2, Task2Post, MobileConnect2],
  "module3": [Task3Insructions, Task3, Task3Post, MobileConnect3],
  "module4": [Task4Insructions, Task4, Task4Post, MobileConnect4]
};

const PID = "1234-1234-1234";
const taskOrder = PID.slice(0,4);
const videoOrder = PID.slice(5,9);
const qSetOrder = PID.slice(10,14);

console.log(taskOrder, videoOrder, qSetOrder)
for (var i=0; i<4; i++) {
  TASKORDER.push(orderList["module"+taskOrder.charAt(i)]);
}
console.log("TASKORDER",TASKORDER);

let store = createStore(reducers);
let storeState = store.getState();
let TaskOrderState = storeState["taskOrder"];
TaskOrderState.dispatch()

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.EXIT} component={ExitPage} />
      <Route path={routes.END_OF_STUDY} component={EndOfStudyPage} />

      <Route path={routes.MOBILECONNECT4} component={MobileConnect4} />
      <Route path={routes.TASK4_INSTRUCTIONS} component={Task4Insructions} />
      <Route path={routes.TASK4} component={Task4} />
      <Route path={routes.TASK4_POST} component={Task4Post} />
      <Route path={routes.COMPQUESTION4} component={CompQuestions4} />


      <Route path={routes.MOBILECONNECT3} component={MobileConnect3} />
      <Route path={routes.TASK3_INSTRUCTIONS} component={Task3Insructions} />
      <Route path={routes.TASK3} component={Task3} />
      <Route path={routes.TASK3_POST} component={Task3Post} />
      <Route path={routes.COMPQUESTION3} component={CompQuestions3} />


      <Route path={routes.MOBILECONNECT2} component={MobileConnect2} />
      <Route path={routes.TASK2_INSTRUCTIONS} component={Task2Insructions} />
      <Route path={routes.TASK2} component={Task2} />
      <Route path={routes.TASK2_POST} component={Task2Post} />
      <Route path={routes.COMPQUESTION2} component={CompQuestions2} />


      <Route path={routes.MOBILECONNECT} component={MobileConnect} />
      <Route path={routes.TASK1_INSTRUCTIONS} component={Task1Insructions} />
      <Route path={routes.TASK1} component={Task1} />
      <Route path={routes.TASK1_POST} component={Task1Post} />
      <Route path={routes.COMPQUESTION1} component={CompQuestions1} />


      <Route path={routes.PRESTUDY} component={PrestudyQuestionnaire} />
      <Route path={routes.CONSENT_FORM} component={ConsentPage} />
      <Route path={routes.HOME} component={App} />
    </Switch>
  </BrowserRouter>
);
/*
socket.emit("REQUEST_taskorder");
socket.on('RESPONSE_taskorder', taskOrder => {
  console.log("RECEIVED:", taskOrder);
  TASKORDER = taskOrder;
});
*/









/*
let store = createStore(reducers);
let storeState = store.getState();
const participantID = storeState["participant"];
let order = participantID.slice(participantID.length-4);
console.log("Order", order);

// Assign task order based on last 4 digits of participant ID
let orderList = {
  "module1": [Task1, Task1Insructions, Task1Post, MobileConnect],
  "module2": [Task2, Task2Insructions, Task2Post, MobileConnect2],
  "module3": [Task3, Task3Insructions, Task3Post, MobileConnect3],
  "module4": [Task4, Task4Insructions, Task4Post, MobileConnect4]
};

let taskList = []

for (let i=0; i<4; i++){
  taskList.push(orderList["module"+order.charAt(i)]);
}

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.EXIT} component={ExitPage} />
      <Route path={routes.END_OF_STUDY} component={EndOfStudyPage} />

      <Route path={routes.MOBILECONNECT4} component={taskList[3][3]} />
      <Route path={routes.TASK4_INSTRUCTIONS} component={taskList[3][1]} />
      <Route path={routes.TASK4} component={taskList[3][0]} />
      <Route path={routes.TASK4_POST} component={taskList[3][2]} />
      <Route path={routes.COMPQUESTION4} component={CompQuestions4} />


      <Route path={routes.MOBILECONNECT3} component={taskList[2][3]} />
      <Route path={routes.TASK3_INSTRUCTIONS} component={taskList[2][1]} />
      <Route path={routes.TASK3} component={taskList[2][0]} />
      <Route path={routes.TASK3_POST} component={taskList[2][2]} />
      <Route path={routes.COMPQUESTION3} component={CompQuestions3} />


      <Route path={routes.MOBILECONNECT2} component={taskList[1][3]} />
      <Route path={routes.TASK2_INSTRUCTIONS} component={taskList[1][1]} />
      <Route path={routes.TASK2} component={taskList[1][0]} />
      <Route path={routes.TASK2_POST} component={taskList[1][2]} />
      <Route path={routes.COMPQUESTION2} component={CompQuestions2} />


      <Route path={routes.MOBILECONNECT} component={taskList[0][3]} />
      <Route path={routes.TASK1_INSTRUCTIONS} component={taskList[0][1]} />
      <Route path={routes.TASK1} component={taskList[0][0]} />
      <Route path={routes.TASK1_POST} component={taskList[0][2]} />
      <Route path={routes.COMPQUESTION1} component={CompQuestions1} />


      <Route path={routes.PRESTUDY} component={PrestudyQuestionnaire} />
      <Route path={routes.CONSENT_FORM} component={ConsentPage} />
      <Route path={routes.HOME} component={App} />
    </Switch>
  </BrowserRouter>
);
*/
/*
export default () => (
    <BrowserRouter>
      <Switch>
        <Route path={routes.MOBILECONNECT4} component={MobileConnect4} />
        <Route path={routes.MOBILECONNECT3} component={MobileConnect3} />
        <Route path={routes.MOBILECONNECT2} component={MobileConnect2} />
        <Route path={routes.MOBILECONNECT} component={MobileConnect} />
        <Route path={routes.EXIT} component={ExitPage} />
        <Route path={routes.END_OF_STUDY} component={EndOfStudyPage} />
        <Route path={routes.TASK4_POST} component={Task4Post} />
        <Route path={routes.TASK4} component={Task4} />
        <Route path={routes.TASK4_INSTRUCTIONS} component={Task4Insructions} />
        <Route path={routes.TASK3_POST} component={Task3Post} />
        <Route path={routes.TASK3} component={Task3} />
        <Route path={routes.TASK3_INSTRUCTIONS} component={Task3Insructions} />
        <Route path={routes.TASK2_POST} component={Task2Post} />
        <Route path={routes.TASK2} component={Task2} />
        <Route path={routes.TASK2_INSTRUCTIONS} component={Task2Insructions} />
        <Route path={routes.TASK1_POST} component={Task1Post} />
        <Route path={routes.TASK1} component={Task1} />
        <Route path={routes.TASK1_INSTRUCTIONS} component={Task1Insructions} />
        <Route path={routes.PRESTUDY} component={PrestudyQuestionnaire} />
        <Route path={routes.CONSENT_FORM} component={ConsentPage} />
        <Route path={routes.HOME} component={App} />
      </Switch>
    </BrowserRouter>
);
*/
