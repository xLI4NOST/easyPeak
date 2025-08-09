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