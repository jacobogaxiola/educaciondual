import { styled } from "@mui/material/styles";
import { Button, Paper } from "@mui/material";
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
        src="https://scontent.fmzt1-1.fna.fbcdn.net/v/t39.30808-6/415740492_1077584030251220_1582604430840349044_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFaSYfljxQVjZPc1M0XHlxiUouTMjGl2jxSi5MyMaXaPJtimssGxoG0PKUibg5ch2aIHeCb2T1kSYmVZzfwxmKy&_nc_ohc=L-nYQezL-vQAX_TwvMf&_nc_ht=scontent.fmzt1-1.fna&oh=00_AfD8wQFpnk4ngvTzTGWAYjxhzU9nmD_KmFz0wsZbWMQI2w&oe=65BD6FE8"
        alt="random"
      />
      <Box sx={{ flexGrow: 1 }}>
      <div className='Container'>
        <h1 className='Header-title'>
          Yan Carlo Salazar Cota 
        </h1>

        <h2>Informacion Personal</h2>
         <ul>
          <li>18 Años</li>
          <li>Estudiante</li>
          <li>yan.salazar@cecytesinalo.edu.mx</li>
          <li>num: 6971028752</li>
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
          <li>Escribir</li>
          <li>Leer</li>
          <li>Atletismo</li>
          <li>Arte</li>
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