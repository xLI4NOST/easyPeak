import {BlogHeader} from "@/app/components/BlogHeader/BlogHeader";

export default function RootLayout({children,}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
		<body>
		<BlogHeader/>
		{children}
		</body>
		</html>
	);
}
