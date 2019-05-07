import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";





const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Pavlo'},
        {id: 4, name: 'Vova'}
    ]

    let Massages = [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'How are you?'},
        {id: 3, massage: 'Good'},
        {id: 4, massage: 'Good luck'}
    ]

    let DialogsElements = dialogs
        .map( d => <DialogsItem name={d.name} id={d.id} /> );

    let massagesElements = Massages
        .map( m => <Message massage={m.massage} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.DialogsItem}>
                { DialogsElements }
            </div>
            <div className={s.massages}>
                { massagesElements }
            </div>
        </div>
    )
}

export default Dialogs;
