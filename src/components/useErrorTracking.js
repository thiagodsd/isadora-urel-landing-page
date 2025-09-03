import { useEffect } from 'react';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';

const useErrorTracking = () => {
    useEffect(() => {
        // Track JavaScript errors
        const handleError = (event) => {
            logEvent(analytics, 'exception', {
                description: event.error?.message || 'Unknown error',
                fatal: false,
                error_stack: event.error?.stack,
                page_location: window.location.href
            });
        };

        // Track unhandled promise rejections
        const handleUnhandledRejection = (event) => {
            logEvent(analytics, 'exception', {
                description: `Unhandled Promise Rejection: ${event.reason}`,
                fatal: false,
                page_location: window.location.href
            });
        };

        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', handleUnhandledRejection);

        return () => {
            window.removeEventListener('error', handleError);
            window.removeEventListener('unhandledrejection', handleUnhandledRejection);
        };
    }, []);
};

export default useErrorTracking;