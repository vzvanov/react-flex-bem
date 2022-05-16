import React from "react";
import column_img from '../img/image_3.jpg';

const ColumnItem = ({ column }) => {

  return (
    <div className="columns__column">
      <div className="columns__item item">
        <div className="item__row">
          <div className="item__image"><img src={column_img} alt="" /></div>
          <div className="item__body">
            <div className="item__title">{column.title}</div>
            <div className="item__text">{column.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnItem;