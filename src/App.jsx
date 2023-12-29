import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //TODO:LocalStorage

  const pacientesLS = localStorage.getItem("PACIENTES");

  useEffect(() => {
    if (pacientesLS) {
      setPacientes(JSON.parse(pacientesLS));
    }
  }, []);

  useEffect(() => {
    const pacientesString = JSON.stringify(pacientes);
    localStorage.setItem("PACIENTES", pacientesString);
  }, [pacientes]);

  //TODO:LocalStorage

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className=" container mx-auto mt-20">
      <Header />
      <div className="md:flex mt-12">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
};

export default App;
