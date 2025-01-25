<template>
  <div id="app">
    <AppHeader />
    <div class="content-wrapper">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import "leaflet/dist/leaflet.css";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
};
</script>

<style>
/* Reset default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Cormorant Garamond', 'Arial', sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #ffffff, #f8fafc);
}

.content-wrapper {
  flex: 1;
  padding-top: 80px; /* Should match your header height */
  min-height: calc(100vh - 80px); /* Adjust based on header height */
}

/* Leaflet map styles */
.leaflet-container {
  width: 100%;
  height: 500px;
  z-index: 1;
}

/* Transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Fix for footer positioning */
#app > footer {
  margin-top: auto;
}
</style>