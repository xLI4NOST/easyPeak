import type {Metadata} from "next";
import {Noto_Sans} from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
    variable: "--font-noto-sans",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "EasyPeak",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={notoSans.variable}>
        {children}
        </body>
        </html>
    );
}
