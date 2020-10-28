import React, {useState} from "react";

import classNames from "classnames";

import './PopupSuccess.scss';

const PopupSuccess = ({items}, showPopup) => {
  const [isPopup, setIsPopup] = useState(false);
  return (
    {isPopup} && (<div className="popup-success__window">
        <div className="popup__container">
          <div className="popup-success__wrap">
            <h2 className="popup-success__title">Успешно!</h2>
            <button className="popup-success__cross" type="button"></button>
          </div>
          <p className="popup-success__content">{items.name} добавлена в {items.task}</p>
          <button onClick={() => setIsPopup(false)} className="popup-success__close" type="button">OK</button>
        </div>
      </div>)
  );
};

export default PopupSuccess;

