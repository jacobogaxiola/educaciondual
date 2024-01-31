import { styled } from "@mui/material/styles";
import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";

const Img = styled("img")({
  width: 200,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function Fran() {
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
        src="https://via.placeholder.com/200"
        alt="random"
      />
      <Box sx={{ flexGrow: 1 }}>
        <h2>Francisco Ramon </h2>
        <p>Chef profecional </p>
        <Button variant="contained">cocino👍</Button>
      </Box>
      <Box
        component="p"
        sx={{ mr: 2 }}
      >
        1500
      </Box>
    </Paper>
  );
}
