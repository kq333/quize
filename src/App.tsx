import { useState } from 'react'

import { PickAnsware } from './components/pickAnswer'
import { ResultComponent } from './components/resultsComponent'

import './App.css'

function App() {
  return (
    <div className="bg-[url('./assets/background.png')] h-screen w-screen mx-auto flex flex-col">
      <main className="flex-grow flex flex-col justify-center items-center">
        <section>
          {/*  <PickAnsware /> */}
          <ResultComponent />
        </section>
      </main>
      <footer className="text-white">
        <div className="container mx-auto py-4 text-center">
          <span>created by username - devChallenges.io</span>
        </div>
      </footer>
    </div>
  )
}

export default App
