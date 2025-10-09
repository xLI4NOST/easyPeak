import {PProps} from "@/app/shared/ui/P/P.props";
import styles from "./P.module.sass"
import cn from "classnames";
import React from "react";

export const P = ({size, children, className, ...props}: PProps): React.ReactElement => {
    return (
        <p className={cn(className, {
            [styles.large]: size === 'l',
            [styles.small]: size === 's',
            [styles.default]: !size,
        })}>
            {children}
        </p>
    )
}

