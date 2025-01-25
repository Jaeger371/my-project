<template>
  <main>
    <div class="mysterious-overlay"></div>
    <section class="section hero">
      <div class="section-content">
        <div class="logo-mark">◈</div>
        <h2 class="elegant-title">M31° Hideout</h2>
        <p class="refined-tagline">Enter the Extraordinary</p>
        <div class="features">
          <div class="feature-card">
            <span class="icon">◈</span>
            <h3>Elite Access</h3>
            <p>Beyond the ordinary</p>
          </div>
          <div class="feature-card">
            <span class="icon">◊</span>
            <h3>Hidden Venues</h3>
            <p>Where discretion prevails</p>
          </div>
          <div class="feature-card">
            <span class="icon">⬡</span>
            <h3>Private Service</h3>
            <p>Unparalleled attention</p>
          </div>
        </div>
        <router-link to="/contact" class="primary-button">Initiate Contact</router-link>
      </div>
    </section>

    <section class="section services">
      <div class="section-content">
        <h2 class="elegant-title">The Inner Circle</h2>
        <div class="service-grid">
          <div class="service-card">
            <div class="card-inner">
              <h3>Private Affairs</h3>
              <p>Where discretion meets distinction</p>
              <div class="service-divider"></div>
              <ul class="service-features">
                <li>Elite Curation</li>
                <li>Ambient Mastery</li>
                <li>Exclusive Access</li>
              </ul>
            </div>
          </div>
          <div class="service-card">
            <div class="card-inner">
              <h3>Executive Events</h3>
              <p>Command presence with precision</p>
              <div class="service-divider"></div>
              <ul class="service-features">
                <li>Strategic Excellence</li>
                <li>Tactical Execution</li>
                <li>Discrete Management</li>
              </ul>
            </div>
          </div>
          <div class="service-card">
            <div class="card-inner">
              <h3>Elite Series</h3>
              <p>By invitation only</p>
              <div class="service-divider"></div>
              <ul class="service-features">
                <li>Private Access</li>
                <li>Select Networks</li>
                <li>Bespoke Experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section about">
      <div class="section-content">
        <h2 class="elegant-title">The Mystery</h2>
        <p class="refined-description">
          In shadows of excellence, we orchestrate moments that transcend the expected. 
          Our legacy thrives in whispers among the elite.
        </p>
        <div class="achievements">
          <div class="achievement-card">
            <span class="number">VII</span>
            <span class="label">Years in Shadow</span>
          </div>
          <div class="achievement-card">
            <span class="number">CXX</span>
            <span class="label">Elite Members</span>
          </div>
          <div class="achievement-card">
            <span class="number">XIII</span>
            <span class="label">Hidden Venues</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section contact">
      <div class="section-content">
        <h2 class="elegant-title">Private Access</h2>
        <div class="contact-options">
          <router-link to="/contact" class="primary-button">Request Entry</router-link>
          <router-link to="/contact" class="outline-button">Elite Inquiries</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "MainContent"
};
</script>

<style scoped>
/* Slightly lightened dark background for a brighter look */
main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  padding: 60px 40px;
  /* Old: #030407 — new: #0A0F18 */
  background: #0A0F18;
  min-height: 100vh;
  position: relative;
  color: #fff;
}

/* Lighten the overlay slightly as well */
.mysterious-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* Was #030407 — new #0A0F18 for a subtle radial */
  background: radial-gradient(circle at center, transparent 0%, #0A0F18 100%);
  pointer-events: none;
  z-index: 1;
}

/* Sections: lighten background from #050710 to something a bit brighter */
.section {
  border-radius: 2px;
  padding: 60px;
  /* Old: #050710 — new: #0D1220 */
  background: #0D1220;
  position: relative;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(25, 56, 138, 0.05);
  /* box-shadow removed per previous request */
}
.section:hover {
  border-color: rgba(25, 56, 138, 0.2);
}

/* Keep accent color #19388A for the logo-mark */
.logo-mark {
  font-size: 3rem;
  color: #19388A;
  text-align: center;
  margin-bottom: 20px;
  opacity: 0.8;
}

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
  color: #19388A;
  margin-bottom: 60px;
  text-align: center;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 60px 0;
}

.feature-card {
  text-align: center;
  padding: 30px;
  background: rgba(25, 56, 138, 0.03);
  border: 1px solid rgba(25, 56, 138, 0.05);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid rgba(25, 56, 138, 0);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.feature-card:hover::before {
  border-color: rgba(25, 56, 138, 0.2);
  transform: scale(1.05);
}

.icon {
  font-size: 1.6rem;
  color: #19388A;
  margin-bottom: 20px;
  display: block;
  opacity: 0.8;
}

.feature-card h3 {
  color: #fff;
  font-size: 1rem;
  margin-bottom: 15px;
  font-weight: 300;
  letter-spacing: 2px;
}

/* Lighten from #666 to #ccc for better visibility */
.feature-card p {
  color: #ccc;
  line-height: 1.6;
  font-size: 0.9rem;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 60px;
}

.service-card {
  background: rgba(25, 56, 138, 0.03);
  position: relative;
  overflow: hidden;
}

.card-inner {
  padding: 40px;
  border: 1px solid rgba(25, 56, 138, 0.05);
  height: 100%;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .card-inner {
  border-color: rgba(25, 56, 138, 0.2);
  background: rgba(25, 56, 138, 0.05);
}

.service-divider {
  height: 1px;
  background: #19388A;
  margin: 20px 0;
  width: 20px;
  opacity: 0.3;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
}

/* Lighten bullet text from #666 to #ccc */
.service-features li {
  color: #ccc;
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
  font-size: 0.9rem;
  letter-spacing: 1px;
}
.service-features li::before {
  content: '›';
  color: #19388A;
  position: absolute;
  left: 0;
  opacity: 0.8;
}

.achievements {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 60px;
}

.achievement-card {
  text-align: center;
  padding: 30px;
  background: rgba(25, 56, 138, 0.03);
  border: 1px solid rgba(25, 56, 138, 0.05);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.achievement-card:hover {
  border-color: rgba(25, 56, 138, 0.2);
  background: rgba(25, 56, 138, 0.05);
}

.number {
  font-size: 2rem;
  color: #19388A;
  font-weight: 300;
  display: block;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

/* Lighten from #666 to #ccc */
.label {
  color: #ccc;
  font-weight: 300;
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.contact-options {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
}

.primary-button {
  display: inline-block;
  text-decoration: none;
  background: rgba(25, 56, 138, 0.9);
  color: white;
  border: 1px solid transparent;
  padding: 15px 40px;
  font-size: 0.8rem;
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

.outline-button {
  display: inline-block;
  text-decoration: none;
  background: transparent;
  border: 1px solid rgba(25, 56, 138, 0.3);
  color: #fff;
  padding: 15px 40px;
  font-size: 0.8rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 300;
}
.outline-button:hover {
  border-color: rgba(25, 56, 138, 0.8);
  background: rgba(25, 56, 138, 0.05);
  transform: translateY(-2px);
}

/* Lighten from #666 to #ccc */
.refined-description {
  font-size: 1rem;
  color: #ccc;
  line-height: 1.8;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  letter-spacing: 1px;
}

@media (max-width: 1024px) {
  .service-grid,
  .features,
  .achievements {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .section {
    padding: 40px 20px;
  }
  
  .service-grid,
  .features,
  .achievements {
    grid-template-columns: 1fr;
  }
  
  .elegant-title {
    font-size: 1.8rem;
  }
  
  .refined-tagline {
    font-size: 0.9rem;
  }
  
  .contact-options {
    flex-direction: column;
    align-items: stretch;
  }
  
  .primary-button,
  .outline-button {
    width: 100%;
    text-align: center;
  }
}
</style>
