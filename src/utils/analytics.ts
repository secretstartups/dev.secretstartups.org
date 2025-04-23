// src/utils/analytics.ts

/**
 * Track button clicks and other user interactions using existing analytics setup
 * @param {string} eventName - Name of the event (e.g., 'button_click')
 * @param {Record<string, any>} eventData - Data to track with the event
 */
export const trackEvent = (eventName: string, eventData: Record<string, unknown> = {}): void => {
    // Google Analytics tracking
    if (window.gtag) {
      window.gtag('event', eventName, eventData);
    }
    
    // Hotjar tracking (convert eventName to snake_case for Hotjar)
    if (window.hj) {
      const hjEventName = eventName.replace(/([A-Z])/g, '_$1').toLowerCase();
      window.hj('event', hjEventName);
    }
    
    // Microsoft Clarity tracking
    if (window.clarity) {
      window.clarity('event', eventName, eventData);
    }
  };
  
  /**
   * Convenience function specifically for tracking button clicks
   * @param {string} buttonName - Name of the button that was clicked
   * @param {string} buttonLocation - Where on the site the button is located
   */
  export const trackButtonClick = (buttonName: string, buttonLocation: string): void => {
    trackEvent('button_click', {
      button_name: buttonName,
      button_location: buttonLocation,
      timestamp: new Date().toISOString()
    });
  };
  
  // Type definitions for the global analytics libraries
  declare global {
    interface Window {
      gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
      dataLayer?: unknown[];
      hj?: (command: string, action: string, params?: Record<string, unknown>) => void;
      clarity?: (command: string, action: string, params?: Record<string, unknown>) => void;
    }
  }
