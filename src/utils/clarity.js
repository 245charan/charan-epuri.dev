import Clarity from '@microsoft/clarity';

const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID || 'yourProjectId';

export const initClarity = () => {
	if (CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== 'yourProjectId') {
		Clarity.init(CLARITY_PROJECT_ID);
	}
};

export const identifyUser = (customId, customSessionId, customPageId, friendlyName) => {
	if (CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== 'yourProjectId') {
		Clarity.identify(customId, customSessionId, customPageId, friendlyName);
	}
};

export const setTag = (key, value) => {
	if (CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== 'yourProjectId') {
		Clarity.setTag(key, value);
	}
};

export const trackEvent = (eventName) => {
	if (CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== 'yourProjectId') {
		Clarity.event(eventName);
	}
};

export const setConsent = (consentOptions = { ad_Storage: 'granted', analytics_Storage: 'granted' }) => {
	if (CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== 'yourProjectId') {
		Clarity.consentV2(consentOptions);
	}
};

export const upgradeSession = (reason) => {
	if (CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== 'yourProjectId') {
