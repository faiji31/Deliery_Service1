const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Get token from localStorage
const getToken = () => localStorage.getItem('authToken');

// Create headers with token
const getHeaders = (includeAuth = true) => {
  const headers = { 'Content-Type': 'application/json' };
  if (includeAuth && getToken()) {
    headers['Authorization'] = `Bearer ${getToken()}`;
  }
  return headers;
};

// Auth API
export const authAPI = {
  register: async (userData) => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: getHeaders(false),
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      if (data.token) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: getHeaders(false),
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.token) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  getProfile: async () => {
    try {
      const response = await fetch(`${API_URL}/auth/profile`, {
        method: 'GET',
        headers: getHeaders(true),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch profile');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  updateProfile: async (userData) => {
    try {
      const response = await fetch(`${API_URL}/auth/profile`, {
        method: 'PUT',
        headers: getHeaders(true),
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to update profile');
      }

      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
      }

      return data;
    } catch (error) {
      throw error;
    }
  },
};

// Rider API
export const riderAPI = {
  register: async (riderData) => {
    try {
      const response = await fetch(`${API_URL}/riders/register`, {
        method: 'POST',
        headers: getHeaders(true),
        body: JSON.stringify(riderData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Rider registration failed');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  getProfile: async () => {
    try {
      const response = await fetch(`${API_URL}/riders/profile`, {
        method: 'GET',
        headers: getHeaders(true),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch rider profile');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  updateStatus: async (status) => {
    try {
      const response = await fetch(`${API_URL}/riders/status`, {
        method: 'PUT',
        headers: getHeaders(true),
        body: JSON.stringify({ status }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to update status');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },
};

// Parcel API
export const parcelAPI = {
  create: async (parcelData) => {
    try {
      const response = await fetch(`${API_URL}/parcels`, {
        method: 'POST',
        headers: getHeaders(true),
        body: JSON.stringify(parcelData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to create parcel');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  getAll: async (filters = {}) => {
    try {
      const queryString = new URLSearchParams(filters).toString();
      const response = await fetch(`${API_URL}/parcels?${queryString}`, {
        method: 'GET',
        headers: getHeaders(true),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch parcels');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/parcels/${id}`, {
        method: 'GET',
        headers: getHeaders(true),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch parcel');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  track: async (trackingId) => {
    try {
      const response = await fetch(`${API_URL}/parcels/track/${trackingId}`, {
        method: 'GET',
        headers: getHeaders(false),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to track parcel');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  verifyOTP: async (id, otp) => {
    try {
      const response = await fetch(`${API_URL}/parcels/${id}/verify-otp`, {
        method: 'POST',
        headers: getHeaders(true),
        body: JSON.stringify({ otp }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Invalid OTP');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },
};

// Payment API
export const paymentAPI = {
  createPaymentIntent: async (parcelId) => {
    try {
      const response = await fetch(`${API_URL}/payments/intent`, {
        method: 'POST',
        headers: getHeaders(true),
        body: JSON.stringify({ parcelId }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to create payment intent');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  confirmPayment: async (paymentData) => {
    try {
      const response = await fetch(`${API_URL}/payments/confirm`, {
        method: 'POST',
        headers: getHeaders(true),
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Payment confirmation failed');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  getHistory: async () => {
    try {
      const response = await fetch(`${API_URL}/payments/history`, {
        method: 'GET',
        headers: getHeaders(true),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch payment history');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },
};

// Admin API
export const adminAPI = {
  getDashboard: async () => {
    try {
      const response = await fetch(`${API_URL}/admin/dashboard`, {
        method: 'GET',
        headers: getHeaders(true),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch dashboard');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  getAnalytics: async (filters = {}) => {
    try {
      const queryString = new URLSearchParams(filters).toString();
      const response = await fetch(`${API_URL}/admin/analytics?${queryString}`, {
        method: 'GET',
        headers: getHeaders(true),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch analytics');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  getRiders: async () => {
    try {
      const response = await fetch(`${API_URL}/admin/riders`, {
        method: 'GET',
        headers: getHeaders(true),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch riders');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },

  approveRider: async (riderId) => {
    try {
      const response = await fetch(`${API_URL}/admin/riders/${riderId}/approve`, {
        method: 'PUT',
        headers: getHeaders(true),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to approve rider');
      }

      return data;
    } catch (error) {
      throw error;
    }
  },
};
