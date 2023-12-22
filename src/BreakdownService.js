// BreakdownService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/breakdown'; // Update with your backend API URL

const BreakdownService = {
  getBreakdowns: () => axios.get(API_URL),
  createBreakdown: (breakdown) => axios.post(API_URL, breakdown),
  updateBreakdown: (id, breakdown) => axios.put(`${API_URL}/${id}`, breakdown),
};

export default BreakdownService;
