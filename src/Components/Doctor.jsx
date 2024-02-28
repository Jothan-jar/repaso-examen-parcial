import React from "react";

const Doctor = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h3>Doctor: {item.nombre}</h3>
      <h4>Especialidad: {item.especialidad}</h4>
      <button>Sacar turno</button>
    </div>
  );
};

export default Doctor;
