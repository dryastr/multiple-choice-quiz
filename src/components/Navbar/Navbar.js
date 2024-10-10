import React from 'react';
import './Navbar.css';

const Navbar = ({ timeLeft, questionIndex, totalQuestions, timer, onClose }) => {
  const timePercentage = (timer / 30) * 100;
  const questionPercentage = ((questionIndex + 1) / totalQuestions) * 100;

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">Basic Math Test</div>
        <div className="navbar-right">
          <div className="time-left">
            Time Left: {timeLeft}
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${timePercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="question">
            Question {questionIndex + 1}/{totalQuestions}
            <div className="progress-container">
              <div
                className="progress-bar-question"
                style={{ width: `${questionPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
