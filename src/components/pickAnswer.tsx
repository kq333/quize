import React, { useState } from 'react'
import backgroundImage from '../assets/undraw_adventure_4hum 1.svg'
import deleteIcon from '../assets/delete.svg'
import checkIcon from '../assets/check.svg'

interface Props {
  fetchedData: {
    question: string
    flagIcon?: string
    correctAnswer: string
    answers: string[]
    flags: boolean
  }
  updateQuiz: () => void
  quizResults: (quizAnswers: number) => void
}

export const PickAnsware: React.FC<Props> = ({
  fetchedData,
  updateQuiz,
  quizResults,
}) => {
  const [isAnswere, setIsAnswere] = useState<string>('')
  const [checkAnswere, setCheckAnswere] = useState<boolean>(false)

  const alphabet = 'ABCD'.split('')

  const { question, flagIcon, correctAnswer, answers, flags } = fetchedData

  const buttonEvents = (elem: string) => {
    setIsAnswere(elem)
    setCheckAnswere(!checkAnswere)
    if (elem === correctAnswer) {
      quizResults(1)
    }
  }

  const buttonNext = () => {
    updateQuiz()
    setIsAnswere('')
    setCheckAnswere(false)
  }

  return (
    <div>
      <h2 className="py-4 text-lg md:text-4xl font-bold leading-10 text-white">
        Country quiz
      </h2>

      <div className="w-[264px] md:w-[464px]  bg-white rounded-3xl">
        <div className="flex justify-end">
          <img
            className="w-40 h-28 mt-[-75px]"
            src={backgroundImage}
            alt="icon"
          />
        </div>

        {flags && flagIcon && (
          <div className="px-8 pt-4">
            <img className="w-[84px] h-[54px]" src={flagIcon} alt="flag icon" />
          </div>
        )}

        <div className="py-10 px-8">
          <h2 className="text-[#2F527B] md:text-2xl text-lg font-bold pb-8">
            {question}
          </h2>

          <ul>
            {Array.isArray(answers) &&
              answers.map((elem, index: number) => (
                <li
                  className={`h-[56px] md:w-[400px] max-w-[400px] border rounded-xl  flex items-center cursor-pointer mt-8 xl:hover:bg-[#F9A826] bg-[#ffffff] border-[#6066D0] xl:hover:border-[#F9A826] hover:text-white
                  ${
                    isAnswere === elem && !checkAnswere
                      ? 'text-white'
                      : 'text-[#2F527B]'
                  }
                  ${
                    correctAnswer === elem && checkAnswere
                      ? 'text-white border-[#60BF88]  bg-green-500'
                      : ''
                  }
                  ${
                    elem === isAnswere && elem !== correctAnswer
                      ? 'bg-red-400 border-red-400  text-white'
                      : ''
                  }
                  ${checkAnswere ? 'pointer-events-none ' : ''}
                `}
                  key={index}
                  onClick={() => buttonEvents(elem)}
                >
                  <span className="px-4">{alphabet[index]}</span>
                  <span className="flex-grow md:text-lg text-xs font-medium">
                    {elem}
                  </span>
                  <span
                    className={`md:px-4 px-3 ${
                      (correctAnswer === elem && checkAnswere) ||
                      (elem === isAnswere && checkAnswere)
                        ? 'block'
                        : 'hidden'
                    }`}
                  >
                    <img
                      src={`${
                        correctAnswer === elem && checkAnswere
                          ? checkIcon
                          : deleteIcon
                      }`}
                      alt="icon"
                    />
                  </span>
                </li>
              ))}
          </ul>

          <div className="flex justify-end pt-8">
            <button
              type="button"
              className={`bg-[#F9A826] w-[115px] h-[56px] text-lg text-white rounded-xl hover:opacity-75  my-button
                ${isAnswere.length ? 'block' : 'hidden'}
              `}
              onClick={() => buttonNext()}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
