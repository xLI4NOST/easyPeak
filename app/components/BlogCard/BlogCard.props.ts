import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface BlogCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    image?: string;
    tag?: string;
    date?: string;
    href: string;
    docsHref?: string;
    docsHrefText?: string
    title: string;
    description: string;
    readTime: string;
}

export interface BlogPostsProps {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,

}