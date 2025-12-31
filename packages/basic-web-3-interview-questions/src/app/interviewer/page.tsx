'use client';

import { useState } from 'react';
import Link from 'next/link';

const defaultQuestions = [
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

export default function InterviewerPage() {
  const [questions, setQuestions] = useState(defaultQuestions);
  const [newQuestion, setNewQuestion] = useState('');
  const [newCategory, setNewCategory] = useState('Fundamentals');
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);

  const addQuestion = () => {
    if (newQuestion.trim()) {
      const newQ = {
        id: questions.length + 1,
        question: newQuestion,
        category: newCategory
      };
      setQuestions([...questions, newQ]);
      setNewQuestion('');
    }
  };

  const deleteQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
    setSelectedQuestions(selectedQuestions.filter(qId => qId !== id));
  };

  const toggleQuestion = (id: number) => {
    if (selectedQuestions.includes(id)) {
      setSelectedQuestions(selectedQuestions.filter(qId => qId !== id));
    } else {
      setSelectedQuestions([...selectedQuestions, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-blue-300 hover:text-blue-200 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Interviewer Dashboard</h1>
          <p className="text-blue-200 mb-8">Create and manage Web3 interview questions</p>

          {/* Add Question Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Add New Question</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-blue-200 mb-2">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-blue-400"
                >
                  <option value="Fundamentals">Fundamentals</option>
                  <option value="Smart Contracts">Smart Contracts</option>
                  <option value="DeFi">DeFi</option>
                  <option value="NFTs">NFTs</option>
                  <option value="Security">Security</option>
                </select>
              </div>
              <div>
                <label className="block text-blue-200 mb-2">Question</label>
                <textarea
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="Enter your question here..."
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 min-h-[100px]"
                />
              </div>
              <button
                onClick={addQuestion}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Add Question
              </button>
            </div>
          </div>

          {/* Questions List */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Question Bank</h2>
              <span className="text-blue-200">{selectedQuestions.length} selected</span>
            </div>

            <div className="space-y-4">
              {questions.map((q) => (
                <div
                  key={q.id}
                  className={`p-4 rounded-lg border transition-all ${
                    selectedQuestions.includes(q.id)
                      ? 'bg-blue-500/20 border-blue-400'
                      : 'bg-white/5 border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <input
                      type="checkbox"
                      checked={selectedQuestions.includes(q.id)}
                      onChange={() => toggleQuestion(q.id)}
                      className="mt-1 w-5 h-5 rounded cursor-pointer"
                    />
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-blue-500/30 text-blue-200 text-xs rounded-full mb-2">
                        {q.category}
                      </span>
                      <p className="text-white">{q.question}</p>
                    </div>
                    <button
                      onClick={() => deleteQuestion(q.id)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

