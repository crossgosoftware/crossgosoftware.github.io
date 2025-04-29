import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from './locales/en.json';
import zhCNTranslation from './locales/zh-CN.json';
import zhTWTranslation from './locales/zh-TW.json';
import jaTranslation from './locales/ja.json';
import viTranslation from './locales/vi.json';

// Language constants (for use in the application)
export const LANGUAGES = {
  EN: 'en',
  ZH_CN: 'zh-CN',
  ZH_TW: 'zh-TW',
  JA: 'ja',
  VI: 'vi'
};

// Country to language mapping for specific regions
export const COUNTRY_TO_LANGUAGE: Record<string, string> = {
  'JP': LANGUAGES.JA,    // Japan -> Japanese
  'CN': LANGUAGES.ZH_CN, // China -> Simplified Chinese
  'HK': LANGUAGES.ZH_TW, // Hong Kong -> Traditional Chinese
  'TW': LANGUAGES.ZH_TW, // Taiwan -> Traditional Chinese
  'MO': LANGUAGES.ZH_TW, // Macau -> Traditional Chinese
  'SG': LANGUAGES.ZH_CN, // Singapore -> Simplified Chinese
  'VN': LANGUAGES.VI     // Vietnam -> Vietnamese
};

// Enhanced language detector that prioritizes geolocation
const enhancedLanguageDetector = {
  name: 'enhancedDetector',
  lookup() {
    try {
      // Try to get the timezone to estimate user's location
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      // Vietnamese timezone detection
      if (timezone.includes('Ho_Chi_Minh') || timezone.includes('Hanoi')) {
        return LANGUAGES.VI;
      }
      
      // Japanese timezone detection
      if (timezone.includes('Tokyo') || timezone.includes('Japan') || 
          timezone.includes('Osaka') || timezone.includes('Sapporo')) {
        return LANGUAGES.JA;
      }
      
      // Check navigator.language for more specific language detection
      const navLang = navigator.language;
      const langOnly = navLang.split('-')[0];
      const countryCode = navLang.split('-')[1]?.toUpperCase();
      
      // If we have a country code and it maps to a specific language
      if (countryCode && countryCode in COUNTRY_TO_LANGUAGE) {
        return COUNTRY_TO_LANGUAGE[countryCode];
      }
      
      // Special handling for Chinese languages
      if (langOnly === 'zh') {
        // Check for Traditional Chinese indicators
        if (navLang.includes('TW') || navLang.includes('HK') || 
            navLang.includes('Hant')) {
          return LANGUAGES.ZH_TW;
        }
        // Default Chinese to Simplified
        return LANGUAGES.ZH_CN;
      }
      
      // For Japanese
      if (langOnly === 'ja') {
        return LANGUAGES.JA;
      }

      // For Vietnamese
      if (langOnly === 'vi') {
        return LANGUAGES.VI;
      }
      
      // No specific match found
      return null;
    } catch (e) {
      console.warn('Language detection error:', e);
      return null;
    }
  }
};

// Configure i18next
i18n
  // Custom detector first, then standard ones
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources: {
      [LANGUAGES.EN]: {
        translation: enTranslation
      },
      [LANGUAGES.ZH_CN]: {
        translation: zhCNTranslation
      },
      [LANGUAGES.ZH_TW]: {
        translation: zhTWTranslation
      },
      [LANGUAGES.JA]: {
        translation: jaTranslation
      },
      [LANGUAGES.VI]: {
        translation: viTranslation
      }
    },
    fallbackLng: LANGUAGES.EN,
    debug: false,
    interpolation: {
      escapeValue: false // not needed for React
    },
    detection: {
      // Add our custom detector first, then fall back to standard methods
      order: ['enhancedDetector', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      // Register our custom detector
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0
    }
  });

// For backward compatibility with old 'zh' language code
// If a user had 'zh' stored in localStorage, map to 'zh-CN'
const storedLang = localStorage.getItem('i18nextLng');
if (storedLang === 'zh') {
  localStorage.setItem('i18nextLng', 'zh-CN');
}

// Add support for 'zh' as an alias for 'zh-CN'
i18n.addResourceBundle('zh', 'translation', zhCNTranslation);

// Register the custom language detector
i18n.services.languageDetector.addDetector(enhancedLanguageDetector);

export default i18n;