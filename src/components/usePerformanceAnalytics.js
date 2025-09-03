import { useEffect } from 'react';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';

const usePerformanceAnalytics = () => {
    useEffect(() => {
        // Track page load performance
        window.addEventListener('load', () => {
            const navTiming = performance.getEntriesByType('navigation')[0];
            if (navTiming) {
                logEvent(analytics, 'page_performance', {
                    page_load_time: Math.round(navTiming.loadEventEnd - navTiming.fetchStart),
                    dom_content_loaded: Math.round(navTiming.domContentLoadedEventEnd - navTiming.fetchStart),
                    first_paint: Math.round(navTiming.responseStart - navTiming.fetchStart)
                });
            }
        });

        // Track time on page
        const startTime = Date.now();
        
        const trackEngagementTime = () => {
            const engagementTime = Date.now() - startTime;
            if (engagementTime > 10000) { // Only track if user stayed > 10 seconds
                logEvent(analytics, 'user_engagement', {
                    engagement_time_msec: engagementTime,
                    engaged_session: true
                });
            }
        };

        // Track when user leaves
        window.addEventListener('beforeunload', trackEngagementTime);

        return () => {
            window.removeEventListener('beforeunload', trackEngagementTime);
        };
    }, []);
};

export default usePerformanceAnalytics;