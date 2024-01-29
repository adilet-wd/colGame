'use client'
import * as React from 'react';
import { useEffect, useState } from 'react';
import HeaderDesktop from './headerDesktop';
import HeaderMobile from './headerMobile';

export interface Props {
}

export default function Header() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (windowWidth > 768) {
        return <HeaderDesktop />;
    } else if (windowWidth > 0) {
        return <HeaderMobile />;
    }
}

// Helper functions
function getExclamationMarks(numChars: number) {
  
}