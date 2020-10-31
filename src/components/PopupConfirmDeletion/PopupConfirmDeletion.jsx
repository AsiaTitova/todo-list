import React, {useState} from "react";

import CrossSvg from "../../assets/img/cross-popup.png";

import './PopupConfirmDeletion.scss';

const PopupConfirmDeletion = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  return (
    visiblePopup && (<div className="popup-error__window">
        <div className="popup__container">
          <div className="popup-error__wrap">
            <h2 className="popup-error__title">Успешно!</h2>
            <button onClick={() => setVisiblePopup(false)} className="popup-error__cross" type="button">
              <img className="popup-error__img" src={CrossSvg} width="10" height="10" alt="Закрыть"/>
            </button>
          </div>
          <p className="popup-error__content">Вы уверены, что хотите удалить данную задачу?</p>
          <div className="popup-error__wrap">
            <button onClick={() => setVisiblePopup(false)} className="popup-error__close" type="button">Удалить</button>
            <button onClick={() => setVisiblePopup(false)} className="popup-error__close" type="button">Отмена</button>
          </div>
        </div>
      </div>)
  );
};

export default PopupConfirmDeletion;
