import React from "react";


export interface MenuItemChild {
    name: string;
    route: string;
    children?: MenuItemChild[];
}

export interface MenuItem<T> {
    route: string;
    name: string;
    icon: React.ReactNode;
    id: number;
    children?: T;
}