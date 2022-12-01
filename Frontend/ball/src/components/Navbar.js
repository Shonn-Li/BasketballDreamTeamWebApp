import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';
import '../css/Navbar.css'
const Navbar = () => {
  const { access_token } = getToken()
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar class='app-bar' position="static">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{  color: 'white', flexGrow: 1 }}>DreamTeam</Typography>

          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#222222' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

          <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#222222' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contact</Button>

          {access_token ? <Button component={NavLink} to='/dashboard' style={({ isActive }) => { return { backgroundColor: isActive ? '#222222' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Dashboard</Button> : <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#222222' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button>}



        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
