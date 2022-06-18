import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://img.kupigolos.ru/hero/5cdafe4c30ac5.png?p=bh&s=13a8cd7af352f92aa8770693dc868667"></img>
      {props.message}
      <div>
        <span>like ❤ </span> {props.likeCounts}
      </div>
    </div>
  );
};

export default Post;
