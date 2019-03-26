import React from 'react';
import s from './Navbar.module.css';
import Dialogs from "../Dialogs/Dialogs";



let c1 = "item";
let c2 = "active";
// "item active"
let classes = c1 + " " + c2;
let classesNew = `${s.item} ${c2}`;


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a href='Profile'>Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a href='Dialogs'>Messages</a>
        </div>
        <div className={s.item}>
            <a href='News'>News</a>
        </div>
        <div className={s.item}>
            <a href='Music'>Music</a>
        </div>
        <div className={s.item}>
            <a href='Settings'>Settings</a>
        </div>
    </nav>
}

export default Navbar;