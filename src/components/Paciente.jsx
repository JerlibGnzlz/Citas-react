


const Paciente = ({paciente}) => {

   const {nombre,propietario,email,alta,sintoma} = paciente

   
   return (
      <div className="bg-white shadow-md rounded-md m-3 py-3 px-3">
         <p className="font-bold text-gray-700 uppercase">
            Nombre:{" "}
            <span className="normal-case font-normal">{nombre}</span>
         </p>

         <p className="font-bold text-gray-700 uppercase">
            Propietario:{" "}
            <span className="normal-case font-normal">{propietario}</span>
         </p>

         <p className="font-bold text-gray-700 uppercase">
            Email:{" "}
            <span className="normal-case font-normal">{email}</span>
         </p>

         <p className="font-bold text-gray-700 uppercase">
            Alta:{" "}
            <span className="normal-case font-normal">{alta}</span>
         </p>

         <p className="font-bold text-gray-700 uppercase">
            Sintomas:{" "}
            <span className="normal-case font-normal">{sintoma}</span>
         </p>
      </div>
   );
};

export default Paciente;