// Production URL
export const BASE_URL = 'https://tour-backend-pr26.onrender.com/api/v1';

// Validate the API URL
if (!BASE_URL) {
  console.error('API URL is not configured. Please set VITE_API_URL environment variable.');
}

console.log('Using API URL:', BASE_URL);