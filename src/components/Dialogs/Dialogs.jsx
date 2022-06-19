import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink
        to={path}
        className={(navData) => (navData.isActive ? s.active : s.dialog)}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialogs}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogsItem name="User1" id="1" />
        <DialogsItem name="User2" id="2" />
        <DialogsItem name="User3" id="3" />
        <DialogsItem name="User4" id="4" />
        <DialogsItem name="User5" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Message 1" />
        <Message message="Message 2" />
        <Message message="Message 3" />
        <Message message="Message 4" />
      </div>
    </div>
  );
};

export default Dialogs;

//className={(navData) => (navData.isActive ? s.active : s.dialog)}>
