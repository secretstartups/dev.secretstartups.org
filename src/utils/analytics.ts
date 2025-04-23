// src/utils/analytics.ts

/**
 * Track button clicks and other user interactions using existing analytics setup
 * @param {string} eventName - Name of the event (e.g., 'button_click')
 * @param {Record<string, any>} eventData - Data to track with the event
 */
export const trackEvent = (eventName: string, eventData: Record<string, unknown> = {}): void => {
  // Debug logging
  console.log(`📊 Tracking Event: ${eventName}`, eventData);
  
  // Check if analytics libraries are available
  const analyticsStatus = {
    googleAnalytics: typeof window.gtag !== 'undefined',
    hotjar: typeof window.hj !== 'undefined',
    clarity: typeof window.clarity !== 'undefined'
  };
  
  console.log('📊 Analytics Services Available:', analyticsStatus);
  
  // Google Analytics tracking
  if (window.gtag) {
    try {
      window.gtag('event', eventName, eventData);
      console.log('✅ Google Analytics event sent');
    } catch (error) {
      console.error('❌ Google Analytics error:', error);
    }
  } else {
    console.warn('⚠️ Google Analytics (gtag) not available');
  }
  
  // Hotjar tracking (convert eventName to snake_case for Hotjar)
  if (window.hj) {
    try {
      const hjEventName = eventName.replace(/([A-Z])/g, '_$1').toLowerCase();
      window.hj('event', hjEventName);
      console.log('✅ Hotjar event sent:', hjEventName);
    } catch (error) {
      console.error('❌ Hotjar error:', error);
    }
  } else {
    console.warn('⚠️ Hotjar (hj) not available');
  }
  
  // Microsoft Clarity tracking
  if (window.clarity) {
    try {
      window.clarity('event', eventName, eventData);
      console.log('✅ Microsoft Clarity event sent');
    } catch (error) {
      console.error('❌ Microsoft Clarity error:', error);
    }
  } else {
    console.warn('⚠️ Microsoft Clarity not available');
  }
};

/**
 * Convenience function specifically for tracking button clicks
 * @param {string} buttonName - Name of the button that was clicked
 * @param {string} buttonLocation - Where on the site the button is located
 */
export const trackButtonClick = (buttonName: string, buttonLocation: string): void => {
  console.log(`🖱️ Button Clicked: "${buttonName}" in "${buttonLocation}"`);
  
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
    timestamp: new Date().toISOString()
  });
};

/**
 * Helper function to check if analytics services are loaded
 * Can be called from the browser console to debug
 */
export const checkAnalyticsStatus = (): Record<string, boolean> => {
  const status = {
    googleAnalytics: typeof window.gtag !== 'undefined',
    hotjar: typeof window.hj !== 'undefined',
    clarity: typeof window.clarity !== 'undefined'
  };
  
  console.table(status);
  return status;
};

// Export debug function to window for console access
if (typeof window !== 'undefined') {
  (window as Window & typeof globalThis).checkAnalyticsStatus = checkAnalyticsStatus;
}

// Type definitions for the global analytics libraries
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
    hj?: (command: string, action: string, params?: Record<string, unknown>) => void;
    clarity?: (command: string, action: string, params?: Record<string, unknown>) => void;
    checkAnalyticsStatus?: () => Record<string, boolean>;
  }
}