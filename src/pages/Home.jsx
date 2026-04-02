import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import './Home.css';

// Mock featured products
const featuredProducts = [
  { id: 1, name: "The Imperial Pearl Tote", price: 350.00, category: "Bag", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "Oceanic Clutch Purse", price: 185.00, category: "Purse", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Lustrous Evening Bag", price: 220.00, category: "Bag", image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=600" }
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content animate-fade-in">
          <h1 className="hero-title">
            pakaya in <span className="gold-text">Every Pearl</span>
          </h1>
          <p className="hero-subtitle">
            Discover our premium collection of handcrafted pearl bags and purses. Timeless beauty, modern sophistication.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary btn-large">
              Shop Collection <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured-section container">
        <div className="section-header">
          <h2>Featured <span className="gold-text">Timeless Pieces</span></h2>
        </div>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/products" className="btn btn-outline">View All Products</Link>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section glass">
        <div className="container about-content">
          <div className="about-text">
            <h2>Our <span className="gold-text">Story</span></h2>
            <p>
              PearlVea was born from a passion for timeless elegance. We believe that a pearl
              is more than just a gem—it's a statement of grace. Our master craftsmen meticulously
              handcraft each bag and purse, blending pure, lustrous pearls to create modern
              accessories that stand out. Quality, durability, and luxury are stitched into
              every design.
            </p>
          </div>
          <div className="about-features">
            <div className="feature">
              <ShieldCheck size={36} className="gold-text" />
              <h4>Premium Quality</h4>
              <p>Authentic pearls with superior craftsmanship.</p>
            </div>
            <div className="feature">
              <Truck size={36} className="gold-text" />
              <h4>Global Shipping</h4>
              <p>Elegance delivered securely to your doorstep.</p>
            </div>
            <div className="feature">
              <Star size={36} className="gold-text" />
              <h4>Modern Aesthetic</h4>
              <p>Classic pearls woven into contemporary styles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section container">
        <div className="contact-card card-glass">
          <div className="section-header">
            <h2>Get in <span className="gold-text">Touch</span></h2>
          </div>
          <p className="contact-desc">
            Have questions about our collection or need a custom design? We’d love to hear from you.
          </p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" className="input-field" placeholder="Your Name" required />
            <input type="email" className="input-field" placeholder="Your Email" required />
            <textarea className="input-field" rows="4" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
