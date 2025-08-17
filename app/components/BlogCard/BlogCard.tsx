import styles from './BlogCard.module.sass'
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
		<div className={styles.card}>
			<a href={href} className={styles.imageBlock}>
				<img className={styles.image} src={image} alt={title}/>
			</a>


			<div className={styles.mainInf}>
				<div className={styles.atributes}>
					<p className={styles.date}>{tag}</p>
					·
					<p>{date}</p>
				</div>

				<h2>{title}</h2>

				<p><a href={docsHref}>{docsHrefText}</a>{description}</p>

			</div>
			<span className={styles.href}>
                <p>{readTime}</p>

                <a href={href}>
                    Читать
                    <BlogCardArrow/>
                </a>
            </span>
		</div>
	)
}

