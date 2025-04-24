import ClientComponent from '@/components/ClientComponent';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Video Conference App',
    description:
        'A video conference app built with Next.js and Stream Video SDK'
};

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <ClerkProvider
                appearance={{
                    layout: {
                        socialButtonsVariant: 'iconButton',
                        logoImageUrl: '/icons/yoom-logo.svg'
                    },
                    variables: {
                        colorText: '#fff',
                        colorPrimary: '#0E78F9',
                        colorBackground: '#1C1F2E',
                        colorInputBackground: '#252A41',
                        colorInputText: '#fff'
                    }
                }}
            >
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark`}
                >
                    <Toaster
                        toastOptions={{
                            className: 'bg-gray-600 text-white',
                            duration: 3000,
                            style: {
                                backgroundColor: '#1c1f2e',
                                color: '#fff'
                            }
                        }}
                        closeButton={false}
                    />
                    <ClientComponent /> {/* Render client-side component */}
                    {children}
                </body>
            </ClerkProvider>
        </html>
    );
}
