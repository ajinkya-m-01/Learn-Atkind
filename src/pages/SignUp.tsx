import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, User } from 'lucide-react';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 overflow-auto">
      <div className="min-h-full flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-purple-600 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Sign Up Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8 animate-fade-in-up">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create an account</h1>
            <p className="text-gray-600">Join our community of learners today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-shadow"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-shadow"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-shadow"
                    placeholder="Choose a password"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform hover:-translate-y-0.5 transition-all duration-150"
              >
                {isLoading ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Creating account...
                  </span>
                ) : (
                  'Create Account'
                )}
              </button>

              <p className="text-center text-sm text-gray-600">
                By signing up, you agree to our{' '}
                <Link to="/terms" className="text-purple-600 hover:text-purple-700">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-purple-600 hover:text-purple-700">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-purple-600 hover:text-purple-700">
              Sign in
            </Link>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;