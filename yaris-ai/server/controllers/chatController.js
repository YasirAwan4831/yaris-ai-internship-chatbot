const openaiService = require('../services/openaiService');

const handleChat = async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const aiResponse = await openaiService.generateChatResponse(message, history || []);
    res.json({ message: aiResponse.content, role: aiResponse.role });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate response', details: error.message });
  }
};

module.exports = {
  handleChat,
};
