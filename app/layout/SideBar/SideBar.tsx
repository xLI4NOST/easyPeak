import React from "react";
import {SideBarProps} from "@/app/layout/SideBar/SideBar.props";
import {getMenu} from "@/api/Menu";
import Menu from "@/app/components/menu/Menu";
import {Logo} from "@/app/layout/icons/Logo";


export const SideBar = async ({className}: SideBarProps) => {


    return <div className={className}>
        <Logo/>
        <div>Поиск</div>
        <Menu/>
    </div>
}

export default SideBar
