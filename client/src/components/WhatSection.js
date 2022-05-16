import React from "react";
import flex from '../img/image_2.jpg';

const WhatSection = ({ title }) => {
  return (
    <div className="what">
      <div className='container'>
        <div className="what__row">
          <div className="what__image">
            <img src={flex} alt="" />
          </div>
          <div className="what__body">
            <div className="what__title title ">{title}</div>
            <div className="what__text">
              <p>Flexbox - это целый модуль, содержащий в себе набор свойств и их значений как для родителя flex-контейнера так и для его дочерних элементов flex-элементов. </p>
              <p>Основным преимуществом гибкой FLEX разметки является возможность изменять ширину/высоту пространство вокруг и порядок flex-элементов, для того чтобы наилучшим образом заполнить доступное пространство flex-контейнера</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatSection;