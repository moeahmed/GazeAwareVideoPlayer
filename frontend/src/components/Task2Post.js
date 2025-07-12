import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../assets/css/App.css'
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import QRCode from "react-qr-code";
import { Link } from 'react-router-dom';
import Links from '../constants/routes.json';
import NextPage from './NextPage';


function Task2Post() {
  const participant = useSelector(state => state.participantID);
  const link = "https://docs.google.com/forms/d/e/1FAIpQLSfBq78s7DRtG-2UAJBErYlTysiZN2bb2_Z8HL7K47Ytzmin6w/viewform?usp=pp_url&entry.1636629720=" + participant;
  const BitlyClient = require('bitly').BitlyClient;
  const bitly = new BitlyClient('o_512g20njut');

  return (
    <div className="flex flex-col h-screen">
      <TopBar/>
      <div className="flex-grow bg-gray-100 flex items-center justify-center">
        <div className="px-10">
          <div className="flex flex-col items-center bg-white max-w-4xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
            <div>
              <h1 className="text-lg font-semibold font-black">
                Please complete the post-task questionnaire on your mobile device before continuing.
              </h1>
              <br/>
            </div>

            <div className="qr-code">
              <QRCode value={link}></QRCode>
              <br/>
            </div>

            <div className="inline-block mr-2 mt-2">
              <NextPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task2Post
