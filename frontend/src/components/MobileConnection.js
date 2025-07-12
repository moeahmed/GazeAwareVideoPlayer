import React from "react";
import { useSelector } from "react-redux";
import "../assets/css/App.css";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import QRCode from "react-qr-code";
import { Link, useParams, useLocation } from "react-router-dom";
import Links from "../constants/routes.json";
import NextPage from "./NextPage";
import { io } from "socket.io-client";

function MobileConnection() {
  const addr = useSelector((state) => state.ip_address);
  const socket = io("ws://" + addr + ":8001");
  const pid = useSelector((state) => state.participantID);

  // Send pid -> main.js -> mobile quizzing backend
  //socket.emit("pid", pid);
  // Send task questions
  //socket.emit('get-qset', "VIDEO1");

  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex-grow bg-gray-100 flex items-center justify-center">
        <div className="px-10">
          <div className="flex flex-col items-center bg-white max-w-4xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
            <div>
              <h2 className="text-lg font-semibold font-black">
                Please complete connect to the mobile quizzing page by scanning
                the QR code below. <br />
                Once you are connected press 'begin' on the mobile device.
              </h2>
              <br />
            </div>

            <div className="flex flex-col items-center qr-code">
              <QRCode value={"http://" + addr + ":3000"}></QRCode>
              <br />
              <h4 className="text-base font-medium font-black">
                {"http://" + addr + ":3000"}
              </h4>
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

export default MobileConnection;
