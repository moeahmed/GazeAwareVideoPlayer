/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useSelector, useDispatch } from 'react-redux';

export default function Example() {
  const participant = useSelector(state => state.participantID);

  return (
    <Disclosure as="nav" className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="flex space-x-4">
          <a key="Participant ID" href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
            Participant ID: {participant}
          </a>
        </div>
      </div>
    </div>
  </div>
</Disclosure>
  )
}
