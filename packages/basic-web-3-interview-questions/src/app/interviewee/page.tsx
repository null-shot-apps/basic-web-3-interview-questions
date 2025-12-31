'use client';

import { useState } from 'react';
import Link from 'next/link';

const interviewQuestions = [
  {
    id: 1,
    question: "What is blockchain and how does it work?",
    category: "Fundamentals"
  },
  {
    id: 2,
    question: "Explain the difference between Bitcoin and Ethereum.",
    category: "Fundamentals"
  },
  {
    id: 3,
    question: "What is a smart contract?",
    category: "Smart Contracts"
  },
  {
    id: 4,
    question: "What are gas fees and why are they important?",
    category: "Fundamentals"
  },
  {
    id: 5,
    question: "Explain the concept of decentralization.",
    category: "Fundamentals"
  }
];

export default function IntervieweePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (value: string) => {
    setAnswers({
      ...answers,
      [interviewQuestions[currentQuestion].id]: value
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitInterview = () => {
    setShowResults(true);
  };

  const restartInterview = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const answeredCount = Object.keys(answers).filter(key => answers[parseInt(key)]?.trim()).length;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Interview Completed!</h1>
              <p className="text-xl text-purple-200 mb-8">
                You answered {answeredCount} out of {interviewQuestions.length} questions
              </p>
              
              <div className="space-y-6 mb-8 text-left">
                {interviewQuestions.map((q) => (
                  <div key={q.id} className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <span className="inline-block px-3 py-1 bg-purple-500/30 text-purple-200 text-xs rounded-full mb-3">
                      {q.category}
                    </span>
                    <p className="text-white font-semibold mb-3">{q.question}</p>
                    <div className="bg-white/5 rounded p-4">
                      <p className="text-purple-200 text-sm mb-1">Your Answer:</p>
                      <p className="text-white">
                        {answers[q.id] || <span className="text-gray-400 italic">No answer provided</span>}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={restartInterview}
                  className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Retake Interview
                </button>
                <Link href="/">
                  <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-colors border border-white/20">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = interviewQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-purple-300 hover:text-purple-200 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-2xl font-bold text-white">Web3 Interview</h1>
              <span className="text-purple-200">
                Question {currentQuestion + 1} of {interviewQuestions.length}
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className="bg-purple-500 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / interviewQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-6">
            <span className="inline-block px-3 py-1 bg-purple-500/30 text-purple-200 text-xs rounded-full mb-4">
              {question.category}
            </span>
            <h2 className="text-2xl font-semibold text-white mb-6">{question.question}</h2>
            
            <textarea
              value={answers[question.id] || ''}
              onChange={(e) => handleAnswerChange(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 min-h-[200px]"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors border border-white/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            {currentQuestion === interviewQuestions.length - 1 ? (
              <button
                onClick={submitInterview}
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
              >
                Submit Interview
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors"
              >
                Next
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          <div className="mt-6 text-center">
            <p className="text-purple-200">
              Answered: {answeredCount} / {interviewQuestions.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

