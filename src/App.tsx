import { useState, useEffect } from 'react'

import { PickAnsware } from './components/pickAnswer'
import { ResultComponent } from './components/resultsComponent'

function App() {
  const url = 'https://restcountries.com/v3.1/all'
  const [fetchedData, setFetchedData] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (data) => {
          const dataLength = data.length

          for (let i = dataLength - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[data[i], data[j]] = [data[j], data[i]]
          }

          const randomItems = data.slice(0, 4)

          const createCapitalObj = randomItems.map((elem) => {
            const allAnswers = [elem.capital[0]]

            while (allAnswers.length < 4) {
              const randomAnswer =
                randomItems[Math.floor(Math.random() * randomItems.length)]
                  .capital[0]
              if (!allAnswers.includes(randomAnswer)) {
                allAnswers.push(randomAnswer)
              }
            }

            for (let i = allAnswers.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1))
              ;[allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]]
            }

            return {
              question: `What is the capital of ${elem.name.common}?`,
              correctAnswer: elem.capital[0],
              answers: allAnswers,
            }
          })

          const createFlagObj = randomItems.map((elem) => {
            const allAnswers = [elem.flags.svg]

            while (allAnswers.length < 4) {
              const randomAnswer =
                randomItems[Math.floor(Math.random() * randomItems.length)]
                  .flags.svg
              if (!allAnswers.includes(randomAnswer)) {
                allAnswers.push(randomAnswer)
              }
            }

            for (let i = allAnswers.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1))
              ;[allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]]
            }

            return {
              question: `What is the color of ${elem.name.common} flag?`,
              correctAnswer: elem.flags.svg,
              answers: allAnswers,
            }
          })

          /* console.log(createCapitalObj[0]); */
          console.log(createFlagObj[0])
        },

        /*  setFetchedData(data) */
      )
      .catch((error) => console.log(error))
  }, []);




  

  return (
    <div className="bg-[url('./assets/background.png')] h-screen w-screen mx-auto flex flex-col">
      <main className="flex-grow flex flex-col justify-center items-center">
        <section>
          <PickAnsware />
          {/*    <ResultComponent /> */}
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
