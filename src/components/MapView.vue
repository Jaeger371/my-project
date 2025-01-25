<template>
  <main>
    <!-- Subtle mysterious overlay -->
    <div class="mysterious-overlay"></div>

    <!-- Mysterious Map Section -->
    <section class="section enigma-coordinates">
      <div class="section-content">
        <h2 class="elegant-title">Coordinates Under Veil</h2>
        <p class="refined-description">
          Gaze upon our hidden vantage point in Linz, Austria, shrouded by illusions.
        </p>
        <!-- Map container -->
        <div class="map-container" id="map"></div>
      </div>
    </section>
  </main>
</template>

<script>
import L from "leaflet";
// Ensure Leaflet's CSS is loaded globally
import "leaflet/dist/leaflet.css";

export default {
  name: "EnigmaMap",
  data() {
    return {
      map: null,
      circle: null,
      originalRadius: 100,
      intervalId: null
    };
  },
  mounted() {
    // Initialize map as soon as this component is mounted
    this.initializeMap();
  },
  beforeUnmount() {
    // Cleanup intervals and map instance
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.map) {
      this.map.off();
      this.map.remove();
      this.map = null;
    }
  },
  methods: {
    initializeMap() {
      const mapContainer = document.getElementById("map");
      if (!mapContainer) {
        console.error("Map container not found!");
        return;
      }

      // If there's an existing map (e.g. hot reload), remove it
      if (this.map) {
        this.map.off();
        this.map.remove();
      }

      // Create a Leaflet map without fade/zoom animations
      this.map = L.map("map", {
        zoomControl: false,
        attributionControl: false,
        fadeAnimation: false,
        zoomAnimation: false
      });

      // Center on Linz, Austria
      this.map.setView([48.3069, 14.2858], 13);

      // Use Carto's "light_all" for a grayscale-style basemap
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, © <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19
      }).addTo(this.map);

      // Once map is ready, invalidate size to ensure proper rendering
      this.map.whenReady(() => {
        this.map.invalidateSize();
        console.log("Leaflet map is ready and size invalidated.");
      });

      // Add a marker with a custom glyph
      const marker = L.marker([48.3069, 14.2858], {
        icon: L.divIcon({
          html: '<span class="marker-icon">◆</span>',
          className: "custom-marker",
          iconSize: [30, 30],
          iconAnchor: [15, 30]
        })
      }).addTo(this.map);
      marker.bindPopup("<b>Access Denied.</b><br>Encrypted vantage point.").openPopup();

      // Add a circle around Linz
      this.circle = L.circle([48.3069, 14.2858], {
        color: "#19388A",
        fillColor: "#19388A",
        fillOpacity: 0.1,
        radius: this.originalRadius
      }).addTo(this.map);
      this.circle.bindPopup("<b>Perimeter of Secrecy</b>");

      // Start shrinking animation
      this.startShrinkingCircle();
    },
    startShrinkingCircle() {
      let currentRadius = this.originalRadius;
      const minRadius = 5;
      const shrinkStep = 5;
      const shrinkInterval = 750;

      this.intervalId = setInterval(() => {
        if (!this.circle) return;
        currentRadius -= shrinkStep;
        if (currentRadius <= minRadius) {
          currentRadius = this.originalRadius; // Reset to full size
        }
        this.circle.setRadius(currentRadius);
      }, shrinkInterval);
    }
  }
};
</script>

<style>
/* Not using "scoped" so Leaflet’s CSS applies fully */

/* Outer container styling */
main {
  display: block;
  background: #0A0F18;
  color: #fff;
  min-height: 100vh;
  position: relative;
  padding: 40px;
  /* We removed "overflow: hidden;" to avoid clipping the map */
}

/* Mysterious overlay */
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

/* Main section styling */
.section.enigma-coordinates {
  background: #0D1220;
  border: 1px solid rgba(25, 56, 138, 0.05);
  border-radius: 4px;
  padding: 60px;
  position: relative;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.section.enigma-coordinates:hover {
  border-color: rgba(25, 56, 138, 0.2);
}

.section-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

/* Headings and text */
.elegant-title {
  font-size: 2rem;
  color: #fff;
  font-weight: 300;
  letter-spacing: 4px;
  margin-bottom: 15px;
  font-family: 'Montserrat', sans-serif;
}

.refined-description {
  font-size: 0.95rem;
  color: #ccc;
  line-height: 1.6;
  letter-spacing: 1px;
  margin-bottom: 30px;
}

/* Map container with a red border for debugging visibility */
.map-container {
  flex-grow: 1; /* Allow it to take up available space */
  width: 100%;
  border-radius: 4px;
  margin-top: 20px;
}

/* Custom marker glyph styling */
.custom-marker .marker-icon {
  color: #19388A;
  font-size: 1.6rem;
}

/* Dark background behind the map tiles */
.leaflet-container {
  background: #10151f;
}
</style>
