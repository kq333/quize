import React from 'react'

import backgroundImage from '../assets/undraw_winners_ao2o 2.svg'

interface Props {
  quizResult: number
  reloadQuize: () => void
}

export const ResultComponent: React.FC<Props> = ({
  quizResult,
  reloadQuize,
}) => {
  const reloadQuiz = () => {
    reloadQuize()
  }

  return (
    <div className="mx-auto flex-col justify-center">
      <h2 className="py-4 text-4xl font-bold leading-10 text-white">
        Country quiz
      </h2>

      <div className="max-w-[464px]  md:w-[464px] h-[515px] bg-white rounded-3xl">
        <div className="pt-[42px] pb-[72px] flex justify-center">
          <img
            className="w-[228px] h-[136px]"
            src={backgroundImage}
            alt="icon"
          />
        </div>

        <h2 className="text-[#2F527B] lg:text-5xl text-3xl font-bold pb-8 flex justify-center">
          Results
        </h2>

        <p className="flex justify-center pb-[51px] items-center text-sm md:text-lg">
          You got{' '}
          <span className="text-[#6FCF97] text-4xl font-bold px-1 ">
            {quizResult}
          </span>
          correct answers
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => reloadQuiz()}
            type="button"
            className="w-[209px] h-[62px] text-lg  rounded-xl  border border-[#1D355D] hover:border-opacity-75 hover:text-opacity-75 text-[#1D355D]"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  )
}
