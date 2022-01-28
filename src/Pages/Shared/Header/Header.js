import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Avatar } from '@mui/material';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Box >
            
            <AppBar position="static" >
                <Toolbar sx={{ backgroundColor: '#101010', display: 'flex', flexWrap: 'wrap' }} sm={{ flexDirection: 'column' }} >
                    <NavLink style={{ textDecoration: 'none', marginRight: 'auto' }} to="/home">
                        <Typography variant="h5" component="div" sx={{ color: '#FF6600' }} style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
                            Travel Blog
                        </Typography>
                    </NavLink>
                    <>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home">
                            <Button color="inherit" sx={{ fontWeight: 'bold' }}>Home</Button>
                        </NavLink>
                      
                        {
                            user?.email ?
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                        <Button color="inherit">Dashboard</Button>
                                    </NavLink>
                                    <Button onClick={logOut} sx={{ backgroundColor: 'red', mx: 2 }} color="inherit">Logout</Button>

                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={user?.photoURL}
                                            sx={{ width: 45, height: 45 }}
                                        />
                                    </NavLink>
                                </Box>
                                :
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                        }
                    </>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;