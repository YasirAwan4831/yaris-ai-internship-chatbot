import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ChatBox from '../components/ChatBox';
import InputBox from '../components/InputBox';
import { sendChatMessage } from '../services/api';

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content) => {
    // Add user message to UI immediately
    const userMessage = { role: 'user', content };
    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setIsLoading(true);

    try {
      // Format history for the API (only previous messages, not the current one)
      const apiHistory = messages.map(msg => ({ role: msg.role, content: msg.content }));
      
      const response = await sendChatMessage(content, apiHistory);
      
      // Add AI response to UI
      setMessages(prev => [...prev, { role: response.role || 'assistant', content: response.message }]);
    } catch (error) {
      console.error('Chat error:', error);
      // Add error message
      setMessages(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: 'Sorry, I encountered an error connecting to the server. Please ensure the backend is running properly and the Gemini API key is configured.' 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-slate-100 overflow-hidden font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col min-h-0 relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5">
        <ChatBox messages={messages} isLoading={isLoading} />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 to-transparent h-6 pointer-events-none"></div>
        <InputBox onSendMessage={handleSendMessage} isLoading={isLoading} />
      </main>
    </div>
  );
};

export default Home;
