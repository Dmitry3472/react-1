import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <img
        src="https://www.komar.de/ru/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/S/H/SHX8-087_1568286487.jpg"
        alt="toplogo"
      />
      <div className={s.descritpionBlock}>ava+discription</div>
    </div>
  );
};

export default ProfileInfo;
