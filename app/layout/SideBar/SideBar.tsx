import React from "react";
import {SideBarProps} from "@/app/layout/SideBar/SideBar.props";
import {getMenu} from "@/api/Menu";
import Menu from "@/app/components/menu/Menu";


export const SideBar = async ({className}: SideBarProps) => {


    return <div className={className}>

        <Menu/>
    </div>
}

export default SideBar
