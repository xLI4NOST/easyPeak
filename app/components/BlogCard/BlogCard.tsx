import s from './BlogCard.module.sass'
import {BlogCardProps} from "@/app/components/BlogCard/BlogCard.props";
import React from "react";
import {BlogCardArrow} from "@/app/components/BlogCard/BlogCardArrow";

export const BlogCard = ({
                             title,
                             description,
                             href,
                             docsHref,
                             docsHrefText,
                             className,
                             tag,
                             image,
                             date,
                             readTime
                         }: BlogCardProps): React.ReactElement => {
    return (
        <div className={s.card}>
            <a href={href} className={s.imageBlock}>
                <img className={s.image} src={image} alt={title}/>
            </a>


            <div className={s.mainInf}>
                <div className={s.atributes}>
                    <p className={s.date}>{tag}</p>
                    ·
                    <p>{date}</p>
                </div>

                <h2>{title}</h2>

                <p><a href={docsHref}>{docsHrefText}</a>{description}</p>
            </div>
            <span className={s.href}>
                <p>{readTime}</p>

                <a href={href}>
                    Читать
                    <BlogCardArrow/>
                </a>
            </span>
        </div>
    )
}

