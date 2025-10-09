import React from "react";
import {SideBarProps} from "@/app/widgetes/SideBar/SideBar.props";
import {getMenu} from "@/app/shared/api/Menu";
import Menu from "@/app/widgetes/SideBar/Menu/Menu";
import {Logo} from "@/app/shared/icons/Logo";


export const SideBar = async ({className}: SideBarProps) => {
    return <div className={className}>
        <Logo/>
        <div>Поиск</div>
        <Menu/>
    </div>
}

export default SideBar
