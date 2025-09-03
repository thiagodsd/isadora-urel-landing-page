import { logEvent } from "firebase/analytics";
import { analytics } from "../firebase";

const navigateAndLog = (target, label, eventParams = {}) => {
    // Enhanced logging with more context
    const enhancedParams = {
        target_url: target,
        timestamp: Date.now(),
        page_location: window.location.href,
        ...eventParams
    };

    // Log to console for debugging
    console.log(`${label} clicked!`, enhancedParams);
    
    // Log to Firebase Analytics
    logEvent(analytics, 'user_interaction', {
        interaction_type: 'click',
        element_name: label,
        ...enhancedParams
    });

    // Navigate
    window.location.href = target;
};

export default navigateAndLog;
