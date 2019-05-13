import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import Logo from "./Logo/Logo"





const Dialogs = (props) => {

    let DialogsElements = props.state.dialogs
        .map( d => <DialogsItem name={d.name} id={d.id} /> );

    let massagesElements = props.state.Massages
        .map( m => <Message massage={m.massage} id={m.id}/>)
    let LogoDialogs = props.state.imageProfile
        .map( n => <Logo img={n.img}/>)

    let newDialogElement = React.createRef();

    let addDialog = () => {
        let text = newDialogElement.current.value;
        alert(text);
    }


    return (
        <div className={s.dialogs}>
           {/* <div className={s.massages}>
                {LogoDialogs}
            </div>*/}
            <div className={s.DialogsItem}>
                { DialogsElements }
            </div>
            <div className={s.massages}>
                { massagesElements }
            </div>
            <div> <textarea  ref={newDialogElement}></textarea></div>
            <div><button onClick={addDialog}>New Dialog</button></div>
        </div>
    )
}

export default Dialogs;
