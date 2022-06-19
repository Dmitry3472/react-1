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
  let dialogs = [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" },
    { id: 4, name: "User4" },
    { id: 5, name: "User5" },
    { id: 6, name: "User6" },
  ];

  let messages = [
    { id: 1, message: "Message1" },
    { id: 2, message: "Message2" },
    { id: 3, message: "Message3" },
    { id: 4, message: "Message4" },
    { id: 5, message: "Message5" },
    { id: 6, message: "Message6" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
