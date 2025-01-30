import type { Metadata } from 'next';
import './globals.css';

import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

const ibmPlexSans = localFont({
    src: [
        {
            path: '../public/fonts/IBMPlexSans-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/IBMPlexSans-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/IBMPlexSans-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        { path: '../public/fonts/IBMPlexSans-Bold.ttf', weight: '700', style: 'normal' },
    ],
});

const bebasNeue = localFont({
    variable: '--bebas-neue',
    src: [
        { path: '../public/fonts/BebasNeue-Regular.ttf', weight: '400', style: 'normal' },
    ],
});

export const metadata: Metadata = {
    title: 'BookWise',
    description: 'BookWise is a book borrowing university library managment solution.',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body
                className={cn('antialiased', ibmPlexSans.className, bebasNeue.variable)}
            >
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
