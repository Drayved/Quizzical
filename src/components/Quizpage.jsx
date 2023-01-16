import React from "react"
import parse from 'html-react-parser'

export default function Quizpage(props){
    const [quizFinished, setQuizFinished] = React.useState(false)


    
    function handleCheckAnswers() {
        props.checkAnswers()
        setQuizFinished(true)
    }

    const answerClass = {
        selected: "selected",
        correct: "correct",
        incorrect: "incorrect"
    }

    function getAnswerClass(isAnswered, selectAnswer, correctAnswer, answer) {
        let className = ""
        if(!isAnswered) {
            className += selectAnswer === answer ? answerClass.selected : ""
        }else{
            if(answer === correctAnswer) {
                className += answerClass.correct
            }
            else if(selectAnswer === answer) {
                className += answerClass.incorrect
            }
        }
        if(props.isAnswered) className += " disabled"
        return className
    }

    return (
        <div>
          {props.questionsArray.map((question, index) => (
            <div className="question-answers" key={index}>
              <h3 className="questions">{parse(question.question)}</h3>
              <ul className="answers-list">
                {question.allAnswers.map((answer, index) => (
                  <p 
                    className={`answers ${getAnswerClass(props.isAnswered, props.selectAnswer[question.id],
                    question.correctAnswer, answer)}`}
                    key={index} 
                    onClick={() => quizFinished ? " ": props.handleAnswerClick(question.id, answer)}>
                    {parse(answer)}
                  </p>
                ))}
              </ul>
            </div>
          ))}
            <div className="quiz-btn">
                {props.isAnswered ?
                <div className="restart-container">
                    <h4 className="restart-text">You got {props.score} out of {props.questionsArray.length} correct</h4>
                    <button className="quizpage-btn restart-btn" onClick={props.restartQuiz}>Play Again</button>
                </div>
                    :
                    <button className="quizpage-btn" onClick={handleCheckAnswers}>Check answers</button>
                }
                </div>
        </div>
    )
}
