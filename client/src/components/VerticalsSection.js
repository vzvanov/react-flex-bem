import React from "react";
import VerticalItem from "./VerticalItem";

const VerticalSection = ({ title, verticals }) => {

  return (
    <div className="vertical">
      <div className='container'>
        <div className="vertical__title title">{title}</div>
        <div className="vertical__body">
          <div className="vertical__row">
            {verticals.map((item, index) =>
              <VerticalItem key={item.id} vertical={item} index={index} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalSection;