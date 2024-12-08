import './app.css'
import { AppBar, Toolbar, IconButton, Typography, Box, Container } from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';
import { Outlet } from 'react-router-dom';

export function App() {


  return (
    <>

    <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              
              <Typography variant="h6" color="inherit" component="div">
                <IconButton color="inherit" aria-label="menu" >
                C<CookieIcon /><CookieIcon />K PAD
              </IconButton>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

    <Container>
      <Outlet/>
    </Container>
    
    
    </>

  )
}
