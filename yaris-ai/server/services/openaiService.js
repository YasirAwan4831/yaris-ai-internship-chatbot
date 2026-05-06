const { GoogleGenerativeAI } = require("@google/generative-ai");
const config = require("../config/env");

const genAI = new GoogleGenerativeAI(config.geminiApiKey);

const generateChatResponse = async (message, history = []) => {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: "You are Yaris AI, a modern, professional, and helpful AI assistant."
    });

    // Convert history to Gemini format
    const formattedHistory = history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const chat = model.startChat({
      history: formattedHistory,
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return {
      role: "assistant",
      content: text
    };
  } catch (error) {
    console.error("Error calling AI API:", error);

    // fallback response (so app doesn't crash)
    return {
      role: "assistant",
      content:
        "Sorry, AI service is currently unavailable. Please try again later.",
    };
  }
};

module.exports = {
  generateChatResponse,
};