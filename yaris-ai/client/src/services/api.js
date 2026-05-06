import axios from 'axios';
import { API_BASE_URL } from '../config';

export const sendChatMessage = async (message, history) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/chat`, {
      message,
      history
    });
    return response.data;
  } catch (error) {
    console.error("Error in sendChatMessage:", error);
    throw error;
  }
};
