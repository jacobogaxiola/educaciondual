import { styled } from "@mui/material/styles";
import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";


  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });
  
  export default function Isis() {
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
          src="https://scontent.fmzt1-1.fna.fbcdn.net/v/t39.30808-6/399643673_3621619188165534_8216865269218622371_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=DY4V4HpNZl0AX90rSXa&_nc_ht=scontent.fmzt1-1.fna&oh=00_AfC5x1J9jA3OSzqxXwLkbMZl90j6OqBptuP8CNN3ZT1ERw&oe=65BE8C70"
          alt="random"
        />
        <Box sx={{ flexGrow: 1 }}>
          <h2>Product Name</h2>
          <p>Product Description</p>
          <Button variant="contained">Add cart</Button>
        </Box>
        <Box
          component="p"
          sx={{ mr: 2 }}
        >
          $19.99
        </Box>
      </Paper>
    );
  }
