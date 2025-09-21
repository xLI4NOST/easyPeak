import styles from './ProfessionCard.module.sass'
import {Htag} from "@/app/components/Htag/Htag";
import {Tag} from "@/app/components/Tag/Tag";
import {P} from "@/app/components/P/P";
import {Cup} from "@/app/components/ProfessionCard/icons/Cup";
import {Rating} from "@/app/components/Rating/Rating";
import {ProfessionCardProps} from "@/app/components/ProfessionCard/ProfessionCard.props";
import React from "react";


function ProfessionCard({profession}: { profession: string }): React.ReactElement {
    const url = 'https://static.tildacdn.com/tild6663-3461-4439-b432-656365316262/Facebook_post_-_2.png'

    return <div className={styles.professionCard}>
        <div className={styles.professionCard_head}>
            <img src={url} alt={'head'}/>
            <div className={styles.professionCard_head_name}>
                <Htag tag={'h2'}>{profession}</Htag>
                <Cup/>
                <div className={styles.professionCard_head_name_tags}>
                    <Tag size={'m'} color={'ghost'}><P>Photoshop</P></Tag>
                    <Tag size={'m'} color={'ghost'}><P>Дизайн</P></Tag>
                </div>
            </div>
            <div className={styles.professionCard_price}>
                <div className={styles.professionCard_price_card}>
                    <Htag tag={'h2'}>24 000 ₽</Htag>
                    <Tag size={'s'} color={"green"}>-10 000 ₽ </Tag>
                    <P size={'s'}>цена</P>
                </div>
                <div className={styles.professionCard_price_card}>
                    <Htag tag={'h2'}>24 000 ₽</Htag>
                    <P size={'s'}>цена</P>
                </div>
                <div className={styles.professionCard_price_card}>
                    <Rating rating={4}/>
                    <P size={'s'}>20 отзывов</P>
                </div>
            </div>
        </div>


    </div>
}

export default ProfessionCard
