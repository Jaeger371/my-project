<template>
  <main class="about-page">
    <!-- Mysterious overlay for the dark theme -->
    <div class="mysterious-overlay"></div>

    <section class="section">
      <div class="section-content">
        <h1 class="elegant-title">About M31°Hideout</h1>
        <p class="refined-tagline">A Legacy of Excellence</p>
        
        <div class="content-grid">
          <div class="text-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2025, M31°Hideout has established itself as a premier destination for sophisticated
              entertainment and memorable events. Our vision combines contemporary luxury with timeless
              elegance, creating an atmosphere that's both exclusive and welcoming.
            </p>
            
            <h2>Our Philosophy</h2>
            <p>
              We believe in creating more than just events - we craft experiences that resonate with our
              guests long after they've left. Every detail is carefully considered, from the ambient
              lighting to the curated music selection, ensuring a perfect harmony of elements.
            </p>
            
            <h2>Our Space</h2>
            <p>
              Located in the heart of the city, our venue features state-of-the-art facilities while
              maintaining an intimate atmosphere. Multiple spaces can be configured to accommodate
              everything from private gatherings to corporate events.
            </p>
          </div>
          
          <div class="stats-grid">
            <div class="stat-card">
              <span class="number">10+</span>
              <span class="label">Years Experience</span>
            </div>
            <div class="stat-card">
              <span class="number">5000+</span>
              <span class="label">Events Hosted</span>
            </div>
            <div class="stat-card">
              <span class="number">100+</span>
              <span class="label">Partner Venues</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
/* -- MAIN CONTAINER -- */
.about-page {
  padding: 60px 40px;
  background: #0A0F18; /* Dark background */
  min-height: 100vh;
  position: relative;
  color: #fff; /* Base text color on dark */
  display: block;
}

/* Mysterious overlay for the darker theme */
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

/* -- SECTION -- */
.section {
  border-radius: 2px;
  padding: 60px;
  background: #0D1220; /* Slightly lighter than main background */
  position: relative;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(25, 56, 138, 0.05); /* Subtle accent border */
}

.section:hover {
  border-color: rgba(25, 56, 138, 0.2);
}

/* -- TITLES & TAGLINES -- */
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

/* -- CONTENT GRID -- */
.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  margin-top: 40px;
}

/* -- TEXT CONTENT -- */
.text-content h2 {
  color: #fff;
  font-size: 1.6rem;
  margin: 40px 0 20px;
  font-weight: 300;
  letter-spacing: 2px;
}

.text-content p {
  color: #ccc; /* Light gray for better contrast on dark background */
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

/* -- STATS GRID -- */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.stat-card {
  background: rgba(25, 56, 138, 0.03);
  padding: 30px;
  border-radius: 2px;
  text-align: center;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(25, 56, 138, 0.05);
}

.stat-card:hover {
  border-color: rgba(25, 56, 138, 0.2);
  background: rgba(25, 56, 138, 0.05);
  transform: translateY(-2px);
}

.number {
  font-size: 2rem;
  color: #19388A; /* Accent color */
  font-weight: 300;
  display: block;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.label {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 1px;
}

/* -- RESPONSIVE BREAKPOINTS -- */
@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .section {
    padding: 40px 20px;
  }
  .stats-grid {
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
