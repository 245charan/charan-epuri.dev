import Clarity from '@microsoft/clarity';

/**
 * Microsoft Clarity Analytics Utility
 * 
 * This utility provides helper functions to interact with Clarity APIs
 * throughout your application.
 */

// Replace with your actual Clarity project ID
const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID || 'yourProjectId';

/**
 * Initialize Clarity (should be called once in App.jsx)
 */
export const initClarity = () => {
	if (CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== 'yourProjectId') {
		Clarity.init(CLARITY_PROJECT_ID);
	}
};

/**
 * Identify a user with custom identifiers
 * @param {string} customId - Unique identifier for the customer (required)
 * @param {string} customSessionId - Custom session identifier (optional)
 * @param {string} customPageId - Custom page identifier (optional)
 * @param {string} friendlyName - Friendly name for the customer (optional)
 */
export const identifyUser = (customId, customSessionId, customPageId, friendlyName) => {
	if (CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== 'yourProjectId') {
		Clarity.identify(customId, customSessionId, customPageId, friendlyName);
	}
};

/**
 * Set a custom tag
 * @param {string} key - The key for the tag
 * @param {string|string[]} value - The value(s) for the tag
 */
export const setTag = (key, value) => {
	if (CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== 'yourProjectId') {
		Clarity.setTag(key, value);
	}
};

/**
 * Track a custom event
 * @param {string} eventName - The name of the event
 */
export const trackEvent = (eventName) => {
	if (CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== 'yourProjectId') {
		Clarity.event(eventName);
	}
};

/**
 * Grant or deny cookie consent
 * @param {Object} consentOptions - Consent options
 * @param {string} consentOptions.ad_Storage - 'granted' | 'denied'
 * @param {string} consentOptions.analytics_Storage - 'granted' | 'denied'
 */
export const setConsent = (consentOptions = { ad_Storage: 'granted', analytics_Storage: 'granted' }) => {
	if (CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== 'yourProjectId') {
		Clarity.consentV2(consentOptions);
	}
};

/**
 * Upgrade a session (prioritize for recording)
 * @param {string} reason - The reason for the upgrade
 */
export const upgradeSession = (reason) => {
	if (CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== 'yourProjectId') {
		Clarity.upgrade(reason);
	}
};

