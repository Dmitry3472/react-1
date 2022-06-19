import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialog}>
            <NavLink to="/dialogs/1"> User1 </NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/2"> User2 </NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/3"> User3 </NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/4"> User4 </NavLink>
          </div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Message 1 Text</div>
          <div className={s.message}>Message 2 Text</div>
          <div className={s.message}>Message 3 Text</div>
          <div className={s.message}>Message 4 Text</div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
