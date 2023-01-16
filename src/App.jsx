import React from "react"
import Homepage from "./components/Homepage"
import Quizpage from "./components/Quizpage"
import { v4 as uuidv4 } from 'uuid'
import { shuffle } from 'lodash'
import Confetti from 'react-confetti'



export default function App(){
  const [quizStarted, setQuizStart] = React.useState(false)
  const [questionsArray, setQuestionsArray] = React.useState([])
  const [isAnswered, setIsAnswered] = React.useState(false)
  const [selectAnswer, setSelectAnswer] = React.useState({})
  const [score, setScore] = React.useState(0)
  const [questionsAmount, setQuestionsAmount] = React.useState(5)
  const [difficulty, setDifficulty] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [type, setType] = React.useState("")
  
  const handleAnswerClick = (questionId, answer) => {    
    setSelectAnswer({...selectAnswer, [questionId]: answer})
  }

  function startQuiz(){
    setQuizStart(true)
    console.log(difficulty)
  }

  function restartQuiz(){
    setScore(0)
    setIsAnswered(false)
    setQuizStart(false)
  }

  function checkAnswers(){
    setIsAnswered(true)
    let score = 0
    questionsArray.forEach(question => {
      if (selectAnswer[question.id] === question.correctAnswer){
        score++
      }
    })
    setScore(score)
  }

React.useEffect(() => {
  fetch(`https://opentdb.com/api.php?amount=${questionsAmount}&difficulty=${difficulty}&category=${category}&type=${type}`)
    .then (res => res.json())
    .then (data => 
      setQuestionsArray(data.results.map((question) => {
        return {
          id: uuidv4(),
          question: question.question,
          allAnswers: shuffle([
            question.correct_answer,
            ...question.incorrect_answers
          ]),
          correctAnswer: question.correct_answer
        }
      }))
    )
}, [quizStarted])

  return(
    <main>
      {
      quizStarted ?
      <Quizpage 
        handleAnswerClick={handleAnswerClick}
        checkAnswers={checkAnswers}
        selectAnswer={selectAnswer}
        questionsArray={questionsArray}
        isAnswered={isAnswered}
        restartQuiz={restartQuiz}
        score={score}
        
      /> :
      <Homepage
        handleClick={startQuiz}
        setQuestionsAmount={setQuestionsAmount}
        setDifficulty = {setDifficulty}
        setCategory = {setCategory}
        setType = {setType}
      />
    }
    {
      isAnswered ?
      <Confetti />
      :
      ""
    }

        <div className='blob bottom-left'></div>
        <div className='blob top-right'></div>
        <div className='blob bottom-right'></div>
        <div className='blob top-left'></div>
    </main>
  )
}

