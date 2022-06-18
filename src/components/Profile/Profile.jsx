import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.komar.de/ru/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/S/H/SHX8-087_1568286487.jpg"
          alt="toplogo"
        />
      </div>
      <div>ava+discription</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
