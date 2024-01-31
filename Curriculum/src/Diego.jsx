import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function Diego() {
  return (
<Box sx={{ flexGrow: 1 }}>
       <div className='Container'>
        <h1 className='Header-title'>
          Diego Jared Leyva López
        </h1>

        <h2>Informacion Personal</h2>
         <ul>
          <li>17 Años</li>
          <li>Estudiante</li>
          <li>diego.jared.leyva@cecytesinaloa.edu.mx</li>
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
            <li>Jugar Futbol</li>
            <li>Hacer ejercicio</li>
            <li>Venir a la chamba</li>
          </ul>
        </div>
       
      </Box>
)
}