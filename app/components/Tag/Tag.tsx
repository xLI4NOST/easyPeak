import {TagProps} from "@/app/components/Tag/Tag.props";
import styles from "./Tag.module.sass"
import cn from "classnames";
import React from "react";

export const Tag = ({size, children, color, href, className, ...props}: TagProps): React.ReactElement => {
	return (
		<div className={cn(styles.tag, className, {
			[styles.medium]: size === 'm',
			[styles.small]: size === 's',
			[styles.ghost]: color === 'ghost',
			[styles.red]: color === 'red',
			[styles.grey]: color === 'gray',
			[styles.primary]: color === 'primary',
			[styles.green]: color === 'green',

		})}
		     {...props}
		>{
			href ?
				<a href={href}>{children}</a>
				:
				<>{children}</>
		}

		</div>
	)
}

