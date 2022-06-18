import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialog}>User1</div>
          <div className={s.dialog}>User2</div>
          <div className={s.dialog}>User3</div>
          <div className={s.dialog}>User4</div>
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
