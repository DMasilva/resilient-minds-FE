// Centralized API Service for Resilient Minds
// All API endpoints and communication logic in one place

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api/v1';

// API Routes Configuration
export const API_ROUTES = {
  CONTACT_SUBMISSIONS: '/contact_submissions',
  APPOINTMENT_REQUESTS: '/appointment_requests',
  JOB_APPLICATIONS: '/job_applications',
  HEALTH: '/health'
};

/**
 * Base API request handler
 */
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const config = { ...defaultOptions, ...options };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.error || 'Request failed');
      error.status = response.status;
      error.errors = data.errors || [];
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    // Log errors in development only
    if (process.env.NODE_ENV === 'development') {
      console.error('API Error:', error);
    }
    return {
      success: false,
      error: error.message || 'Network error',
      errors: error.errors || []
    };
  }
};

/**
 * Contact Form Submission
 */
export const submitContactForm = async (formData) => {
  return apiRequest(API_ROUTES.CONTACT_SUBMISSIONS, {
    method: 'POST',
    body: JSON.stringify({ contact_submission: formData })
  });
};

/**
 * Get All Contact Submissions (Admin)
 */
export const getContactSubmissions = async () => {
  return apiRequest(API_ROUTES.CONTACT_SUBMISSIONS, {
    method: 'GET'
  });
};

/**
 * Appointment Request Submission
 */
export const submitAppointmentRequest = async (appointmentData) => {
  return apiRequest(API_ROUTES.APPOINTMENT_REQUESTS, {
    method: 'POST',
    body: JSON.stringify({ appointment_request: appointmentData })
  });
};

/**
 * Get All Appointment Requests (Admin)
 */
export const getAppointmentRequests = async () => {
  return apiRequest(API_ROUTES.APPOINTMENT_REQUESTS, {
    method: 'GET'
  });
};

/**
 * Job Application Submission
 */
export const submitJobApplication = async (applicationData) => {
  return apiRequest(API_ROUTES.JOB_APPLICATIONS, {
    method: 'POST',
    body: JSON.stringify({ job_application: applicationData })
  });
};

/**
 * Get All Job Applications (Admin)
 */
export const getJobApplications = async () => {
  return apiRequest(API_ROUTES.JOB_APPLICATIONS, {
    method: 'GET'
  });
};

/**
 * Health Check
 */
export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL.replace('/api/v1', '')}/health`);
    return response.ok;
  } catch (error) {
    return false;
  }
};

// Default export for convenience
const api = {
  // POST methods
  submitContactForm,
  submitAppointmentRequest,
  submitJobApplication,
  // GET methods (Admin)
  getContactSubmissions,
  getAppointmentRequests,
  getJobApplications,
  // Utility
  checkHealth,
  routes: API_ROUTES
};

export default api;

