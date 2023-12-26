import { useState,useEffect } from "react";
import Error from "./Error"



const Formulario = ({ pacientes, setPacientes ,paciente}) => {

   const [nombre, SetNombre] = useState("");
   const [propietario, SetPropietario] = useState("");
   const [email, SetEmail] = useState("");
   const [alta, SetAlta] = useState("");
   const [sintoma, SetSintoma] = useState("");

   const [error, setError] = useState(false);


useEffect(()=>{

   console.log(pacientes)
   
},[pacientes])


const generarId=()=>{
   const random = Math.random().toString(36).substr(2)
   const fecha = Date.now().toString(36)
   return random + fecha
}

   const handleSumit = (e) => {
      e.preventDefault();

      if (!nombre || !propietario || !email || !alta || !sintoma) {
         console.log(`Falta llenar un campo `);
         setError(true);
         return;
      }
      setError(false);


      // ─── Objeto Pacientes ────────────────────────────────────────



      const objetoPaciente = {
         nombre,
         propietario,
         email,
         alta,
         sintoma,
         id: generarId()
      }

      setPacientes([...pacientes, objetoPaciente])


      // ─── Reiniciar Formulario ────────────────────────────────────

      SetNombre("")
      SetPropietario("")
      SetEmail("")
      SetAlta("")
      SetSintoma("")

   };

   return (
      <div className="md:w-1/2 lg:w-2/5">
         <h1 className="text-center font-black text-3xl">
            Seguimiento Pacientes
         </h1>

         <p className="mb-10 text-lg mt-5  text-center" >
            Añade Pacientes
            <span className="font-bold text-green-700 ">{" "}
               Administralos
            </span>
         </p>

         <form onSubmit={handleSumit}
            className="font-bold bg-white shadow-md rounded-lg py-10 px-5 mb-10 m-5">

            {/* ACA LLAMAMOS AL COMPONENTE DE ERROR  */}

            {error && <Error> Todos los campos son obligatorio</Error>}

            <div>
               <label htmlFor="mascotas" className=" block text-gray-700 uppercase font-bold ">
                  Nombre de Mascota
               </label>{" "}

               <input className="border-2  p-2 w-full mt-2 mb-3 placeholder-green-300 rounded-md "
                  id="mascotas"
                  type="text"
                  placeholder="Nombre de la mascota"
                  value={nombre}
                  onChange={(e) => SetNombre(e.target.value)}
               />
            </div>

            <div>
               <label htmlFor="propietario" className=" block  text-gray-700 uppercase font-bold ">
                  Nombre del Propietario
               </label>{" "}

               <input className="border-2  p-2 w-full mt-2 mb-3 placeholder-green-300 rounded-md"
                  id="propietario"
                  type="text"
                  placeholder="Nombre del Propietario"
                  value={propietario}
                  onChange={(e) => SetPropietario(e.target.value)}
               />


            </div>

            <div>
               <label htmlFor="email" className=" block  text-gray-700 uppercase font-bold ">
                  Email
               </label>{" "}

               <input className="border-2  p-2 w-full mt-2 mb-3 placeholder-green-300 rounded-md"
                  id="email"
                  type="email"
                  placeholder="Email Contacto del propietario"
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}

               />
            </div>

            <div>
               <label htmlFor="fecha" className=" block  text-gray-700 uppercase font-bold ">
                  Alta
               </label>{" "}

               <input className="border-2  p-2 w-full mt-2 mb-3  placeholder-green-300 rounded-md"
                  id="fecha"
                  type="date"
                  value={alta}
                  onChange={(e) => SetAlta(e.target.value)}

               />
            </div>

            <div>
               <label htmlFor="sintomas" className=" block  text-gray-700 uppercase font-bold ">
                  Sintomas
               </label>{" "}

               <textarea className="border-2  p-2 w-full mt-2 mb-4  placeholder-green-300 rounded-md"
                  id="sintomas"
                  placeholder="Describe los sintomas"
                  value={sintoma}
                  onChange={(e) => SetSintoma(e.target.value)}
               />
            </div>


            <input
               type="submit"
               value="Agregar paciente"
               className="bg-green-400 w-full p-3 text-white uppercase font-bold hover:bg-green-800 hover:text-slate-900 cursor-pointer transition-all mt-3"
            />
         </form>
      </div>
   );
};

export default Formulario;
