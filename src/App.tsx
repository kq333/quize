import { useState, useEffect } from 'react'

import { PickAnsware } from './components/pickAnswer'
import { ResultComponent } from './components/resultsComponent'
import { ErrorCopmponent } from './components/errorComponent'

function App() {
  const url = 'https://restcountries.com/v3.1/all'
  const [fetchedData, setFetchedData] = useState<string[]>([])
  const [reloadTrigger, setReloadTrigger] = useState<boolean>(false)
  const [gameNumber, setGameNumber] = useState<number>(15)
  const [quizResult, setQuizResult] = useState<number>(0)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          setIsError(true)
        }
        return res.json()
      })
      .then((data) => {
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
            flags: false,
          }
        })

        const createFlagObj = randomItems.map((elem) => {
          const allAnswers = [elem.name.common]

          while (allAnswers.length < 4) {
            const randomAnswer =
              randomItems[Math.floor(Math.random() * randomItems.length)].name
                .common
            if (!allAnswers.includes(randomAnswer)) {
              allAnswers.push(randomAnswer)
            }
          }

          for (let i = allAnswers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]]
          }

          return {
            question: `Which country does this flag belong to?`,
            flagIcon: elem.flags.svg,
            correctAnswer: elem.name.common,
            answers: allAnswers,
            flags: true,
          }
        })

        const randomIndex = Math.floor(Math.random() * 2)
        if (randomIndex === 0) {
          setFetchedData(createCapitalObj[0])
        } else {
          setFetchedData(createFlagObj[0])
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [reloadTrigger])

  const updateQuiz = () => {
    setReloadTrigger(!reloadTrigger)
    setGameNumber((prevGameNumber) => prevGameNumber - 1)
  }

  const quizResults = (elem: number) => {
    setQuizResult((prevGameNumber) => prevGameNumber + elem)
  }

  const reloadQuize = () => {
    setReloadTrigger(!reloadTrigger)
    setGameNumber(15)
    setQuizResult(0)
  }

  return (
    <>
      {isError ? (
        <ErrorCopmponent />
      ) : (
        <div className="h-screen w-screen mx-auto flex flex-col">
          <main className="flex-grow flex flex-col justify-center items-center">
            <section>
              {gameNumber === 0 ? (
                <ResultComponent
                  quizResult={quizResult}
                  reloadQuize={reloadQuize}
                />
              ) : (
                <PickAnsware
                  fetchedData={fetchedData}
                  updateQuiz={updateQuiz}
                  quizResults={quizResults}
                />
              )}
            </section>
          </main>
          <footer className="text-white">
            <div className="container mx-auto py-4 text-center">
              <span>created by username - devChallenges.io</span>
            </div>
          </footer>
        </div>
      )}
    </>
  )
}

export default App
