import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import "./App.css";
import Tareas from "./components/Tareas";
import { pink } from "@mui/material/colors";

function App() {

  const darkheme = createTheme({
    palette: {
      mode: 'dark',
      primary:{
        main: '#08c8f0'
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        body{
          background-color: #05191e
        }
        `,
      },
    }
  });

  return (
    <ThemeProvider theme={darkheme}>
      <CssBaseline />
      <Container className="App">
        <Typography variant="h4" mt={3} textAlign='left'>App Tareas</Typography>
        <Tareas/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
