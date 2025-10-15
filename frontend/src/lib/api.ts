const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export const api = {
  async signUp(data: SignUpData) {
    const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to sign up');
    }
    
    return response.json();
  }
};