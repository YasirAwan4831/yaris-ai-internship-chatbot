import React from 'react';
import { Bot, User } from 'lucide-react';

const Message = ({ message }) => {
  const isAi = message.role === 'assistant' || message.role === 'system';

  return (
    <div className={`flex w-full mb-6 ${isAi ? 'justify-start' : 'justify-end'} animate-fade-in`}>
      <div className={`flex max-w-[85%] sm:max-w-[75%] ${isAi ? 'flex-row' : 'flex-row-reverse'} gap-3 items-end`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${
          isAi ? 'bg-gradient-to-tr from-blue-600 to-indigo-500' : 'bg-slate-700'
        }`}>
          {isAi ? <Bot size={18} className="text-white" /> : <User size={18} className="text-slate-300" />}
        </div>

        {/* Bubble */}
        <div className={`px-5 py-3.5 text-[15px] rounded-2xl shadow-sm ${
          isAi 
            ? 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700 leading-relaxed' 
            : 'bg-blue-600 text-white rounded-br-none leading-relaxed'
        }`}>
          <p className="whitespace-pre-wrap">{message.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
