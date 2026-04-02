import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container page-wrapper profile-page">
      <div className="profile-card card-glass">
        <div className="profile-header">
          <div className="profile-avatar gold-text">
            {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
          </div>
          <h2>Welcome, <span className="gold-text">{user.displayName || "Valued Customer"}</span></h2>
        </div>
        
        <div className="profile-details">
          <div className="detail-row">
            <strong>Email:</strong>
            <span>{user.email}</span>
          </div>
          <div className="detail-row">
            <strong>Status:</strong>
            <span className="gold-text">Premium Member</span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="btn btn-outline" onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
