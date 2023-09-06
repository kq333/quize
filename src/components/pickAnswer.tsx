import React, { useState } from 'react'

import backgroundImage from '../assets/undraw_adventure_4hum 1.svg'
import deleteIcon from '../assets/delete.svg'
import checkIcon from '../assets/check.svg'

interface Props {
  question: string
  correctAnswer: string
  answers: string[]
  flags: boolean
}

export const PickAnsware: React.FC<Props> = (props) => {
  const [isChecked, useIsChecked] = useState(false)

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  const icons = isChecked ? deleteIcon : checkIcon

  const { question, flagIcon, correctAnswer, answers, flags } =
    props.fetchedData

  return (
    <div>
      <h2 className="py-4 text-lg md:text-4xl font-bold leading-10 text-white">
        Country quiz
      </h2>

      <div className="w-[264px] md:w-[464px]  bg-white rounded-3xl ">
        <div className="flex justify-end">
          <img
            className="w-40 h-28 mt-[-75px]"
            src={backgroundImage}
            alt="icon"
          />
        </div>

        <div>
          {flags && (
            <div className="px-8 pt-4">
              <img
                className="w-[84px] h-[54px]"
                src={flagIcon}
                alt="flag icon"
              />
            </div>
          )}

          <div className="py-8 px-8">
            <h2 className="text-[#2F527B] md:text-2xl text-lg font-bold pb-8">
              {question}
            </h2>

            <ul>
              {Array.isArray(answers) &&
                answers.map((elem, index) => (
                  <li
                    className="h-[56px] md:w-[400px] max-w-[400px] border rounded-xl border-[#6066D0] flex items-center cursor-pointer hover:bg-[#F9A826] hover:text-white text-[#2F527B] mt-8"
                    key={index}
                  >
                    <span className="px-4">{alphabet[index]}</span>
                    <span className="flex-grow md:text-lg text-xs font-medium">
                      {elem}
                    </span>
                    <span className="md:px-4 px-3">
                      <img src={icons} alt="icon" />
                    </span>
                  </li>
                ))}
            </ul>

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
    </div>
  )
}
