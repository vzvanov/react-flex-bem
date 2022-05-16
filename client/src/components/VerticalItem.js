import React from "react";

const VerticalItem = ({ vertical, index }) => {
  return (
    <div className={`vertical__column vertical__column_${index + 1}`} >
      <div className="vertical__item">
        <div className="vertical__subtitle">буду рад</div>
        <div className="vertical__label">{vertical.lebel}</div>
        <div className="vertical__text">{vertical.text}</div>
        <a href="" className="vertical__btn">{vertical.btn}</a>
      </div>
    </div>
  );
};

export default VerticalItem;