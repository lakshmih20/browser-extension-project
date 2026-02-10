import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

const Instagram = () => {
  const navigate = useNavigate();
  const [showAdModal, setShowAdModal] = React.useState(false);
  const [adDismissed, setAdDismissed] = React.useState(false);
  const [currentProductIndex, setCurrentProductIndex] = React.useState(0);

  const products = [
    {
      name: 'Leather Handbag',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop',
      originalPrice: '₹8,999',
      discountPrice: '₹4,499',
      discount: '50%'
    },
    {
      name: 'Summer Dress',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=300&fit=crop',
      originalPrice: '₹2,999',
      discountPrice: '₹999',
      discount: '67%'
    },
    {
      name: 'Designer Sunglasses',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
      originalPrice: '₹4,999',
      discountPrice: '₹1,499',
      discount: '70%'
    },
    {
      name: 'Running Shoes',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
      originalPrice: '₹6,999',
      discountPrice: '₹2,999',
      discount: '57%'
    }
  ];

  React.useEffect(() => {
    if (!adDismissed) {
      const timer = setTimeout(() => setShowAdModal(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [adDismissed]);

  // Auto-rotate products every 3 seconds
  React.useEffect(() => {
    if (showAdModal) {
      const interval = setInterval(() => {
        setCurrentProductIndex((prev) => (prev + 1) % products.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [showAdModal, products.length]);

  const handleClaimDiscount = () => {
    setShowAdModal(false);
    navigate('/flipkart', { state: { featuredProduct: products[currentProductIndex] } });
  };

  const handleCloseAd = () => {
    setShowAdModal(false);
    setAdDismissed(true);
  };

  const stories = [
    { name: 'Your Story', emoji: '📖', color: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { name: 'Anu', emoji: '👩', color: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    { name: 'travel_pics', emoji: '✈️', color: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    { name: 'foodie', emoji: '🍕', color: 'linear-gradient(135deg, #fa709a, #fee140)' },
    { name: 'design_hub', emoji: '🎨', color: 'linear-gradient(135deg, #30cfd0, #330867)' }
  ];
  const posts = [
    {
      author: 'Anu',
      location: 'Paradise',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      profileGradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
      profileEmoji: '📸',
      likes: '2156',
      caption: 'Paradise found! 🏝️'
    },
    {
      author: 'fashionstore',
      location: 'Fashion Week',
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=300&fit=crop',
      profileGradient: 'linear-gradient(135deg, #f77737, #fead4e)',
      profileEmoji: '👗',
      likes: '4820',
      caption: 'New collection launches tomorrow! ✨'
    },
    {
      author: 'foodie_delights',
      location: 'Café Downtown',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop',
      profileGradient: 'linear-gradient(135deg, #fa709a, #fee140)',
      profileEmoji: '🍰',
      likes: '3457',
      caption: 'Best coffee & pastries in town! ☕'
    },
    {
      author: 'nature_explorer',
      location: 'Mountain Peak',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
      profileGradient: 'linear-gradient(135deg, #a8edea, #fed6e3)',
      profileEmoji: '🏔️',
      likes: '5892',
      caption: 'Sunrise never gets old. Nature is life! 🌅'
    }
  ];
  return (
    <div style={{ width: '100vw', minHeight: '100vh', backgroundColor: '#fafafa', fontFamily: '-apple-system, sans-serif', margin: 0, padding: 0 }}>
      <div style={{ background: '#fff', borderBottom: '1px solid #dbdbdb', padding: '8px 16px', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0, color: '#222' }}>Instagram</h1>
          <div style={{ display: 'flex', gap: '16px', fontSize: '20px' }}>
            <span style={{ cursor: 'pointer' }}>❤️</span>
            <span style={{ cursor: 'pointer' }}>💬</span>
          </div>
        </div>
      </div>
      
      <div style={{ width: '100%', maxHeight: 'calc(100vh - 60px)', overflowY: 'auto', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '600px' }}>
          
          <div style={{ background: '#fff', borderBottom: '1px solid #dbdbdb', padding: '12px 0', position: 'sticky', top: 0, zIndex: 999 }}>
            <div style={{ paddingLeft: '16px', display: 'flex', gap: '12px', overflowX: 'auto', scrollBehavior: 'smooth' }}>
              {stories.map((story, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', minWidth: '80px', cursor: 'pointer' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: story.color,
                    border: '2px solid #ff6b6b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px'
                  }}>{story.emoji}</div>
                  <span style={{ fontSize: '11px', color: '#222', textAlign: 'center', width: '70px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{story.name}</span>
                </div>
              ))}
            </div>
          </div>

          {posts.map((post, idx) => (
            <div key={idx} style={{ background: '#fff', marginBottom: '8px', borderTop: '1px solid #dbdbdb', borderBottom: '1px solid #dbdbdb' }}>
              <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: post.profileGradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>{post.profileEmoji}</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#222' }}>{post.author}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{post.location}</div>
                  </div>
                </div>
                <span style={{ fontSize: '20px', cursor: 'pointer' }}>⋯</span>
              </div>
              
              <div style={{ width: '100%', height: '400px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                <img src={post.image} alt={post.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <div style={{ padding: '12px 16px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '24px' }}>
                  <span style={{ cursor: 'pointer' }}>❤️</span>
                  <span style={{ cursor: 'pointer' }}>💬</span>
                  <span style={{ cursor: 'pointer' }}>📤</span>
                  <span style={{ marginLeft: 'auto', cursor: 'pointer' }}>🔖</span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#222', marginBottom: '6px' }}>{post.likes} likes</div>
                <div style={{ fontSize: '14px', color: '#222' }}>
                  <span style={{ fontWeight: '600' }}>{post.author}</span>
                  {' ' + post.caption}
                </div>
              </div>
            </div>
          ))}

          <div style={{ background: '#fff', marginTop: '8px', padding: '32px 16px', textAlign: 'center', borderTop: '1px solid #dbdbdb' }}>
            <div style={{ color: '#999', fontSize: '14px' }}>No more posts to load</div>
          </div>
        </div>
      </div>

      {showAdModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000 }}>
          <div style={{ background: '#fff', borderRadius: '12px', maxWidth: '380px', width: '90%', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', overflow: 'hidden', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', background: '#fff', padding: '16px' }}>
              <button onClick={handleCloseAd} style={{ position: 'absolute', top: '10px', right: '10px', background: '#fff', border: 'none', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', color: '#333', zIndex: 1 }}>✕</button>
              
              {/* Product Image */}
              <img src={products[currentProductIndex].image} alt={products[currentProductIndex].name} style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px', display: 'block' }} />
              
              <h2 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: 'bold', color: '#222' }}>{products[currentProductIndex].name}</h2>
              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '16px', color: '#999', textDecoration: 'line-through' }}>{products[currentProductIndex].originalPrice}</span>
                <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#d32f2f' }}>{products[currentProductIndex].discountPrice}</span>
              </div>
              <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#555', lineHeight: '1.5' }}>We detected you are browsing! Get <strong>{products[currentProductIndex].discount} OFF</strong> on Flipkart now.</p>
              <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginBottom: '16px' }}>
                {products.map((_, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setCurrentProductIndex(idx)}
                    style={{ 
                      width: '8px', 
                      height: '8px', 
                      borderRadius: '50%', 
                      background: idx === currentProductIndex ? '#0066ff' : '#ddd',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease'
                    }}
                  ></div>
                ))}
              </div>
              <button onClick={handleClaimDiscount} style={{ width: '100%', padding: '14px 20px', background: '#0066ff', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>Claim {products[currentProductIndex].discount} Discount</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Flipkart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const featuredProduct = location.state?.featuredProduct;
  
  // If there's a featured product from Instagram, show product detail page
  if (featuredProduct) {
    return (
      <div style={{ width: '100vw', minHeight: '100vh', backgroundColor: '#f0f0f0', fontFamily: '-apple-system, sans-serif', margin: 0, padding: 0 }}>
        {/* Header */}
        <div style={{ background: '#2874f0', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '20px', color: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <button onClick={() => navigate('/instagram')} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ← Back
          </button>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0, fontStyle: 'italic' }}>Flipkart</h1>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '20px', fontSize: '24px' }}>
            <span style={{ cursor: 'pointer' }}>🔍</span>
            <span style={{ cursor: 'pointer' }}>🛒</span>
          </div>
        </div>

        {/* Product Detail Content */}
        <div style={{ maxWidth: '480px', margin: '0 auto', background: '#fff', minHeight: 'calc(100vh - 68px)' }}>
          {/* Product Image */}
          <div style={{ width: '100%', height: '400px', background: '#f7f7f7', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src={featuredProduct.image} alt={featuredProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Product Info */}
          <div style={{ padding: '24px' }}>
            <h2 style={{ margin: '0 0 16px 0', fontSize: '24px', fontWeight: 'bold', color: '#212121' }}>{featuredProduct.name}</h2>
            
            {/* Badges */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              <span style={{ padding: '6px 16px', background: '#fff4e6', color: '#ff9800', borderRadius: '4px', fontSize: '14px', fontWeight: '600', border: '1px solid #ffe0b2' }}>Premium</span>
              <span style={{ padding: '6px 16px', background: '#e8f5e9', color: '#4caf50', borderRadius: '4px', fontSize: '14px', fontWeight: '600', border: '1px solid #c8e6c9' }}>Best Seller</span>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#212121' }}>{featuredProduct.discountPrice}</span>
              <span style={{ fontSize: '18px', color: '#878787', textDecoration: 'line-through' }}>{featuredProduct.originalPrice}</span>
              <span style={{ fontSize: '16px', color: '#388e3c', fontWeight: '600' }}>{featuredProduct.discount} off</span>
            </div>
            <p style={{ fontSize: '13px', color: '#878787', marginBottom: '24px' }}>+ ₹49 Secured Packaging Fee</p>

            {/* Key Features */}
            <div style={{ marginBottom: '24px', padding: '20px', background: '#fafafa', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 'bold', color: '#212121' }}>Key Features</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#388e3c', fontSize: '18px' }}>✓</span>
                  <span style={{ fontSize: '15px', color: '#212121' }}>Premium Quality Product</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#388e3c', fontSize: '18px' }}>✓</span>
                  <span style={{ fontSize: '15px', color: '#212121' }}>100% Authentic</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#388e3c', fontSize: '18px' }}>✓</span>
                  <span style={{ fontSize: '15px', color: '#212121' }}>Fast Delivery Available</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#388e3c', fontSize: '18px' }}>✓</span>
                  <span style={{ fontSize: '15px', color: '#212121' }}>7 Days Replacement Policy</span>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div style={{ marginBottom: '24px', padding: '16px', background: '#f0f9ff', borderRadius: '8px', border: '1px solid #bae6fd' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '15px', color: '#666' }}>Delivery by</span>
                <span style={{ fontSize: '15px', fontWeight: '600', color: '#212121' }}>Tomorrow</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '15px', color: '#666' }}>Seller</span>
                <span style={{ fontSize: '15px', fontWeight: '600', color: '#212121' }}>Flipkart (4.7⭐)</span>
              </div>
            </div>

            {/* Buy Now Button */}
            <button onClick={() => navigate('/payment')} style={{ width: '100%', padding: '16px', background: '#ff9f00', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 8px rgba(255,159,0,0.3)' }}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  // Default Flipkart page when no product is selected
  return (
    <div style={{ width: '100vw', minHeight: '100vh', backgroundColor: '#f0f0f0', fontFamily: '-apple-system, sans-serif', margin: 0, padding: 0 }}>
      <div style={{ background: '#2874f0', padding: '12px 0', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>🛒 Flipkart</h1>
          <input placeholder="Search..." style={{ padding: '8px 12px', borderRadius: '4px', border: 'none', width: '300px' }} />
          <span>Cart</span>
        </div>
      </div>
      <div style={{ padding: '40px 20px', maxHeight: 'calc(100vh - 60px)', overflowY: 'auto' }}>
        <h2 style={{ marginBottom: '20px', color: '#212121' }}>Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px', maxWidth: '1400px', margin: '0 auto 40px' }}>
          <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <img src="https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=250&h=200&fit=crop" alt="Smartphone" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '16px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 'bold' }}>Smartphone</h3>
              <div style={{ display: 'flex' }}><span style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '8px' }}>₹15,999</span><span style={{ fontSize: '12px', color: '#666', textDecoration: 'line-through' }}>₹22,999</span></div>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=250&h=200&fit=crop" alt="Laptop" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '16px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 'bold' }}>Laptop</h3>
              <div style={{ display: 'flex' }}><span style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '8px' }}>₹45,999</span><span style={{ fontSize: '12px', color: '#666', textDecoration: 'line-through' }}>₹65,999</span></div>
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=250&h=200&fit=crop" alt="Smart Watch" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '16px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 'bold' }}>Smart Watch</h3>
              <div style={{ display: 'flex' }}><span style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '8px' }}>₹8,999</span><span style={{ fontSize: '12px', color: '#666', textDecoration: 'line-through' }}>₹12,999</span></div>
            </div>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', display: 'grid', gridTemplateColumns: '300px 1fr', maxWidth: '1000px', margin: '0 auto' }}>
          <img src="https://images.unsplash.com/photo-1513268995621-96b0baeb514f?w=300&h=300&fit=crop" alt="Bundle Gift" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ padding: '40px' }}>
            <h2 style={{ margin: '0 0 16px 0', fontSize: '28px', fontWeight: 'bold' }}>Bundle</h2>
            <div style={{ marginBottom: '24px' }}><span style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff7f3f' }}>₹4,999</span><span style={{ fontSize: '16px', color: '#666', textDecoration: 'line-through', marginLeft: '12px' }}>₹9,999</span></div>
            <button onClick={() => navigate('/payment')} style={{ padding: '14px 32px', background: 'linear-gradient(135deg, #fb641b, #f77f3f)', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Payment = () => {
  const navigate = useNavigate();
  const [processing, setProcessing] = React.useState(false);
  const handlePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      alert('✅ Payment Successful!');
      navigate('/instagram');
    }, 2000);
  };
  return (
    <div style={{ width: '100vw', minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: '-apple-system, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', margin: 0 }}>
      <div style={{ maxWidth: '480px', width: '100%', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        {/* Header */}
        <div style={{ borderBottom: '1px solid #eee', padding: '24px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ fontSize: '28px' }}>🔒</div>
          <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#1a1a1a' }}>Secure Checkout</h1>
        </div>

        {/* Order Summary */}
        <div style={{ padding: '24px 20px', borderBottom: '1px solid #eee', backgroundColor: '#fafbfc' }}>
          <div style={{ fontSize: '12px', color: '#666', fontWeight: '500', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Amount</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a1a', marginBottom: '4px' }}>₹999</div>
          <div style={{ fontSize: '12px', color: '#999' }}>Payment will be processed securely</div>
        </div>

        {/* Payment Form */}
        <div style={{ padding: '24px 20px' }}>
          {/* Card Number */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>Card Number</label>
            <input type="text" placeholder="1234 5678 9012 3456" maxLength="19" style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'system-ui, -apple-system, sans-serif' }} />
          </div>

          {/* Cardholder Name */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>Name on Card</label>
            <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' }} />
          </div>

          {/* Expiry and CVV */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>Expiry</label>
              <input type="text" placeholder="MM/YY" maxLength="5" style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#1a1a1a' }}>CVV</label>
              <input type="password" placeholder="123" maxLength="4" style={{ width: '100%', padding: '12px 14px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' }} />
            </div>
          </div>

          {/* Security Badge */}
          <div style={{ padding: '12px', backgroundColor: '#f0f7ff', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontSize: '12px', color: '#0066cc' }}>
            <span>🛡️</span>
            <span style={{ fontWeight: '600' }}>Secured by Google Pay</span>
          </div>

          {/* Pay Now Button */}
          <button onClick={handlePayment} disabled={processing} style={{ width: '100%', padding: '14px', background: processing ? '#ccc' : '#4caf50', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: '600', cursor: processing ? 'not-allowed' : 'pointer', transition: 'background 0.3s ease' }}>
            {processing ? 'Processing...' : 'Pay Now'}
          </button>

          {/* Footer text */}
          <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '11px', color: '#999' }}>
            Your transaction is encrypted and secure
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/flipkart" element={<Flipkart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/" element={<div style={{textAlign:'center', marginTop:'50px'}}><button onClick={()=>window.location.href='/instagram'}>Start</button></div>} />
      </Routes>
    </Router>
  );
}