import { Box } from "@mui/material";

export default function Gael() {
  return (
<Box sx={{ flexGrow: 1 }}>
       <div className='Container'>
        <h2 className='Header-title'>
          Luis Gael Gutierrez Sainz
        </h2>

        <h3>Informacion Personal</h3>
         <ul>
          <li>17 Años</li>
          <li>Estudiante</li>
          <li>luis.gael.gutierrez@cecytesinaloa.edu.mx</li>
        </ul>

        <h2>Informacion Academica</h2>
         <ul>
          <li>Cecyte</li>
          <li>Programacion</li>
          <li>Modalidad Dual</li>
          <li>Gm Transport</li>
        </ul>

        <h2>Pasatiempos</h2>
         <ul>
          <li>Tocar Guitarra</li>
          <li>Escuchar Musica</li>
          <li>Correr</li>
          <li>Estudiar Ingles </li>
        </ul>

        </div>
       
      </Box>
  )
}