import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";


const Img = styled("img")({
  width: 200,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function Product() {
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
        src="https://holatelcel.com/wp-content/uploads/2018/06/HEAD-GARFIELD.jpg"
        alt="random"
      />
      
      <Box sx={{ flexGrow: 1 }}>
       <div className='Container'>
        <h1 className='Header-title'>
          Lenin Axel Sotelo Valenzuela
        </h1>
        
        <h2>Informacion Personal</h2>
         <ul>
          <li>18 Años</li>
          <li>Estudiante</li>
          <li>lenin.sotelo@cecytesinalo.edu.mx</li>
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
          <li>Leer</li>
          <li>Escuchar Musica</li>
          <li>Dormir</li>
          <li>Caminar</li>
        </ul>

        </div>
       
      </Box>
    </Paper>
  );
}
