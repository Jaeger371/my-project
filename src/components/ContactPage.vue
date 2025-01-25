<template>
  <main class="contact-page">
    <!-- Mysterious overlay for the dark theme -->
    <div class="mysterious-overlay"></div>

    <section class="section hero-section">
      <div class="section-content">
        <h1 class="elegant-title">Get in Touch</h1>
        <p class="refined-tagline">Let's Create Something Extraordinary Together</p>
        <div class="contact-cards">
          <div class="contact-card">
            <span class="icon">◇</span>
            <h3>General Inquiries</h3>
            <p>Available 24/7 for your questions</p>
            <a href="mailto:connect@venue.com" class="contact-link">connect@venue.com</a>
          </div>
          <div class="contact-card">
            <span class="icon">◈</span>
            <h3>VIP Services</h3>
            <p>Exclusive arrangements and requests</p>
            <a href="mailto:vip@venue.com" class="contact-link">vip@venue.com</a>
          </div>
          <div class="contact-card">
            <span class="icon">✦</span>
            <h3>Press & Media</h3>
            <p>For media inquiries and collaborations</p>
            <a href="mailto:press@venue.com" class="contact-link">press@venue.com</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section form-section">
      <div class="section-content">
        <h2 class="elegant-title">Send Us a Message</h2>
        <p class="refined-description">Share your vision, and we'll bring it to life</p>
        
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-grid">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                placeholder="John Doe"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                placeholder="john@example.com"
                required
              >
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="formData.phone" 
                placeholder="+1 (555) 000-0000"
              >
            </div>

            <div class="form-group">
              <label for="eventType">Event Type</label>
              <select id="eventType" v-model="formData.eventType" required>
                <option value="" disabled selected>Select an event type</option>
                <option value="private">Private Event</option>
                <option value="corporate">Corporate Function</option>
                <option value="wedding">Wedding Reception</option>
                <option value="birthday">Birthday Celebration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div class="form-group full-width">
              <label for="message">Your Message</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                placeholder="Tell us about your vision..."
                rows="5"
                required
              ></textarea>
            </div>
          </div>

          <div class="form-footer">
            <button type="submit" class="primary-button">Send Message</button>
          </div>
        </form>
      </div>
    </section>

    <section class="section location-section">
      <div class="section-content">
        <h2 class="elegant-title">Visit Us</h2>
        <div class="location-grid">
          <div class="location-info">
            <div class="info-group">
              <h3>Main Office</h3>
              <p>123 Elegant Avenue</p>
              <p>Suite 1800</p>
              <p>New York, NY 10001</p>
            </div>
            
            <div class="info-group">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: By Appointment</p>
              <p>Sunday: Closed</p>
            </div>

            <div class="info-group">
              <h3>Contact Details</h3>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Fax: +1 (555) 123-4568</p>
              <p>Toll-free: 1-800-ELEGANT</p>
            </div>
          </div>
          
          <div class="location-map">
            <div class="map-placeholder">
              <span class="icon">◈</span>
              <p>Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log('Form submitted:', this.formData);
      // Reset form after submission
      this.formData = {
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: ''
      };
    }
  }
};
</script>

<style scoped>
/* Main container and background */
.contact-page {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  padding: 60px 40px;
  background: #0A0F18; /* Dark background (matches previous theme) */
  min-height: 100vh;
  position: relative;
  color: #fff; /* Base text color on dark bg */
}

/* Mysterious overlay like the previous design */
.mysterious-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, transparent 0%, #0A0F18 100%);
  pointer-events: none;
  z-index: 1;
}

/* Sections share the dark refined styling */
.section {
  border-radius: 2px;
  padding: 60px;
  background: #0D1220; 
  position: relative;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(25, 56, 138, 0.05);
}

.section:hover {
  border-color: rgba(25, 56, 138, 0.2);
}

/* Title & Tagline styling */
.elegant-title {
  font-size: 2.2rem;
  color: #fff;
  font-weight: 300;
  letter-spacing: 4px;
  margin-bottom: 30px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.refined-tagline {
  font-size: 1rem;
  color: #19388A; /* Accent color */
  margin-bottom: 60px;
  text-align: center;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.refined-description {
  font-size: 1rem;
  color: #ccc;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto 40px auto;
  text-align: center;
  letter-spacing: 1px;
}

/* Contact cards styling */
.contact-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 60px 0;
}

.contact-card {
  text-align: center;
  padding: 30px;
  background: rgba(25, 56, 138, 0.03);
  border: 1px solid rgba(25, 56, 138, 0.05);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.contact-card:hover {
  border-color: rgba(25, 56, 138, 0.2);
  background: rgba(25, 56, 138, 0.05);
}

.contact-card .icon {
  font-size: 2rem;
  color: #19388A;
  margin-bottom: 20px;
  opacity: 0.8;
}

.contact-card h3 {
  color: #fff;
  font-size: 1rem;
  margin-bottom: 15px;
  font-weight: 300;
  letter-spacing: 2px;
}

.contact-card p {
  color: #ccc;
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 0.9rem;
}

/* Contact link with accent color on hover */
.contact-link {
  color: #19388A;
  text-decoration: none;
  transition: color 0.3s ease;
}
.contact-link:hover {
  color: #fff;
}

/* Form styles */
.contact-form {
  max-width: 900px;
  margin: 0 auto;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

/* Labels on dark background */
label {
  color: #fff;
  margin-bottom: 8px;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 0.9rem;
}

/* Dark-themed inputs, matching accent borders */
input,
select,
textarea {
  padding: 12px 16px;
  border: 1px solid rgba(25, 56, 138, 0.2);
  border-radius: 4px;
  font-size: 0.9rem;
  color: #fff;
  background: #050710;
  transition: all 0.3s ease;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #19388A; 
  box-shadow: 0 0 0 2px rgba(25, 56, 138, 0.2);
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.form-footer {
  text-align: center;
}

/* Primary button with accent color */
.primary-button {
  background: rgba(25, 56, 138, 0.9);
  color: #fff;
  border: 1px solid transparent;
  padding: 15px 40px;
  font-size: 0.9rem;
  border-radius: 2px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 300;
}
.primary-button:hover {
  background: rgba(25, 56, 138, 1);
  border-color: rgba(25, 56, 138, 0.5);
  transform: translateY(-2px);
}

/* Location grid and info */
.location-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 40px;
}

.location-info {
  display: grid;
  gap: 40px;
}

.info-group h3 {
  color: #fff;
  font-size: 1rem;
  margin-bottom: 15px;
  font-weight: 300;
  letter-spacing: 2px;
}

.info-group p {
  color: #ccc;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

/* Map placeholder styling */
.location-map {
  background: rgba(25, 56, 138, 0.03);
  border: 1px solid rgba(25, 56, 138, 0.05);
  border-radius: 2px;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.location-map:hover {
  border-color: rgba(25, 56, 138, 0.2);
  background: rgba(25, 56, 138, 0.05);
}

.map-placeholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.map-placeholder .icon {
  font-size: 3rem;
  color: #19388A;
  margin-bottom: 20px;
}

.map-placeholder p {
  color: #ccc;
  font-size: 1rem;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .contact-cards {
    grid-template-columns: repeat(2, 1fr);
  }
  .location-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 40px 20px;
  }
  .contact-cards {
    grid-template-columns: 1fr;
  }
  .form-grid {
    grid-template-columns: 1fr;
  }
  .elegant-title {
    font-size: 1.8rem;
  }
  .refined-tagline {
    font-size: 0.9rem;
  }
}
</style>
