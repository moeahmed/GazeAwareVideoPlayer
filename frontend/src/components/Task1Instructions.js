import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../assets/css/App.css";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import { Link } from "react-router-dom";
import Links from "../constants/routes.json";
import NextPage from "./NextPage";

function Task1Insructions() {
  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex-grow bg-gray-100 flex items-center justify-center">
        <div className="px-10">
          <div className="flex flex-col items-center bg-white max-w-4xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
            <div>
              <h1 className="text-lg font-semibold font-black">Task 1</h1>
              <br />
              <p>
                {" "}
                In the following module, you will be asked to connect to a
                mobile quizzing webpage with your mobile device. A QR code will
                appear on the next page. To connect, you can scan the QR code
                using the camera app on your mobile device or by manually
                entering the URL in your mobile browser.
              </p>
              <br />
              <p>
                After connecting to the mobile quizzing page, the next page will
                contain a video that you will be required to watch while
                answering questions that appear on your mobile device. Your goal
                is to answer these questions as soon as you notice them on your
                mobile device. At the end of the video, you will be presented
                with content comprehension questions. An intervention technique
                will be presented to help you recover from distractions.
              </p>
              <br />
              <p>
                In this module, the video will pause when you look away from the
                screen. At the end of the video, you will be presented with
                content comprehension questions.
              </p>
              <br />
              <p>Please put your hand up when you are ready to proceed.</p>
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

export default Task1Insructions;
