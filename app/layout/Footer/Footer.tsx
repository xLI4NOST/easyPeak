import React from "react";
import styles from "./Footer.module.sass"
import {P} from "@/app/components/P/P";
import {FooterProps} from "@/app/layout/Footer/Footer.props";
import cn from "classnames";
import {format} from "date-fns";

function Footer({className}: FooterProps): React.ReactElement {

	return <footer className={cn(styles.footer, className)}>
		<P>{`OwlTop © 2020 - ${format(new Date(), 'yyy')} Все права защищены`}</P>
		<P>Пользовательское соглашение</P>
		<P>Политика конфиденциальности</P>
	</footer>
}

export default Footer
