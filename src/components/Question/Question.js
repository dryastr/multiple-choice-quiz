import React from 'react';
import './Question.css';

const Question = ({
  question,
  selectedAnswer,
  setSelectedAnswer,
  feedback,
  questionIndex,
  handleNextQuestion,
  timeLeft,
  totalQuestions,
}) => {
  return (
    <div className="container">
            <div className="group-timer">
                <div className="">
                Time Left: {timeLeft}
                </div>
                <div className="">
                Question {questionIndex + 1}/{totalQuestions}
                </div>
            </div>
        <div className="question-card-group">
        <div className="responsive-info">
        </div>
        <button className="next-question" onClick={handleNextQuestion} disabled={!selectedAnswer}>
            Next Question
        </button>
        <div className="question-card">
            <div className="question-left">
            <h2>Question {questionIndex + 1}</h2>
            <p>{question.question}</p>
            </div>
            <div className="question-right">
            <h3>Select only one answer</h3>
            <ul className="answers">
                {question.options.map((option) => (
                <li key={option.label}>
                    <label
                    className={`
                        ${selectedAnswer === option.label ? 'selected' : ''} 
                        ${feedback && selectedAnswer === option.label 
                        ? selectedAnswer === question.correctAnswer 
                            ? 'correct' 
                            : 'incorrect' 
                        : ''
                        }`}
                    >
                    <input
                        type="radio"
                        name="answer"
                        value={option.label}
                        checked={selectedAnswer === option.label}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        disabled={feedback}
                    />
                    {option.value}
                    </label>
                </li>
                ))}
            </ul>
            </div>
        </div>
        <button className="next-question-bottom" onClick={handleNextQuestion} disabled={!selectedAnswer}>
            Next Question
        </button>
        </div>
    </div>
  );
};

export default Question;
