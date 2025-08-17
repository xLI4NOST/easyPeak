'use client'

import styles from "../page.module.css";
import {Htag} from "@/app/components/Htag/Htag";
import {Button} from "@/app/components/Button/Button";
import {P} from "@/app/components/P/P";
import {Tag} from "@/app/components/Tag/Tag";
import {Rating} from "@/app/components/Rating/Rating";
import {useState} from "react";
import {BlogCard} from "@/app/components/BlogCard/BlogCard";

export default function Home() {
	const [rating, setRating] = useState<number>(4);

	return (
		<div className={styles.page}>
			<main className={styles.main}>

				<Htag tag='h1'>Текст</Htag>
				<Button appearance={'primary'} arrow='right'>Кнокпка</Button>
				<Button appearance={'ghost'} arrow='right'>Кнокпка</Button>

				<P size={'l'}>большой</P>
				<P>дефолт</P>
				<P size={'s'}>мелкий</P>

				<Tag size={'s'} color={'red'}>Маленький</Tag>
				<Tag size={'m'} color={'ghost'}>Средний</Tag>
				<Tag size={'m'} color={'primary'} href={'http://s'}>Primary</Tag>

				<Rating rating={rating} isEditable={true} setRating={setRating}/>

				<BlogCard
					image={'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/2147496605/images/adSKFRGlQnauNI2eNk5y_blog-CSSGrid.jpg'}
					href={'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout'}
					tag={'Front-end'}
					date={'1 месяц назад'}
					docsHref={'https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout'}
					docsHrefText={'Грид-раскладка (CSS Grid Layout)'}
					title={'Как работать с CSS Grid'}
					description={'представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..'}
					readTime={'3 минуты'}
				/>

			</main>
			<footer className={styles.footer}>

			</footer>
		</div>
	);
}
