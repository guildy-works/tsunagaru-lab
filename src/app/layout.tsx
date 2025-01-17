"use client";

import "./globals.scss";
import Link from "next/link";
import { Header, menuItems } from "./Header";

import '@splidejs/react-splide/css';
import { Footer } from "./Footer";
import { Head } from "next/document";
import { Metadata } from "next";
import { useState } from "react";
import Script from "next/script";

const gaId = 'G-LNW2KVTFE1'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" >
            <head>
                <title>{"つながるラボ"}</title>
                <meta name="description" content={"中四国地方特化のオンラインコミュニティ"} />

                <Script
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
                </Script>
            </head>

            <body className="flex flex-col relative w-svw overflow-x-hidden">
                <Header />
                <main className="w-full overflow-x-hidden">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
