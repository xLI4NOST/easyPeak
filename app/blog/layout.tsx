import {BlogHeader} from "@/app/components/BlogHeader/BlogHeader";
import styles from "./Blog.module.sass"
import "./reset.css"

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body>
        <div className={styles.blogLayout}>
            <BlogHeader/>
            {children}
        </div>
        </body>
        </html>
    );
}
