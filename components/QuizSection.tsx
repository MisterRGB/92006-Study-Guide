
import React, { useState, useCallback } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { QuestionMarkCircleIcon, CheckIcon, XIcon } from '../constants';
import { QuizQuestion } from '../types';

const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion: QuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleAnswer = (selectedIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(selectedIndex);
    setIsAnswered(true);
    if (selectedIndex === currentQuestion.correctAnswerIndex) {
      setScore(prevScore => prevScore + 1);
    }
  };
  
  const handleNext = useCallback(() => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  }, [currentQuestionIndex]);

  const handleRestart = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizFinished(false);
  }, []);

  if (quizFinished) {
    return (
      <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto animate-fade-in">
        <h2 className="text-3xl font-bold text-primary mb-4">Quiz Complete!</h2>
        <p className="text-xl text-gray-700 mb-2">Your final score is:</p>
        <p className="text-5xl font-extrabold text-secondary mb-6">{score} / {QUIZ_QUESTIONS.length}</p>
        <button
          onClick={handleRestart}
          className="bg-accent text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
       <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-neutral-800 sm:text-4xl">
          <QuestionMarkCircleIcon />
          Knowledge Quiz
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Test your understanding of the usability principles.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-500">Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</p>
          <p className="text-lg font-medium text-neutral-800 mt-2">{currentQuestion.questionText}</p>
        </div>

        {currentQuestion.image && <img src={currentQuestion.image} alt="Quiz context" className="my-4 rounded-lg w-full object-cover h-48" />}

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isCorrect = index === currentQuestion.correctAnswerIndex;
            const isSelected = selectedAnswer === index;

            let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ';
            if (isAnswered) {
              if (isCorrect) {
                buttonClass += 'bg-green-100 border-green-500 text-green-800 font-semibold';
              } else if (isSelected && !isCorrect) {
                buttonClass += 'bg-red-100 border-red-500 text-red-800 font-semibold';
              } else {
                buttonClass += 'bg-gray-100 border-gray-300 text-gray-600 cursor-not-allowed';
              }
            } else {
              buttonClass += 'bg-white border-gray-300 hover:bg-blue-50 hover:border-blue-400';
            }
            
            return (
              <button key={index} onClick={() => handleAnswer(index)} disabled={isAnswered} className={buttonClass}>
                <span className="flex items-center">
                    {isAnswered && isCorrect && <CheckIcon />}
                    {isAnswered && isSelected && !isCorrect && <XIcon />}
                    {option}
                </span>
              </button>
            );
          })}
        </div>
        
        {isAnswered && (
          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-accent rounded-r-lg">
            <h4 className="font-bold text-yellow-800">Explanation</h4>
            <p className="mt-1 text-yellow-700">{currentQuestion.explanation}</p>
          </div>
        )}

        {isAnswered && (
          <div className="mt-6 text-right">
            <button 
              onClick={handleNext} 
              className="bg-secondary text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity"
            >
              {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? "Next Question" : "Finish Quiz"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizSection;
