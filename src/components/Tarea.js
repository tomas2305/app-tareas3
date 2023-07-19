import { Delete } from "@mui/icons-material";
import {
    Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

export default function Tarea(props) {
  return (
    <Card
      variant="outlined"
      sx={{ boxShadow: "-10px 2px #0a323c", 
      backgroundColor:'#05191e',
      "&:hover": {backgroundColor:'#146478', boxShadow: "-15px 15px #0a323c"} }}
    >
      <CardContent>
        <Typography variant="h5" component="div" mb={1}>
          {props.titulo}
        </Typography>
        <Typography variant="body2">{props.descripcion}</Typography>
      </CardContent>
      {/* <CardActionArea>
        <Button><Delete fontSize="large"/></Button>
      </CardActionArea> */}
    </Card>
  );
}
