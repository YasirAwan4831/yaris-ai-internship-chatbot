const app = require('./app');
const config = require('./config/env');

const port = config.port;

app.listen(port, () => {
  console.log(`\n🚀 Server is running on port ${port}`);
  if (!config.geminiApiKey || config.geminiApiKey === 'your_key') {
    console.warn('\n⚠️  WARNING: GEMINI_API_KEY is not set correctly in .env file!');
    console.warn('⚠️  The chatbot will not work until a valid API key is provided in server/.env\n');
  }
});
