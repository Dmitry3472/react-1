import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"
        alt="LOGO"
      />
    </header>
  );
};

export default Header;
