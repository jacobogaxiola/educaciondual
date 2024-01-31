import { styled } from "@mui/material/styles";
import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";

const Img = styled("img")({
  width: 200,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function Jassiel() {
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
        src="https://lh3.googleusercontent.com/ogw/ANLem4aI2GuSmnF3-8UBxghFODbnY2ASnnc3o8Pq_ym9=s32-c-mo"
        alt="random"
      />
      <Box sx={{ flexGrow: 1 }}>
      <div className='Container'>
        <h1 className='Header-title'>
          jassiel gastelum cossio
        </h1>

        <h2>Informacion Personal</h2>
         <ul>
          <li>17 Años</li>
          <li>Estudiante</li>
          <li>jassiel.gastelum@cecytesinaloa.edu.mx</li>
          <li>num: 6971133821</li>
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
          <li>jugar minecraft</li>
          <li>escuchar musica</li>
        </ul>

        </div>
        
      </Box>
      <Box
        component="p"
        sx={{ mr: 2 }}
      >
    
      </Box>
    </Paper>
  );
}