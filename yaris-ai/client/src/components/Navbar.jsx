import React from 'react';
import { Bot } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-10 backdrop-blur-md bg-opacity-80">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-500 p-2 rounded-xl shadow-lg shadow-blue-500/20">
            <Bot size={24} className="text-white" />
          </div>
          <h1 className="text-xl font-bold text-white tracking-wide">Yaris AI</h1>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Online</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
