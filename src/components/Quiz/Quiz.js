import React, { useState, useEffect } from 'react';
import Question from '../Question/Question';
import Navbar from '../Navbar/Navbar.js';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    fetch('https://pacmann-frontend.pacmann.workers.dev/')
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching data: ', error);
        setError('Failed to load questions. Please try again later.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (showFeedback || loading || currentQuestionIndex >= questions.length) return;
    
    if (timer === 0) {
      handleNextQuestion();
    }

    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    
    return () => clearInterval(countdown);
  }, [timer, showFeedback, loading, currentQuestionIndex]);

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setShowFeedback(true);

    setTimeout(() => {
      setSelectedAnswer(null);
      setShowFeedback(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(30);
    }, 2000);
  };

  const handleClose = () => {
    alert("Close button clicked");
  };

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <Navbar
        timeLeft={`00:${String(timer).padStart(2, '0')}`}
        questionIndex={currentQuestionIndex < questions.length ? currentQuestionIndex : questions.length - 1}
        totalQuestions={questions.length}
        timer={currentQuestionIndex < questions.length ? timer : 0}
        onClose={handleClose}
      />
      {currentQuestionIndex < questions.length ? (
        <div>
          <Question
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            feedback={showFeedback}
            questionIndex={currentQuestionIndex}
            handleNextQuestion={handleNextQuestion}
            timeLeft={`00:${String(timer).padStart(2, '0')}`}
            totalQuestions={questions.length}
          />
        </div>
      ) : (
        <div className="quiz-complete">
          <h2>Quiz Complete</h2>
          <p>Your final score is {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
