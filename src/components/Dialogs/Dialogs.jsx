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
  let dialogsData = [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" },
    { id: 4, name: "User4" },
    { id: 5, name: "User5" },
    { id: 6, name: "User6" },
  ];
  let messagesData = [
    { id: 1, message: "Message1" },
    { id: 2, message: "Message2" },
    { id: 3, message: "Message3" },
    { id: 4, message: "Message4" },
    { id: 5, message: "Message5" },
    { id: 6, message: "Message6" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
