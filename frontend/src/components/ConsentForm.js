import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../assets/css/App.css";
import TopBar from "./TopBar";
import one from "../assets/img/consent-form/1.jpg";
import two from "../assets/img/consent-form/2.jpg";
import three from "../assets/img/consent-form/3.jpg";
import four from "../assets/img/consent-form/4.jpg";
import five from "../assets/img/consent-form/5.jpg";
import six from "../assets/img/consent-form/6.jpg";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import Links from "../constants/routes.json";
import NextPage from "./NextPage";

// Remove overflow property to allow scroll
//document.getElementsByTagName("body")[0].style.overflow = "visible";

function ConsentForm() {
  const participant = useSelector((state) => state.participantID);
  const link =
    "https://docs.google.com/forms/d/e/1FAIpQLSe_Gotd_jq2L26-JHBfawmoCfXXOt5zcOFRqR5ex4Dbt9PN3Q/viewform?usp=pp_url&entry.253686963=" +
    participant;
  const BitlyClient = require("bitly").BitlyClient;
  const bitly = new BitlyClient("o_512g20njut");

  return (
    <div id="consent-form" className="flex flex-col h-screen">
      <TopBar />
      <div className="flex-grow bg-gray-100 flex items-center justify-center">
        <div className="px-10">
          <div className="flex flex-col items-center bg-white max-w-4xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
            <img className="consent-form-img" src={one}></img>
            <img className="consent-form-img" src={two}></img>
            <img className="consent-form-img" src={three}></img>
            <img className="consent-form-img" src={four}></img>
            <img className="consent-form-img" src={five}></img>
            <img className="consent-form-img" src={six}></img>

            <div>
              <h1 className="text-lg font-semibold font-black">
                Please complete the consent form on your mobile device before
                continuing.
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

export default ConsentForm;
