
import { createMuiTheme, ThemeProvider } from '@mui/material/styles'
import CustomButton from './components/CustomButton';
import logo from './logo.svg';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667" //#4287f5 Hex
    }
  }

})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme = {theme}>
        <CustomButton/>
      </ThemeProvider>
    </div>
  );
}

export default App;
