import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EmpleadoAvatar = ({ pic }) => {
  return (
    <div className="rounded-circle bg-danger d-flex align-items-center justify-content-center" style={{ width: "100px", height: "100px" }}>
      <img src={pic} alt="Avatar" style={{ maxWidth: "100%", maxHeight: "100%" }} />
    </div>
  );
};

export default EmpleadoAvatar;
