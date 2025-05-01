import axios from 'axios';
import { API_ENDPOINTS } from '../config';

const api = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth API calls
export const login = async (credentials) => {
  const response = await api.post(`${API_ENDPOINTS.AUTH}/login`, credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post(`${API_ENDPOINTS.AUTH}/register`, userData);
  return response.data;
};

// Tours API calls
export const getTours = async () => {
  const response = await api.get(API_ENDPOINTS.TOURS);
  return response.data;
};

export const getTourById = async (id) => {
  const response = await api.get(`${API_ENDPOINTS.TOURS}/${id}`);
  return response.data;
};

// Users API calls
export const getUserProfile = async () => {
  const response = await api.get(`${API_ENDPOINTS.USERS}/profile`);
  return response.data;
};

// Reviews API calls
export const createReview = async (tourId, reviewData) => {
  const response = await api.post(`${API_ENDPOINTS.REVIEWS}/${tourId}`, reviewData);
  return response.data;
};

// Bookings API calls
export const createBooking = async (bookingData) => {
  const response = await api.post(API_ENDPOINTS.BOOKINGS, bookingData);
  return response.data;
};

export default api; 