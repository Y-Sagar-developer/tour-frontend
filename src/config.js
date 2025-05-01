export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const API_ENDPOINTS = {
  AUTH: `${API_URL}/api/v1/auth`,
  TOURS: `${API_URL}/api/v1/tours`,
  USERS: `${API_URL}/api/v1/users`,
  REVIEWS: `${API_URL}/api/v1/review`,
  BOOKINGS: `${API_URL}/api/v1/booking`,
}; 