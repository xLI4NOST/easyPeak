import type {Metadata} from "next";
import {Noto_Sans, Open_Sans} from "next/font/google";
import "../globals.css";
import styles from "@/app/(mainPage)/mainPage.module.sass";
import Header from "@/app/layout/Header/Header";
import SideBar from "@/app/layout/SideBar/SideBar";
import Footer from "@/app/layout/Footer/Footer";
import React from "react";

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
		<div className={styles.wrapper}>
			<Header className={styles.header}/>
			<SideBar className={styles.sideBar}/>
			<div className={styles.body}>
				{children}
			</div>
			<Footer className={styles.footer}/>
		</div>
		</body>
		</html>
	);
}
