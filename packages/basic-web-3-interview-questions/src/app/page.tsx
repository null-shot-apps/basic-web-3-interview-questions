'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Christmas Background Layers */}
      <div className="fixed inset-0 bg-aurora-layer-1"></div>
      <div className="fixed inset-0 bg-aurora-layer-2"></div>
      <div className="fixed inset-0 bg-aurora-layer-3"></div>
      <div className="fixed inset-0 bg-particles"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-6xl">🎄</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Web3 Interview Platform
          </h1>
          <p className="text-xl text-red-200 drop-shadow-md">
            Professional Q&A for blockchain interviews
          </p>
          <p className="text-sm text-green-300 mt-2">🎅 Happy Holidays! 🎁</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Interviewer Card */}
          <Link href="/interviewer">
            <div className="bg-gradient-to-br from-red-900/40 to-green-900/40 backdrop-blur-lg rounded-2xl p-8 border-2 border-red-400/30 hover:border-red-400/60 hover:shadow-2xl hover:shadow-red-500/20 transition-all cursor-pointer group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">Interviewer 🎅</h2>
                <p className="text-red-100">
                  Create and manage interview questions
                </p>
              </div>
            </div>
          </Link>

          {/* Interviewee Card */}
          <Link href="/interviewee">
            <div className="bg-gradient-to-br from-green-900/40 to-red-900/40 backdrop-blur-lg rounded-2xl p-8 border-2 border-green-400/30 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all cursor-pointer group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">Interviewee 🎁</h2>
                <p className="text-green-100">
                  Answer interview questions
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}



