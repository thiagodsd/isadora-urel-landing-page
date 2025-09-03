import { useEffect } from 'react';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';

const useScrollAnalytics = () => {
    useEffect(() => {
        const sectionIds = ['hero', 'services', 'about', 'contact'];
        const viewedSections = new Set();
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    const sectionId = entry.target.id;
                    if (!viewedSections.has(sectionId)) {
                        viewedSections.add(sectionId);
                        logEvent(analytics, 'section_view', {
                            section_name: sectionId,
                            engagement_time: Date.now()
                        });
                        console.log(`Section viewed: ${sectionId}`);
                    }
                }
            });
        }, { threshold: 0.5 });

        // Observe all sections
        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);
};

export default useScrollAnalytics;