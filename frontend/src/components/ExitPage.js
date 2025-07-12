import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../assets/css/App.css'
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import { Link } from 'react-router-dom';
import Links from '../constants/routes.json';

function ExitPage() {
  return (
    <div className="flex flex-col h-screen">
      <TopBar/>
      <div className="flex-grow bg-gray-100 flex items-center justify-center">
        <div className="px-10">
          <div className="flex flex-col items-center bg-white max-w-4xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
            <div>
              <h1 className="text-lg font-semibold font-black">
                Exit Page
              </h1>
              <br/>
              <p> Thank you for your participation.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ExitPage
