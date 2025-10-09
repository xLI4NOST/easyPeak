import styles from './Advantages.module.sass'
import {Mark} from "@/app/components/Advantages/icons/Mark";
import {Htag} from "@/app/components/Htag/Htag";
import {P} from "@/app/components/P/P";


function Advantages() {

    return <div className={styles.advantages}>
        <Htag tag={'h2'}>Преимущества</Htag>

        <div className={styles.adventere}>
            <div className={styles.advenete_mark}>
                <Mark/>
                <span className={styles.adventere_separator}></span>
            </div>
            <div className={styles.adventere_description}>
                <Htag tag={'h3'}>Мобильность специалиста</Htag>
                <P>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться
                    дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять
                    специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его
                    в разных местах.</P>
            </div>
        </div>
        <div className={styles.adventere}>
            <div className={styles.advenete_mark}>
                <Mark/>
                <span className={styles.adventere_separator}></span>
            </div>
            <div className={styles.adventere_description}>
                <Htag tag={'h3'}>Индивидуальный график работы</Htag>
                <P>Если освоить программы и найти заказы по графическому дизайну, вскоре окажется, что вставать в 6:00
                    вовсе не обязательно. Когда у человека вечером продуктивность выше, надо этим пользоваться.</P>
            </div>
        </div>
        <div className={styles.adventere}>
            <div className={styles.advenete_mark}>
                <Mark/>
                <span className={styles.adventere_separator}></span>
            </div>
            <div className={styles.adventere_description}>
                <Htag tag={'h3'}>Контроль дохода</Htag>
                <P>Прохождения собеседований в крупные компании могут принести свои плоды. В случае с профессией
                    графического дизайна вполне возможна работа на рынке фриланса. Специалист сам выбирает регион, с кем
                    работать и сколько работать. В связи с этим получится точно контролировать доход в большую или
                    меньшую сторону.</P>
            </div>
        </div>
        <div className={styles.adventere}>
            <div className={styles.advenete_mark}>
                <Mark/>
                <span className={styles.adventere_separator}></span>
            </div>
            <div className={styles.adventere_description}>
                <Htag tag={'h3'}>Выбор работы</Htag>
                <P>Пользователи сети, которые знают Photoshop, не обязательно должны выполнять одну работу. Профессия
                    графического дизайнера дает возможность отойти от обычных проектов и повысить скил в других
                    компьютерных программах.</P>
            </div>
        </div>
        <P>При завершении очередного проекта над графикой, специалист всегда задает себе вопрос о дальнейших
            перспективах. Отличие профессиональных дизайнеров заключается в том, что они гибкие. Сегодня разрабатывается
            логотип новой компании, а завтра вполне можно переключиться на иллюстрацию культовой книги.</P>


    </div>
}

export default Advantages
