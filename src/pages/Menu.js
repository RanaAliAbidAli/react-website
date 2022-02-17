import { menuItemClasses } from '@mui/material';
import React from 'react';
import { Data } from '../components/data/data';
import  MenuItem  from '../components/MenuItem';
import '../Styles/Menu.css';

function Menu() {
    return (
        <div className="menu">
            <div className="menuTitle">
                <div className="menuList">
                    {Data.map((menuItem, key) => {
                        return (<MenuItem
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            price={menuItem.price} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Menu