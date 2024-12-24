"use client";

import "./globals.scss";
import { ScrollContainer, ScrollTrigger } from "@/libs/ScrollTrigger";
import Link from "next/link";
import { Header, menuItems } from "./Header";

import '@splidejs/react-splide/css';
import { Footer } from "./Footer";
import { Head } from "next/document";
import { Metadata } from "next";
import { useState } from "react";
import Script from "next/script";

const gaId = 'G-LWY1EF8E1D'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" >
            <head>
                <title>{"つながるラボ"}</title>
                <meta name="description" content={"つながるラボ"} />

                {/* <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                    strategy='afterInteractive'
                    async
                />
                <Script id='google-analytics' strategy='afterInteractive'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gaId}');
                    `}
                </Script> */}
            </head>

            <body>
                <ScrollContainer className="flex min-h-screen flex-col h-svh relative">
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </ScrollContainer>


            </body>
        </html>
    );
}
