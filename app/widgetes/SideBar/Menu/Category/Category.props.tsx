import {ListProps} from "@/app/widgetes/SideBar/Menu/Category/ListTree/List/list.props";
import React from "react";

export interface CategoryProps<T> {
    name: string;
    children: React.ReactNode;
    data?: [T];
}