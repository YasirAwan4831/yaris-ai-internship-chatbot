import React, { useEffect, useRef } from 'react';
import Message from './Message';
import { Bot, Sparkles } from 'lucide-react';

const ChatBox = ({ messages, isLoading }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar scroll-smooth">
      <div className="max-w-4xl mx-auto">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center mt-12 sm:mt-24 opacity-90 animate-fade-in">
            <div className="bg-gradient-to-tr from-blue-600 to-indigo-500 p-5 rounded-3xl mb-6 shadow-xl shadow-blue-500/20">
              <Bot size={56} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-100 mb-3 tracking-tight">Welcome to Yaris AI</h2>
            <p className="text-slate-400 max-w-md text-lg leading-relaxed mb-10">
              Your professional, intelligent assistant. Ask me anything and let's get started.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
              {[
                { icon: <Sparkles size={16}/>, text: 'Draft a professional email' },
                { icon: <Sparkles size={16}/>, text: 'Explain quantum mechanics' },
                { icon: <Sparkles size={16}/>, text: 'Help me debug my React code' },
                { icon: <Sparkles size={16}/>, text: 'Plan a 3-day trip to Japan' }
              ].map((tip, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-2xl p-4 text-sm text-slate-300 text-left transition-all cursor-pointer shadow-sm">
                  <div className="text-blue-500">{tip.icon}</div>
                  <span className="font-medium">{tip.text}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <Message key={index} message={msg} />
            ))}
            
            {isLoading && (
              <div className="flex w-full mb-6 justify-start animate-fade-in">
                <div className="flex max-w-[85%] flex-row gap-3 items-end">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-sm">
                    <Bot size={18} className="text-white" />
                  </div>
                  <div className="px-5 py-4 rounded-2xl bg-slate-800 border border-slate-700 rounded-bl-none shadow-sm">
                    <div className="typing-indicator flex items-center h-[10px]">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} className="h-4" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
