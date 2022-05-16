import React from "react";
import ColumnItem from "./ColumnItem";

const ColumnSection = ({ title, columns }) => {

  return (
    <div className="columns">
      <div className='container'>
        <div className="columns__title title">{title}</div>
        <div className="columns__row">
          {columns.map(column =>
            <ColumnItem key={column.id} column={column} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ColumnSection;