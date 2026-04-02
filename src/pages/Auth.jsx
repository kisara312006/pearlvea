import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Auth = ({ defaultIsLogin = true }) => {
  const [isLogin, setIsLogin] = useState(defaultIsLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  
  const { login, signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleAuth = async () => {
    setError('');
    try {
      await loginWithGoogle();
      navigate('/products');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password, name);
      }
      navigate('/products');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container page-wrapper auth-page">
      <div className="auth-card card-glass">
        <h2>{isLogin ? "Welcome Back to" : "Join"} <span className="gold-text">PearlVea</span></h2>
        <p className="auth-subtitle">
          {isLogin ? "Sign in to access your elegant collection." : "Create an account to start shopping."}
        </p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <input 
              type="text" 
              className="input-field" 
              placeholder="Full Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          )}
          <input 
            type="email" 
            className="input-field" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            className="input-field" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit" className="btn btn-primary auth-submit">
            {isLogin ? "Sign In" : "Register"}
          </button>
        </form>

        <div className="google-auth">
          <div className="divider">
            <span>OR</span>
          </div>
          <button type="button" onClick={handleGoogleAuth} className="btn btn-outline google-btn">
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
            Continue with Google
          </button>
        </div>

        <div className="auth-toggle">
          {isLogin ? (
            <p>Don't have an account? <span onClick={() => setIsLogin(false)} className="gold-text toggle-link">Sign Up</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setIsLogin(true)} className="gold-text toggle-link">Sign In</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
