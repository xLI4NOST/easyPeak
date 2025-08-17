import type {Metadata} from "next";
import {Noto_Sans, Open_Sans} from "next/font/google";
import "../globals.css";

const notoSans = Noto_Sans({
	variable: "--font-noto-sans",
	subsets: ["latin"]
})

const openSans = Open_Sans({
	variable: "--open-sans",
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
		<body className={`${notoSans.variable} ${openSans.variable}`}>
		{children}
		</body>
		</html>
	);
}
