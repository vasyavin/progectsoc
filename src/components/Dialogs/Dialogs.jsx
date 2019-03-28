import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
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
    let DialogData = [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Pavlo'},
        {id: 4, name: 'Vova'}
    ]

    let MassageData = [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'How are you?'},
        {id: 3, massage: 'Good'},
        {id: 4, massage: 'Good luck'}
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.DialogsItem}>
                <DialogsItem name={DialogData[0].name} id={DialogData[0].id}/>
                <DialogsItem name={DialogData[1].name} id={DialogData[1].id}/>
                <DialogsItem name={DialogData[2].name} id={DialogData[2].id}/>
                <DialogsItem name={DialogData[3].name} id={DialogData[3].id}/>
            </div>
            <div className={s.massages}>
                <Message massage={MassageData[0].massage} id={MassageData[0].id}/>
                <Message massage={MassageData[1].massage} id={MassageData[1].id}/>
                <Message massage={MassageData[2].massage} id={MassageData[2].id}/>
                <Message massage={MassageData[3].massage} id={MassageData[3].id}/>
            </div>
        </div>
    )
}

export default Dialogs;
