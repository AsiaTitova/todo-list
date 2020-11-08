import React from "react";

import './Header.scss';

const Header = () => {
  return (
    <React.Fragment>
      <div className="header__wrap">
        <h1 className="header__title">todo list</h1>
        <button className="header__singin" type="button">Войти</button>
        <button className="header__login" type="button">Зарегистрироваться</button>
      </div>
    </React.Fragment>
  );
}

export default Header;
