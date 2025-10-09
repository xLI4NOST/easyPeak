import {BlogPostsProps} from "@/app/features/Blog/ui/BlogCard/BlogCard.props";
import {getPost} from "@/app/shared/api/posts";
import styles from "./BlogPost.module.sass"
import React from "react";
import {P} from "@/app/shared/ui/P/P";
import {Htag} from "@/app/shared/ui/Htag/Htag";

export default async function BlogPost({params}): Promise<React.ReactElement> {
    const {type} = await params
    const post: BlogPostsProps = await getPost(1)
    const imageUrl = 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/da0/b0d/2cc/da0b0d2ccd24fe7ab50820c2803d3f9d.jpg'

    return <div className={styles.blogPost}>
        <Htag tag={'h1'}>{post.title}</Htag>
        <P>Front-end · 1 месяц назад · 3 минуты ·</P>

        <img className={styles.blogPost_image} src={imageUrl} alt={'mainImage'}/>

        <P className={styles.blogPost_description}>{post.body}</P>
        <div className={styles.blogPost_central_block}>
            <Htag tag={"h1"}>Что такое грид?</Htag>
            <P className={styles.blogPostDescription}>Грид представляет собой пересекающийся набор горизонтальных и
                вертикальных линий, образующих колонки и строки. Элементы могут быть помещены в грид в пределах линий
                этих колонок и строк. Грид имеет следующие особенности:
            </P>
        </div>
    </div>
}