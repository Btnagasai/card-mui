import { createTheme, ThemeProvider } from '@mui/material/styles';
import OutlinedCard from './Outlinedcard';

// Create a theme instance with 'Public Sans'
const theme = createTheme({
  typography: {
    fontFamily: 'Public Sans'
  },
});

function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
     <OutlinedCard/>
    </ThemeProvider>
    </div>
  );
}

export default App;
