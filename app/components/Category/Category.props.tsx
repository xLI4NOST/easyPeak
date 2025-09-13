import {ListProps} from "@/app/components/List/list.props";
import React from "react";

export interface CategoryProps<T> {
    name: string;
    children: React.ReactNode;
    data?: [T];
}