import React from 'react'
import { CssBaseline, ThemeProvider, Typography } from '@mui/material'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './config/theme';
import SideNav from './component/SideNav';
import AppHeader from './component/AppHeader';
import {Box} from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
function App() {
  return (
   
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
        <CssBaseline />
        <AppHeader />
        
      <Box sx={styles.container}>
      <BrowserRouter>
        <SideNav/>
        <Box component={'main'} sx={styles.mainSection}>     
        </Box>
        <AppRoutes/>
        </BrowserRouter>
      </Box>
        </ProSidebarProvider>

      </ThemeProvider>
    </React.Fragment>
  )
}

/** @type {import('@mui/material').SxProps}*/
const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: '100%'
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  }
}
export default App