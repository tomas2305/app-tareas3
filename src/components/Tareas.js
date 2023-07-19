import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Tarea from "./Tarea";
import FormTarea from "./FormTarea";
import { v4 as uuidv4 } from 'uuid'; //import

export default function Tareas() {
  const [tareas, setTareas] = useState([]);

  function addTarea(tarea) {
    setTareas([...tareas, tarea]);
  }

  return (
    <Box  my={2}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <FormTarea addTarea={addTarea}/>
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={4}>
            {tareas.map((tarea) => (
              <Grid item xs={3} key={uuidv4()}>
                <Tarea descripcion={tarea.descripcion} titulo={tarea.titulo} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
