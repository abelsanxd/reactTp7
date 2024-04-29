import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EmpleadoRow = ({ fullName, title, department, badgeColor }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
      <div>
        <h5>{fullName}</h5>
        <p className="mb-0">{title} - {department}</p>
      </div>
      <div>
        <span className={`badge bg-${badgeColor}`}>{department}</span>
      </div>
    </div>
  );
};

export default EmpleadoRow;
