<template>
    <main class="enter-code-page">
      <!-- Subtle radial overlay -->
      <div class="mysterious-overlay"></div>
  
      <!-- Code entry section (hero) -->
      <section class="section code-validation">
        <div class="section-content">
          <!-- Optional diamond mark -->
          <div class="logo-mark">◈</div>
  
          <!-- Title & tagline -->
          <h2 class="elegant-title">M31° Hideout</h2>
          <p class="refined-tagline">Enter the Extraordinary</p>
  
          <!-- If code not yet validated, show code input -->
          <div v-if="!codeValid" class="form-container">
            <label class="access-label" for="accessCode">Enter 4‐digit code</label>
            <input
              id="accessCode"
              v-model="accessCode"
              maxlength="4"
              class="access-input"
              placeholder="XXXX"
            />
            <button @click="validateCode" class="primary-button">
              Validate Code
            </button>
            <p v-if="errorMessage" class="error-message">
              {{ errorMessage }}
            </p>
          </div>
  
          <!-- If code is valid, show name/surname form -->
          <div v-else class="form-container">
            <h3 class="accepted-title">Code Accepted</h3>
            <p class="refined-description">Please identify yourself</p>
  
            <label class="access-label" for="name">First Name</label>
            <input
              id="name"
              type="text"
              v-model="name"
              class="access-input"
              placeholder="Enter your first name"
            />
  
            <label class="access-label" for="surname">Surname</label>
            <input
              id="surname"
              type="text"
              v-model="surname"
              class="access-input"
              placeholder="Enter your surname"
            />
  
            <button @click="submitForm" class="primary-button">
              Submit
            </button>
            <p v-if="successMessage" class="success-message">
              {{ successMessage }}
            </p>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  export default {
    name: "EnterCodePage",
    data() {
      return {
        accessCode: "",
        name: "",
        surname: "",
        codeValid: false,
        errorMessage: "",
        successMessage: "",
        correctCode: "1234",
      };
    },
    methods: {
      validateCode() {
        if (this.accessCode === this.correctCode) {
          this.codeValid = true;
          this.errorMessage = "";
        } else {
          this.errorMessage = "Invalid code. Please try again.";
        }
      },
      submitForm() {
        if (this.name && this.surname) {
          this.successMessage = `Welcome, ${this.name} ${this.surname}!`;
          this.name = "";
          this.surname = "";
        } else {
          this.successMessage = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* 1) Ensure no default margins/padding at the top of the page */
  html, body, #app {
    margin: 0;
    padding: 0;
    background: #0A0F18; /* match your dark background */
  }
  
  /* 2) Remove any header / nav box‐shadow or border if you have a global header */
  header, .navbar {
    box-shadow: none !important;
    border: none !important;
    margin-bottom: 0 !important;
  }
  
  /* Main container for this page */
  .enter-code-page {
    position: relative;
    min-height: 100vh;
    background: #0A0F18; /* consistent dark theme */
    color: #fff;
  }
  
  /* Mysterious radial overlay from center to dark */
  .mysterious-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, #0A0F18 100%);
    pointer-events: none;
    z-index: 1;
  }
  
  /* The hero/section with no large top margin now */
  .section.code-validation {
    /* Removed the margin: 60px 40px; so it sits flush below any header */
    padding: 60px 20px;
    background: #0D1220;
    border: 1px solid rgba(25, 56, 138, 0.05);
    position: relative;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .section.code-validation:hover {
    border-color: rgba(25, 56, 138, 0.2);
  }
  
  .section-content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  
  /* The diamond mark (if you want it) */
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
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;
  }
  
  .refined-tagline {
    font-size: 1rem;
    color: #19388A;
    margin-bottom: 40px;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: center;
  }
  
  .form-container {
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
    text-align: left;
  }
  
  .access-label {
    display: block;
    color: #ccc;
    font-size: 0.85rem;
    margin-bottom: 6px;
    letter-spacing: 1px;
  }
  
  .access-input {
    width: 100%;
    padding: 12px 16px;
    margin-bottom: 20px;
    border: 1px solid rgba(25, 56, 138, 0.1);
    background: #0A0F18;
    color: #fff;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    border-radius: 2px;
    transition: border-color 0.4s;
  }
  .access-input:focus {
    outline: none;
    border-color: rgba(25, 56, 138, 0.5);
  }
  
  /* Reuse your primary-button style */
  .primary-button {
    display: inline-block;
    text-decoration: none;
    background: rgba(25, 56, 138, 0.9);
    color: #fff;
    border: 1px solid transparent;
    padding: 14px 28px;
    font-size: 0.8rem;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 300;
    width: 100%;
    text-align: center;
  }
  .primary-button:hover {
    background: rgba(25, 56, 138, 1);
    border-color: rgba(25, 56, 138, 0.5);
    transform: translateY(-2px);
  }
  
  .accepted-title {
    font-size: 1.6rem;
    color: #fff;
    font-weight: 300;
    letter-spacing: 2px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .refined-description {
    font-size: 1rem;
    color: #ccc;
    line-height: 1.8;
    text-align: center;
    letter-spacing: 1px;
    max-width: 500px;
    margin: 0 auto 40px;
  }
  
  .error-message {
    color: #f44336;
    text-align: center;
    margin-top: 10px;
  }
  .success-message {
    color: #3ed091;
    text-align: center;
    margin-top: 20px;
  }
  
  @media (max-width: 768px) {
    .section.code-validation {
      padding: 40px 20px;
    }
    .access-input {
      margin-bottom: 16px;
    }
  }
  </style>
  