import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, LogIn, User, Search, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    if (query) navigate(`/products?search=${query}`);
  };

  return (
    <nav className="navbar glass">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-text gold-text" style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', fontWeight: '700', letterSpacing: '2px' }}>PearlVea</span>
        </Link>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <a href="/#about">About Us</a>
          <a href="/#contact">Contact Us</a>
          <Link to="/products">Products</Link>
        </div>

        <form onSubmit={handleSearch} className="navbar-search">
          <input type="text" name="search" placeholder="Search elegant pearls..." className="search-input" />
          <button type="submit" className="search-btn"><Search size={18} /></button>
        </form>

        <div className="navbar-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link to="/cart" className="cart-icon">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {user ? (
            <Link to="/profile" className="profile-btn btn btn-outline">
              <User size={18} /> Profile
            </Link>
          ) : (
            <Link to="/login" className="login-btn btn btn-primary">
              <LogIn size={18} /> Login / Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
