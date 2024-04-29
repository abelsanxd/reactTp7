import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoList from "./components/EmpleadoList";

let empleados = [
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "src/assets/avatar.png" },
  { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "src/assets/avatar.png" },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "src/assets/avatar.png" },
  { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "src/assets/avatar.png" },
  { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "src/assets/avatar.png" },
  { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "src/assets/avatar.png" },
  { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "src/assets/avatar.png" },
  { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "src/assets/avatar.png" },
  { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "src/assets/avatar.png" },
];

const App = () => {
  return (
    <section>
      <h1 className="text-center mt-5">Lista de Empleados</h1>
      <EmpleadoList empleados={empleados} />
    </section>
  );
};

export default App;
