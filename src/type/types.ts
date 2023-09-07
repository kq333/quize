export interface Country {
    capital: string[]
    name: { common: string }
    flags: { svg: string }
  }

 export interface QuizData {
    question: string
    correctAnswer: string
    answers: string[]
    flags: boolean
  }