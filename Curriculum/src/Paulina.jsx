import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";


const Img = styled("img")({
  width: 200,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function Paulina() {
  return (
    
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <Img
        src="https://img.freepik.com/fotos-premium/hermosas-flores-color-purpura-jardin-otono_73485-3654.jpg"
        alt="random"
      />
      
      <Box sx={{ flexGrow: 1 }}>
       <div className='container'>
        <h1 className='Header-title'>
          Paulina Angulo Moreno
        </h1>
        
        <h2>Informacion Personal</h2>
         <ul>
          <li>17 Años</li>
          <li>fecha de nacimiento 24/04/2006</li>
          <li>Estudiante</li>
          <li>paulina.angulo@cecytesinalo.edu.mx</li>
        </ul>

        <h2>Informacion Academica</h2>
         <ul>
          <li>Cecyte</li>
          <li>Programacion</li>
          <li>Modalidad Dual</li>
        </ul>

        <h2>Pasatiempos</h2>
         <ul>
          <li>salir a caminar</li>
          <li>Escuchar Musica</li>
          <li>Dormir</li>
        </ul>

        </div>
       
      </Box>
    </Paper>
  );
}