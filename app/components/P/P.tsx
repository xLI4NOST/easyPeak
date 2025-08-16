import {PProps} from "@/app/components/P/P.props";
import s from "./P.module.sass"
import cn from "classnames";
import React from "react";

export const P = ({size, children, className, ...props}: PProps): React.ReactElement => {
    return (
        <p className={cn(className, {
            [s.large]: size === 'l',
            [s.small]: size === 's',
            [s.default]: !size,
        })}>
            {children}
        </p>
    )
}

