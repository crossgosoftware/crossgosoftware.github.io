/**
 * Location Simulator for Testing
 * 
 * This utility allows testing how the site behaves when accessed from different countries.
 * 
 * IMPORTANT: This file should NOT be included in production builds.
 * It's purely for development and testing purposes.
 */

import { LANGUAGES } from '../i18n';
import i18n from '../i18n';

// Countries supported for simulation
export const COUNTRIES = {
  JAPAN: 'JP',
  CHINA: 'CN',
  TAIWAN: 'TW',
  HONG_KONG: 'HK',
  USA: 'US',
  UK: 'GB',
};

// Mock timezones for different countries
const COUNTRY_TIMEZONES = {
  [COUNTRIES.JAPAN]: 'Asia/Tokyo',
  [COUNTRIES.CHINA]: 'Asia/Shanghai',
  [COUNTRIES.TAIWAN]: 'Asia/Taipei',
  [COUNTRIES.HONG_KONG]: 'Asia/Hong_Kong',
  [COUNTRIES.USA]: 'America/New_York',
  [COUNTRIES.UK]: 'Europe/London',
};

// Mock languages for different countries
const COUNTRY_LANGUAGES = {
  [COUNTRIES.JAPAN]: 'ja-JP',
  [COUNTRIES.CHINA]: 'zh-CN',
  [COUNTRIES.TAIWAN]: 'zh-TW',
  [COUNTRIES.HONG_KONG]: 'zh-HK',
  [COUNTRIES.USA]: 'en-US',
  [COUNTRIES.UK]: 'en-GB',
};

/**
 * Simulate accessing the site from a specific country
 * @param countryCode - The country code to simulate
 */
export function simulateCountry(countryCode: string): void {
  if (!COUNTRY_TIMEZONES[countryCode]) {
    console.error(`Country code ${countryCode} not supported for simulation`);
    return;
  }

  // Store the original methods and properties we'll be mocking
  const originalDateTimeFormat = Intl.DateTimeFormat;
  const originalLanguage = navigator.language;
  
  // Override the necessary browser APIs to simulate location
  
  // 1. Mock the timezone
  Object.defineProperty(Intl, 'DateTimeFormat', {
    value: function(...args: any[]) {
      return {
        ...new originalDateTimeFormat(...args),
        resolvedOptions: () => ({
          timeZone: COUNTRY_TIMEZONES[countryCode],
          locale: COUNTRY_LANGUAGES[countryCode]
        })
      };
    },
    configurable: true
  });
  
  // 2. Mock the navigator language
  Object.defineProperty(navigator, 'language', {
    value: COUNTRY_LANGUAGES[countryCode],
    configurable: true
  });
  
  // 3. Clear any stored language preference
  localStorage.removeItem('i18nextLng');
  
  // 4. Force i18next to detect language again
  i18n.changeLanguage(undefined);
  
  console.log(`Location simulated: ${countryCode} (${COUNTRY_LANGUAGES[countryCode]})`);
  
  // Show a notification on the page
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '60px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.backgroundColor = 'rgba(0,0,0,0.8)';
  notification.style.color = 'white';
  notification.style.padding = '10px 20px';
  notification.style.borderRadius = '5px';
  notification.style.zIndex = '10000';
  notification.style.fontSize = '14px';
  notification.style.fontWeight = 'bold';
  notification.style.textAlign = 'center';
  notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  notification.style.transition = 'opacity 0.5s ease-in-out';
  
  // Show which language was detected
  const language = i18n.language || 'unknown';
  notification.textContent = `Simulating location: ${countryCode} → Detected language: ${language}`;
  
  document.body.appendChild(notification);
  
  // Restore original browser behavior after a short delay
  setTimeout(() => {
    Object.defineProperty(Intl, 'DateTimeFormat', {
      value: originalDateTimeFormat,
      configurable: true
    });
    
    Object.defineProperty(navigator, 'language', {
      value: originalLanguage,
      configurable: true
    });
    
    // Fade out and remove notification
    notification.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 500);
    
    console.log('Browser location simulation ended');
  }, 5000);
}

/**
 * Add a simulated location selector to the page
 * This is only for development and testing
 */
export function addLocationSimulator(): void {
  if (!import.meta.env.DEV) return;
  
  // If we already have a simulator, don't add another
  if (document.getElementById('location-simulator')) return;
  
  const container = document.createElement('div');
  container.id = 'location-simulator';
  container.style.position = 'fixed';
  container.style.bottom = '10px';
  container.style.right = '10px';
  container.style.backgroundColor = 'rgba(0,0,0,0.7)';
  container.style.color = 'white';
  container.style.padding = '10px';
  container.style.borderRadius = '5px';
  container.style.zIndex = '9999';
  container.style.fontSize = '12px';
  
  const title = document.createElement('div');
  title.textContent = 'Location Simulator';
  title.style.fontWeight = 'bold';
  title.style.marginBottom = '5px';
  container.appendChild(title);
  
  // Create buttons for each country
  Object.entries(COUNTRIES).forEach(([countryName, countryCode]) => {
    const button = document.createElement('button');
    button.textContent = `${countryName} (${countryCode})`;
    button.style.margin = '2px';
    button.style.padding = '3px 5px';
    button.style.backgroundColor = '#444';
    button.style.border = 'none';
    button.style.borderRadius = '3px';
    button.style.color = 'white';
    button.style.cursor = 'pointer';
    
    button.addEventListener('click', () => {
      simulateCountry(countryCode);
      
      // Highlight the selected button
      Array.from(container.querySelectorAll('button')).forEach(btn => {
        btn.style.backgroundColor = '#444';
      });
      button.style.backgroundColor = '#007bff';
    });
    
    container.appendChild(button);
  });
  
  // Add note
  const note = document.createElement('div');
  note.textContent = 'Note: Simulation lasts for 5 seconds';
  note.style.fontSize = '10px';
  note.style.marginTop = '5px';
  note.style.opacity = '0.7';
  container.appendChild(note);
  
  document.body.appendChild(container);
}

// Only in development, add the simulator after a short delay to ensure the DOM is ready
if (import.meta.env.DEV) {
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(addLocationSimulator, 1000);
  });
}