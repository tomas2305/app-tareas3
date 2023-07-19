import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function FormTarea(props) {
  const [input, setInput] = useState({
    id: 'XD',
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
    let nuevoID = uuidv4();
    props.addTarea({...input, id:nuevoID});
    setInput({id: '',titulo:'', descripcion:''})
    setEsFormCompleto(false)
  }


  return (
    <Box textAlign="left" my={2}>
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
          multiline
        ></TextField>
        <Button disabled={!esFormCompleto} onClick={addNuevaTarea} type="button" sx={{ mt: 2 }} variant="contained">
          Agregar Tarea
        </Button>
      </FormControl>
    </Box>
  );
}
