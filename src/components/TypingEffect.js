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

            return () => clearTimeout(timeoutId);
        }
    }, [typedText, index, text, speed]);

    return <div className={className}>{typedText}</div>;
};

export default TypingEffect;
