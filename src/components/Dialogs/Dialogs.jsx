import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/Dialogs/1">Vasya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Dialogs/2">Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Dialogs/3">Pavlo</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Dialogs/2">Vova</NavLink>
                </div>
            </div>
            <div className={s.massages}>
                <div className={s.massage}>Hi</div>
                <div className={s.massage}>How are you?</div>
                <div className={s.massage}>Good</div>
                <div className={s.massage}>Good luck</div>
            </div>
        </div>
    )
}

export default Dialogs;
