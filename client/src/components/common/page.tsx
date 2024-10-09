import React, { useEffect } from 'react';
import Navbar01 from './navbar01';
import Navbar02 from './navbar02';
import Footer from './footer';

interface PageProps {
    children: React.ReactNode | React.ReactNode[];
    title: string;
}

export default function Page({ children, title }: PageProps) {
    useEffect(() => {
        document.title = `Caramelizada - ${title}`;
    }, [title]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar01 />
            <Navbar02 />
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </div>
    );
}
