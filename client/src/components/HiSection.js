import React from "react";
import hi from '../img/image.jpg';

const HiSection = () => {
  return (
    <div className="hi">
      <div className='container'>
        <div className="hi__row">
          <div className="hi__body">
            <div className="hi__title">Привет, друг!</div>
            <ul className="hi__list">
              <li>У тебя все получится!</li>
              <li>Никогда не здавайся!</li>
              <li>Сегодня ты уже знаешь больше чем вчера!</li>
              <li>Спасибо тебе за поддержку!</li>
            </ul>
          </div>
          <div className="hi__image">
            <img src={hi} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiSection;