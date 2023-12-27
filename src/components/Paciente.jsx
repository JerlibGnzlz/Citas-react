const Paciente = ({ paciente ,setPaciente,eliminarPaciente}) => {
   const { nombre, propietario, email, alta, sintoma,id } = paciente;

const handlerEliminar=()=>{
const resp = confirm("Deseas eliminar este paciente.?")

setTimeout(() => {
   if (resp) {
      eliminarPaciente(id)
   }
}, 1000);
}


   return (
      <div className="bg-white shadow-md rounded-md m-3 py-3 px-3">
         <p className="font-bold text-gray-700 uppercase">
            Nombre: <span className="normal-case font-normal">{nombre}</span>
         </p>

         <p className="font-bold text-gray-700 uppercase">
            Propietario:{" "}
            <span className="normal-case font-normal">{propietario}</span>
         </p>

         <p className="font-bold text-gray-700 uppercase">
            Email: <span className="normal-case font-normal">{email}</span>
         </p>

         <p className="font-bold text-gray-700 uppercase">
            Alta: <span className="normal-case font-normal">{alta}</span>
         </p>

         <p className="font-bold text-gray-700 uppercase">
            Sintomas: <span className="normal-case font-normal">{sintoma}</span>
         </p>

         <div className="flex justify-between mt-3 mb-3">
            <button type="button" 
            className="font-bold uppercase py-2 px-10   hover:text-yellow-100 bg-green-400 hover:bg-green-700 text-center text-white rounded-lg transition-all mt-3"
            onClick={()=>setPaciente(paciente)}>
               Editar
            </button>
          
               

            <button type="button"
            className="font-bold uppercase py-2 px-10  hover:text-yellow-100 bg-red-400 hover:bg-red-800 text-center text-white rounded-lg transition-all mt-3"
            onClick={handlerEliminar}
             >   
               Eliminar
               
            </button >
         </div>
      </div>
   );
};

export default Paciente;
