import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente,eliminarPaciente}) => {

  

  return (

   
    <div className=" md:w-1/2  lg:w-3/5 md:h-screen overflow-scroll">

      {pacientes && pacientes.length ? (
         <>
               <h2 className="text-center font-black text-3xl">Listado Pacientes</h2>
               <p className="mb-10 text-lg mt-5  text-center">
                 Administras tus
                 <span className="font-bold text-green-700 "> Pacientes y Citas</span>
               </p>
         
         
         { pacientes.map(paciente=>(
            <Paciente 
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
          ))}
         </>
         )
         :(
         <>
          <h2 className="text-center font-black text-3xl">No hay Pacientes</h2>
               <p className="mb-10 text-lg mt-5  text-center">
                 Comienza agregando pacientes
                 <span className="font-bold text-green-700 "> y apareceran en este lugar</span>
               </p>
         </>
         )}

         </div>
    
  );
};

export default ListadoPacientes;
