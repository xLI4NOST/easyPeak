import styles from "./page.module.css";
import {Htag} from "@/app/components/Htag/Htag";
import {Button} from "@/app/components/Button/Button";
import {P} from "@/app/components/P/P";
import {Tag} from "@/app/components/Tag/Tag";

export default function Home() {
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

            </main>
            <footer className={styles.footer}>

            </footer>
        </div>
    );
}
