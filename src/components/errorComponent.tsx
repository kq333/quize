import React from 'react'

import errorImg from '../assets/error.webp'

export const ErrorCopmponent = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <img
        className="object-contain h-[100vh]"
        src={errorImg}
        alt="error image"
      />
    </div>
  )
}
