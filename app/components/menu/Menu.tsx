import React from 'react';
import {getMenu} from "@/api/Menu";

export const Menu = async () => {
    const menu = await getMenu(1)

    return <div>
        {menu.length}
    </div>
};

export default Menu;