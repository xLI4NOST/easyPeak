import {BlogHeader} from "@/app/widgetes/BlogHeader/BlogHeader";
import styles from "./Blog.module.sass"
import "./reset.css"

export default function BlogLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.blogLayout}>
            <BlogHeader/>
            {children}
        </div>

    );
}
