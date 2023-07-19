import { Delete } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Tarea(props) {
  const [tachado, setTachado] = useState(false);

  function deleteTarea(event) {
    props.deleteTarea(props.id);
  }

  function tacharTarea() {
    setTachado(!tachado);
  }

  const cardStyle = {
    boxShadow: "-10px 2px #0a323c",
    backgroundColor: "#05191e",
    "&:hover": {
      backgroundColor: "#146478",
      boxShadow: "-15px 15px #0a323c",
      cursor: "pointer",
    },
  };

  return (
    <Card
      variant="outlined"
      sx={
        tachado
          ? {
              ...cardStyle,
              backgroundColor: "#146478",
              textDecorationLine: "line-through",
              "&:hover": {
                backgroundColor: "#146478",
                boxShadow: "-15px 15px #0a323c",
                cursor: "pointer",
              },
            }
          : cardStyle
      }
      onClick={tacharTarea}
    >
      <CardContent>
        <Typography variant="h5" component="div" mb={1}>
          {props.titulo}
        </Typography>
        <Typography variant="body2">{props.descripcion}</Typography>
      </CardContent>
      <Box textAlign="right">
        <Button onClick={deleteTarea}>
          <Delete fontSize="small" />
        </Button>
      </Box>
    </Card>
  );
}
