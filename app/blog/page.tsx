import React from 'react';
import {BlogCard} from "@/app/components/BlogCard/BlogCard";
import styles from "./Blog.module.sass"
import {format} from "date-fns";

const Page = () => {
	return (
		<div className={styles.cardWrapper}>
			<BlogCard
				docsHref={'https://github.com/xLI4NOST/easyPeak/pulls'}
				docsHrefText={'Два года назад команда Next.js'}
				tag={'frontend'}
				date={format(new Date(), "dd MMM yyyy")}
				image={'https://habrastorage.org/r/w1560/getpro/habr/upload_files/da0/b0d/2cc/da0b0d2ccd24fe7ab50820c2803d3f9d.jpg'}
				href={'https://habr.com/ru/articles/788898/'}
				title={'Next.js App Router. Опыт использования. Путь в будущее или поворот не туда'}
				description={' представила новый подход к роутингу, ' +
					'который должен был стать заменой так называемому Pages Router, вместе с тем добавив ряд принципиально нового функционала.'}
				readTime={'3 минуты'}/>
			<BlogCard
				docsHref={'https://github.com/xLI4NOST/easyPeak/pulls'}
				docsHrefText={'Два года назад команда Next.js'}
				tag={'frontend'}
				date={format(new Date(), "dd MMM yyyy")}
				image={'https://habrastorage.org/r/w1560/getpro/habr/upload_files/da0/b0d/2cc/da0b0d2ccd24fe7ab50820c2803d3f9d.jpg'}
				href={'https://habr.com/ru/articles/788898/'}
				title={'Next.js App Router. Опыт использования. Путь в будущее или поворот не туда'}
				description={' представила новый подход к роутингу, ' +
					'который должен был стать заменой так называемому Pages Router, вместе с тем добавив ряд принципиально нового функционала.'}
				readTime={'3 минуты'}/>
			<BlogCard
				docsHref={'https://github.com/xLI4NOST/easyPeak/pulls'}
				docsHrefText={'Два года назад команда Next.js'}
				tag={'frontend'}
				date={format(new Date(), "dd MMM yyyy")}
				image={'https://habrastorage.org/r/w1560/getpro/habr/upload_files/da0/b0d/2cc/da0b0d2ccd24fe7ab50820c2803d3f9d.jpg'}
				href={'https://habr.com/ru/articles/788898/'}
				title={'Next.js App Router. Опыт использования. Путь в будущее или поворот не туда'}
				description={' представила новый подход к роутингу, ' +
					'который должен был стать заменой так называемому Pages Router, вместе с тем добавив ряд принципиально нового функционала.'}
				readTime={'3 минуты'}/>
			<BlogCard
				docsHref={'https://github.com/xLI4NOST/easyPeak/pulls'}
				docsHrefText={'Два года назад команда Next.js'}
				tag={'frontend'}
				date={format(new Date(), "dd MMM yyyy")}
				image={'https://habrastorage.org/r/w1560/getpro/habr/upload_files/da0/b0d/2cc/da0b0d2ccd24fe7ab50820c2803d3f9d.jpg'}
				href={'https://habr.com/ru/articles/788898/'}
				title={'Next.js App Router. Опыт использования. Путь в будущее или поворот не туда'}
				description={' представила новый подход к роутингу, ' +
					'который должен был стать заменой так называемому Pages Router, вместе с тем добавив ряд принципиально нового функционала.'}
				readTime={'3 минуты'}/>
		</div>
	);
};

export default Page;