import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, LogIn, User, Search, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    if (query) navigate(`/products?search=${query}`);
    setIsMobileMenuOpen(false); // Close menu on search
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar glass">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <span className="navbar-logo-text gold-text" style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', fontWeight: '700', letterSpacing: '2px' }}>PearlVea</span>
        </Link>

        <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
          <a href="/#about" onClick={closeMobileMenu}>About Us</a>
          <a href="/#contact" onClick={closeMobileMenu}>Contact Us</a>
          <Link to="/products" onClick={closeMobileMenu}>Products</Link>
          {user ? (
            <Link to="/profile" onClick={closeMobileMenu} className="mobile-signin">Profile</Link>
          ) : (
            <Link to="/login" onClick={closeMobileMenu} className="mobile-signin">Login / Sign Up</Link>
          )}
        </div>

        <form onSubmit={handleSearch} className="navbar-search">
          <input type="text" name="search" placeholder="Search elegant pearls..." className="search-input" />
          <button type="submit" className="search-btn"><Search size={18} /></button>
        </form>

        <div className="navbar-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link to="/cart" className="cart-icon" onClick={closeMobileMenu}>
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {user ? (
            <Link to="/profile" className="profile-btn btn btn-outline" onClick={closeMobileMenu}>
              <User size={18} /> Profile
            </Link>
          ) : (
            <Link to="/login" className="login-btn btn btn-primary" onClick={closeMobileMenu}>
              <LogIn size={18} /> Login / Sign Up
            </Link>
          )}
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
