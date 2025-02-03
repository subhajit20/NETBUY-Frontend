// ContactUs.js
import { useState } from 'react';
import SocialButton from '../common/buttons/socialbuttons/SocialButton';
import './contactus.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="contact-container p-4 pt-20">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2 className="info-title">Contact Information</h2>
          <div className="info-items">
            <div className="info-item">
              <span className="material-icon">📍</span>
              <div>
                <h3>Our Office</h3>
                <p>123 Business Street<br/>New York, NY 10001</p>
              </div>
            </div>
            <div className="info-item">
              <span className="material-icon">📞</span>
              <div>
                <h3>Phone Number</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <span className="material-icon">✉️</span>
              <div>
                <h3>Email Address</h3>
                <p>contact@company.com</p>
              </div>
            </div>
          </div>
          <div className="social-links">
          <SocialButton />

            {/* <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
            <a href="#" className="social-link" aria-label="Twitter">🐦</a>
            <a href="#" className="social-link" aria-label="Instagram">📸</a>
            <a href="#" className="social-link" aria-label="Website">🔗</a> */}
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <h1 className="form-title">Send us a message</h1>
            
            <div className="input-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <label>Your Name</label>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Your Email</label>
            </div>

            <div className="input-group textarea-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                required
              ></textarea>
              <label>Your Message</label>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loader"></div>
              ) : (
                <>
                  Send Message
                  <span className="send-icon">→</span>
                </>
              )}
            </button>

            {isSubmitted && (
              <div className="success-message">
                ✓ Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;