import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';
import './Products.css';

const allProducts = [
  { id: 1, name: "The Imperial Pearl Tote", price: 350.00, category: "Bag", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "Oceanic Clutch Purse", price: 185.00, category: "Purse", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Lustrous Evening Bag", price: 220.00, category: "Bag", image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Vintage Pearl Handbag", price: 410.00, category: "Bag", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600" },
  { id: 5, name: "Classic Mini Purse", price: 150.00, category: "Purse", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=600" },
  { id: 6, name: "Gold-Trimmed Pearl Bag", price: 280.00, category: "Bag", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&q=80&w=600" }
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const searchQ = searchParams.get('search') || '';
  
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState(searchQ);
  
  useEffect(() => {
    setSearch(searchQ);
  }, [searchQ]);

  const categories = ['All', 'Bag', 'Purse'];

  const filteredProducts = allProducts.filter(p => {
    const matchCategory = filter === 'All' || p.category === filter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="container page-wrapper">
      <div className="products-header">
        <h1>Our <span className="gold-text">Collection</span></h1>
        
        <div className="products-controls">
          <div className="filter-group">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="search-group">
            <Search size={20} className="search-icon" />
            <input 
              type="text" 
              className="input-field" 
              placeholder="Search products..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <p>No products found matching your search.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
