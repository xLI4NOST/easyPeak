'use server'

import React from 'react';
import {BlogCard} from "@/app/features/Blog/ui/BlogCard/BlogCard";
import styles from "./Blog.module.sass"
import {format} from "date-fns";
import {BlogCardProps, BlogPostsProps} from "@/app/features/Blog/ui/BlogCard/BlogCard.props";
import {getPosts} from "@/app/shared/api/posts";
import Link from "next/link";


const BlogPage = async (Component) => {
    const posts: BlogPostsProps = await getPosts()
    const imageUrl = 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/da0/b0d/2cc/da0b0d2ccd24fe7ab50820c2803d3f9d.jpg'

    return (
        <div className={styles.cardWrapper}>
            {posts.map((item) => (
                <BlogCard
                    key={item.id}
                    docsHref={item.docsHref}
                    docsHrefText={item.docsHrefText}
                    tag={item.postId}
                    date={item.date}
                    image={imageUrl}
                    href={item.href}
                    title={item.name}
                    description={item.body}
                    readTime={item.readTime}
                    searchParam={item.id}
                />

            ))}
        </div>
    );
};

export default BlogPage;