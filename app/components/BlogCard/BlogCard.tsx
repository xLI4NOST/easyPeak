import s from './BlogCard.module.sass'
import {BlogCardProps} from "@/app/components/BlogCard/BlogCard.props";
import {JSX} from "react";

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
                         }: BlogCardProps): JSX.Element => {
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff">
                        <g stroke="#1473E6"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="1.3"
                           clipPath="url(#a)"><path
                            d="M4.2 10h11.6M12.5 13.3l3.3-3.3M12.5 6.7l3.3 3.3"/></g>
                        <defs><clipPath id="a">
                            <path d="M0 0h20v20H0z"/>
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </span>
        </div>
    )
}

