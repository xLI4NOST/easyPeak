import React from 'react';

interface BlogCardArrowProps {
    className?: string;
    fill?: string
}

export const BlogCardArrow = ({className, fill}: BlogCardArrowProps): React.ReactElement => {
    return <svg xmlns="http://www.w3.org/2000/svg"
                className={className}
                width="20"
                height="20"
    >
        <g stroke={fill ? `${'#' + fill}` : '#1473E6'}
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="1.3"
           clipPath="url(#a)">
            <path d="M4.2 10h11.6M12.5 13.3l3.3-3.3M12.5 6.7l3.3 3.3"/>
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h20v20H0z"/>
            </clipPath>
        </defs>
    </svg>


};
