import styles from './Vacancies.module.sass'
import {P} from "@/app/components/P/P";
import {Htag} from "@/app/components/Htag/Htag";
import {Rating} from "@/app/components/Rating/Rating";


function Vacancies() {
    return <div className={styles.vacancies}>
        <div className={styles.vacancies_card}>
            <P>Всего вакансий</P>
            <Htag tag={'h2'}>1 210</Htag>
        </div>
        <div className={styles.vacancies_block}>
            <div className={styles.vacancies_card}>
                <P>Начальный</P>
                <Htag tag={'h2'}>110 000 ₽</Htag>
                <Rating rating={1}/>
            </div>
            <span className={styles.vacancies_card_separator}></span>
            <div className={styles.vacancies_card}>
                <P>Средний</P>
                <Htag tag={'h2'}>190 000 ₽</Htag>
                <Rating rating={2}/>
            </div>
            <span className={styles.vacancies_card_separator}></span>
            <div className={styles.vacancies_card}>
                <P>Профессионал</P>
                <Htag tag={'h2'}>260 000 ₽</Htag>
                <Rating rating={2}/>
            </div>
        </div>


    </div>
}

export default Vacancies
