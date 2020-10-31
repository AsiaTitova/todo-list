import React, {useState} from "react";

import CrossSvg from "../../assets/img/cross-popup.png";

import './PopupSuccess.scss';

const PopupSuccess = ({items, showPopup}) => {
  const [visiblePopup, setVisiblePopup] = useState(false);

  return (
    visiblePopup && (<div className="popup-success__window">
        <div className="popup__container">
          <div className="popup-success__wrap">
            <h2 className="popup-success__title">Успешно!</h2>
            <button onClick={() => setVisiblePopup(false)} className="popup-success__cross" type="button">
              <img className="popup-success__img" src={CrossSvg} width="10" height="10" alt="Закрыть"/>
            </button>
          </div>
          <p className="popup-success__content">{items.name} добавлена в {items.task}</p>
          <button onClick={() => setVisiblePopup(false)} className="popup-success__close" type="button">OK</button>
        </div>
      </div>)
  );
};

export default PopupSuccess;

