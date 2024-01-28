import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100, className }) => {
    const [typedText, setTypedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setTypedText(typedText + text.charAt(index));
                setIndex(index + 1);
            }, speed);

            return () => clearTimeout(timeoutId); // Cleanup on component unmount or before the next effect runs
        }
    }, [typedText, index, text, speed]); // Re-run effect when these variables change

    return <div className={className}>{typedText}</div>;
};

export default TypingEffect;
