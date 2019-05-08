import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";





const Dialogs = (props) => {

    let DialogsElements = props.dialogs
        .map( d => <DialogsItem name={d.name} id={d.id} /> );

    let massagesElements = props.Massages
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
