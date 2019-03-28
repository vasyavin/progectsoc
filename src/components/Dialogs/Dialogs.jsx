import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



const  DialogsItem = (props) => {
    let path = '/Dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={s.massage}>{props.massage}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.DialogsItem}>
                <DialogsItem name='Vasya' id='1'/>
                <DialogsItem name='Sasha' id='2'/>
                <DialogsItem name='Pavlo' id='3'/>
                <DialogsItem name='Vova' id='4'/>
            </div>
            <div className={s.massages}>
                < Message massage ='Hi'/>
                < Message massage ='How are you?'/>
                < Message massage ='Good'/>
                < Message massage ='Good luck'/>
            </div>
        </div>
    )
}

export default Dialogs;
