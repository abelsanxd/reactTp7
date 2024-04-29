import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadorAvatar from "./EmpleadorAvatar";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = ({ empleados }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          {empleados.map((empleado) => (
            <div key={empleado.id} className="bg-primary rounded p-3 mb-3">
              <EmpleadorAvatar pic={empleado.pic} />
              <EmpleadoRow
                fullName={empleado.fullName}
                title={empleado.title}
                department={empleado.department}
                badgeColor={empleado.department === "Marketing" ? "success" : "info"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpleadoList;
