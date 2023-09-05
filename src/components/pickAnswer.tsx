import React, { useState } from 'react'

import backgroundImage from '../assets/undraw_adventure_4hum 1.svg'
import deleteIcon from '../assets/delete.svg'
import checkIcon from '../assets/check.svg'

export const PickAnsware = () => {
  const [isChecked, useIsChecked] = useState(false)

  const icons = isChecked ? deleteIcon : checkIcon

  return (
    <div>
      <h2 className="py-4 text-4xl font-bold leading-10 text-white">
        Country quiz
      </h2>

      <div className="w-[464px] h-[515px] bg-white rounded-3xl">
        <div className="flex justify-end">
          <img
            className="w-40 h-28 mt-[-75px]"
            src={backgroundImage}
            alt="icon"
          />
        </div>

        <div className="py-8 px-8">
          <h2 className="text-[#2F527B] text-2xl font-bold pb-8">
            Kuala Lumpur is the capital of
          </h2>

          <div className="h-[56px] w-[400px] border rounded-xl border-[#6066D0] flex items-center cursor-pointer hover:bg-[#F9A826] hover:text-white text-[#2F527B]">
            <span className="px-4">A</span>

            <span className="px-8 text-lg font-medium  ">vietnam</span>

            <div className="flex justify-end w-[400px] px-4 ">
              <img className="hidden" src={icons} alt="icon" />
            </div>
          </div>

          <div className="flex justify-end pt-8">
            <button
              type="button"
              className="bg-[#F9A826] w-[115px] h-[56px] text-lg text-white rounded-xl hover:opacity-75"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
