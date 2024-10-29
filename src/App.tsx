import { createTheme, ThemeProvider } from '@mui/material/styles';
import OutlinedCard from './Outlinedcard';
import Cardadd from './Cardadd';
// Create a theme instance with 'Public Sans'
const theme = createTheme({
  typography: {
    fontFamily: 'Public Sans'
  },
});

function App() {
  return (
    <div>
    {/* <ThemeProvider theme={theme}>
     <OutlinedCard/>
    </ThemeProvider> */}
    <Cardadd/>
    </div>
  );
}

export default App;
