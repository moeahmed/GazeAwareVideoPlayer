import React from 'react';
import {HashRouter, Routes, Route } from 'react-router-dom';
import routes from './constants/routes';
import App from './components/App';
import Start from './components/Start';
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
import CompQuestions1 from './components/CompQuestions1';
import CompQuestions2 from './components/CompQuestions2';
import CompQuestions3 from './components/CompQuestions3';
import CompQuestions4 from './components/CompQuestions4';

export default () => (
  <HashRouter>
    <Routes>
      <Route exact path={routes.EXIT} element={<ExitPage/>} />
      <Route exact path={routes.END_OF_STUDY} element={<EndOfStudyPage/>} />

      <Route exact path={routes.TASK4_INSTRUCTIONS} element={<Task4Insructions/>} />
      <Route exact path={routes.TASK4} element={<Task4/>} />
      <Route exact path={routes.TASK4_POST} element={<Task4Post/>} />
      <Route exact path={routes.COMPQUESTION4} element={<CompQuestions4/>} />

      <Route exact path={routes.TASK3_INSTRUCTIONS} element={<Task3Insructions/>} />
      <Route exact path={routes.TASK3} element={<Task3/>} />
      <Route exact path={routes.TASK3_POST} element={<Task3Post/>} />
      <Route exact path={routes.COMPQUESTION3} element={<CompQuestions3/>} />

      <Route exact path={routes.TASK2_INSTRUCTIONS} element={<Task2Insructions/>} />
      <Route exact path={routes.TASK2} element={<Task2/>} />
      <Route exact path={routes.TASK2_POST} element={<Task2Post/>} />
      <Route exact path={routes.COMPQUESTION2} element={<CompQuestions2/>} />

      <Route exact path={routes.MOBILECONNECT5} element={<MobileConnect/>} />
      <Route exact path={routes.MOBILECONNECT4} element={<MobileConnect/>} />
      <Route exact path={routes.MOBILECONNECT3} element={<MobileConnect/>} />
      <Route exact path={routes.MOBILECONNECT2} element={<MobileConnect/>} />
      <Route exact path={routes.MOBILECONNECT} element={<MobileConnect/>} />
      <Route exact path={routes.TASK1_INSTRUCTIONS} element={<Task1Insructions/>} />
      <Route exact path={routes.TASK1} element={<Task1/>} />
      <Route exact path={routes.TASK1_POST} element={<Task1Post/>} />
      <Route exact path={routes.COMPQUESTION1} element={<CompQuestions1/>} />


      <Route exact path={routes.PRESTUDY} element={<PrestudyQuestionnaire/>} />
      <Route exact path={routes.CONSENT_FORM} element={<ConsentPage/>} />
      <Route exact path={routes.START} element={<Start/>} />
      <Route exact path={routes.HOME} element={<App/>} />
    </Routes>
  </HashRouter>
);
