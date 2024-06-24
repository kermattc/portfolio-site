import { useState, useEffect } from 'react';

function getWindowDimensions(): { windowWidth: number; windowHeight: number } {
    if (typeof window === 'undefined') {
        const windowWidth = 0;
        const windowHeight = 0;
        return { windowWidth, windowHeight };
    }

    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

    return {
        windowWidth,
        windowHeight,
    };
}

function UseWindowDimensions(): { windowWidth: number; windowHeight: number } {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);

        return (): void => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default UseWindowDimensions;
