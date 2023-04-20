import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme } from '@mui/material/styles';
import {ThemeProvider} from "@mui/material";

const theme = createTheme({
  palette: {
    // @ts-ignore
    logoRed: {
      main: '#FB5164',
    }
  },
});

export default function OpLoading() {
  return (
    <Box sx={{ width: '100%' }}>
      <ThemeProvider theme={theme}>
        { // @ts-ignore
          <LinearProgress color='logoRed'/>
        }
      </ThemeProvider>
    </Box>
  );
}