<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="mysterious-line"></div>
    <div class="header-content">
      <div class="logo">
        <router-link to="/" class="logo-text">
          <span class="logo-symbol">◈</span>
          M31°Hideout
        </router-link>
        <span class="logo-accent">Anno MMXXV</span>
      </div>

      <!-- Desktop Nav (hidden on mobile) -->
      <nav class="desktop-nav">
        <ul class="nav-list">
          <li><router-link to="/" @click="closeMenu">SANCTUM</router-link></li>
          <li><router-link to="/about" @click="closeMenu">LEGACY</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">LIAISON</router-link></li>
          <li><router-link to="/map" @click="closeMenu">LOCALE</router-link></li>
          <li><router-link to="/enter-code" @click="closeMenu">ACCESS</router-link></li>
          <li>
            <button class="reserve-button" @click="closeMenu">INITIATE</button>
          </li>
        </ul>
      </nav>

      <!-- Hamburger (shown on mobile) -->
      <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen">
        <span class="menu-icon"></span>
      </button>

      <!-- Mobile Dropdown with the same links -->
      <ul v-if="isMenuOpen" class="mobile-dropdown" @click.stop>
        <li><router-link to="/" @click="closeMenu">SANCTUM</router-link></li>
        <li><router-link to="/about" @click="closeMenu">LEGACY</router-link></li>
        <li><router-link to="/contact" @click="closeMenu">LIAISON</router-link></li>
        <li><router-link to="/map" @click="closeMenu">LOCALE</router-link></li>
        <li><router-link to="/enter-code" @click="closeMenu">ACCESS</router-link></li>
        <li>
          <button class="reserve-button" @click="closeMenu">INITIATE</button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("click", this.handleOutsideClick);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("click", this.handleOutsideClick);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? "hidden" : "";
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = "";
    },
    handleOutsideClick(e) {
      // Close the mobile dropdown if user clicks outside the header
      if (!this.$el.contains(e.target)) {
        this.closeMenu();
      }
    },
  },
};
</script>

<style scoped>
/* ======== EXISTING HEADER STYLES (unchanged) ======== */

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(3, 4, 7, 0.98);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 20px 0;
  border-bottom: 1px solid rgba(25, 56, 138, 0.05);
}

.mysterious-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(25, 56, 138, 0.2) 25%,
    rgba(25, 56, 138, 0.2) 75%,
    transparent 100%
  );
}

.header-scrolled {
  background: rgba(5, 7, 16, 0.98);
  padding: 15px 0;
  backdrop-filter: blur(10px);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo-text {
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 300;
  color: #fff;
  letter-spacing: 3px;
  margin: 0;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
}

.logo-symbol {
  color: #19388A;
  margin-right: 10px;
  font-size: 1.4rem;
  opacity: 0.8;
}

.logo-accent {
  font-size: 0.7rem;
  color: #19388A;
  letter-spacing: 4px;
  text-transform: uppercase;
  opacity: 0.8;
}

.reserve-button {
  background: rgba(25, 56, 138, 0.1);
  color: #fff;
  border: 1px solid rgba(25, 56, 138, 0.3);
  padding: 12px 28px;
  font-size: 0.75rem;
  letter-spacing: 3px;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
}
.reserve-button:hover {
  background: rgba(25, 56, 138, 0.2);
  border-color: rgba(25, 56, 138, 0.5);
  transform: translateY(-2px);
}

/* =========== NAV & LINKS (Desktop) =========== */
.desktop-nav {
  /* Shown on desktop, hidden on mobile */
}
.nav-list {
  display: flex;
  gap: 40px;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-list a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.75rem;
  letter-spacing: 3px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 5px 0;
  position: relative;
  font-weight: 300;
}
.nav-list a:hover,
.nav-list a.router-link-active {
  color: #fff;
}
.nav-list a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #19388A;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}
.nav-list a:hover::after,
.nav-list a.router-link-active::after {
  width: 100%;
  opacity: 0.8;
}

/* =========== HAMBURGER TOGGLE (Mobile) =========== */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}
.menu-icon {
  display: block;
  width: 24px;
  height: 1px;
  background: rgba(255, 255, 255, 0.7);
  position: relative;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 1px;
  background: rgba(255, 255, 255, 0.7);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.menu-icon::before {
  top: -6px;
}
.menu-icon::after {
  bottom: -6px;
}

/* =========== MOBILE DROPDOWN =========== */
.mobile-dropdown {
  position: absolute;
  top: 60px; /* Adjust if your header is taller */
  right: 40px;
  background: rgba(3, 4, 7, 0.98);
  padding: 20px;
  list-style: none;
  margin: 0;
  border: 1px solid rgba(25, 56, 138, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
  z-index: 9999;
  width: 180px; /* Adjust width as you see fit */
}
.mobile-dropdown li {
  margin-bottom: 15px;
  text-align: center;
}
.mobile-dropdown li:last-child {
  margin-bottom: 0;
}
.mobile-dropdown a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.75rem;
  letter-spacing: 3px;
  display: block;
  transition: color 0.3s ease;
  font-weight: 300;
}
.mobile-dropdown a:hover {
  color: #fff;
}

/* Hide desktop nav on small screens, show hamburger + dropdown instead */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  .menu-toggle {
    display: block;
  }
}
</style>
