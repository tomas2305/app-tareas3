import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";

export default function FormTarea(props) {
  const [input, setInput] = useState({
    titulo: '',
    descripcion: ''
  });

  const [esFormCompleto, setEsFormCompleto] = useState(false)

  function cambiarTitulo(event){
    let cambio = event.target.value
    let nuevoInput = {...input, titulo: cambio}
    setInput(nuevoInput)
    if(cambio && input.descripcion){
        setEsFormCompleto(true)
    }else{
        setEsFormCompleto(false)
    }
  }

  function cambiarDescripcion(event){
    let cambio = event.target.value
    let nuevoInput = {...input, descripcion: cambio}
    setInput(nuevoInput)
    if(cambio && input.titulo){
        setEsFormCompleto(true)
    }
    else{
        setEsFormCompleto(false)
    }
  }

  function addNuevaTarea(event) {
    event.preventDefault();
    props.addTarea(input);
    setInput({titulo:'', descripcion:''})
    setEsFormCompleto(false)
  }


  return (
    <Box textAlign="left" my={2} component="form">
      <FormControl>
        <TextField
          label="Titulo"
          variant="standard"
          color="primary"
          inputMode="text"
          value={input.titulo}
          onChange={cambiarTitulo}
        ></TextField>
        <TextField
          sx={{ mt: 2 }}
          label="Descripcion"
          variant="standard"
          color="primary"
          inputMode="text"
          value={input.descripcion}
          onChange={cambiarDescripcion}
        ></TextField>
        <Button disabled={!esFormCompleto} onClick={addNuevaTarea} type="button" sx={{ mt: 2 }} variant="contained">
          Agregar Tarea
        </Button>
      </FormControl>
    </Box>
  );
}
