import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../assets/css/App.css";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import Links from "../constants/routes.json";
import NextPage from './NextPage';

function CompQuestions2() {
  const participant = useSelector((state) => state.participantID);
  //const link = "https://docs.google.com/forms/d/e/1FAIpQLSdRAkva5fzSRdwCoP8m1UMxrHG2xPXbA8jDTZGXefTq8Xharg/viewform?usp=pp_url&entry.625667765=" + participant;
  let VIDEO = "VIDEO3";
  let link;

  if (VIDEO === "VIDEO1") {
    link = "https://docs.google.com/forms/d/e/1FAIpQLSdRAkva5fzSRdwCoP8m1UMxrHG2xPXbA8jDTZGXefTq8Xharg/viewform?usp=pp_url&entry.625667765=" + participant
  }
  else if (VIDEO === "VIDEO2") {
    link = "https://docs.google.com/forms/d/e/1FAIpQLSfZD4OyQKx9Qo7Gb91qUrIj2K0jSmMwPqwXN9vbWHrCHJrpyw/viewform?usp=pp_url&entry.978407567=" + participant
  }
  else if (VIDEO === "VIDEO3") {
    link ="https://docs.google.com/forms/d/e/1FAIpQLScqWKxTQL40gt4BExaownwNRLFrC9JHacSBWZIlEGoNhjlh4A/viewform?usp=pp_url&entry.978407567=" + participant;
  }
  else if (VIDEO === "VIDEO4") {
    link = "https://docs.google.com/forms/d/e/1FAIpQLSfOUsV4JDivsT7mwUa0VtK_r-ge9um9S5PRLDWmqf1XqLp9cQ/viewform?usp=pp_url&entry.978407567=" + participant
  }
  const BitlyClient = require("bitly").BitlyClient;
  const bitly = new BitlyClient("o_512g20njut");

  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex-grow bg-gray-100 flex items-center justify-center">
        <div className="px-10">
          <div className="flex flex-col items-center bg-white max-w-4xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
            <div>
              <h1 className="text-lg font-semibold font-black">
                Please complete the content comprehension questionnaire on your
                mobile device before continuing.
              </h1>
              <br />
            </div>

            <div className="qr-code">
              <QRCode value={link}></QRCode>
              <br />
            </div>

            <div className="inline-block mr-2 mt-2">
              <NextPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompQuestions2;
