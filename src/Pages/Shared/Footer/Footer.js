import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, background: '#101010' }}>
            <Container sx={{ mt: 5, py: 5, color: 'white' }}>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={12} md={3} sx={{ textAlign: 'start' }}>
                        <Typography variant="h4" sx={{ color: '#FF6600', fontFamily: 'Poppins', fontWeight: '700' }}>Travel Blog</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ textAlign: 'start' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Quick Links</Typography>
                        <Typography variant="subtitle1">Home</Typography>
                        <Typography variant="subtitle1">Login</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ textAlign: 'start' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Social Media</Typography>
                        <Typography variant="subtitle1">Facebook</Typography>
                        <Typography variant="subtitle1">Instagram</Typography>
                        <Typography variant="subtitle1">Twitter</Typography>
                        <Typography variant="subtitle1">Youtube</Typography>
                        <Typography variant="subtitle1">Linked In</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ textAlign: 'start' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Contact Us</Typography>
                        <Typography variant="subtitle1">Green Road, Dhaka,</Typography>
                        <Typography variant="subtitle1">Bangladesh</Typography>
                        <Typography variant="subtitle1">+10 367 543 1234</Typography>
                        <Typography variant="subtitle1">info@travelblog.com</Typography>


                    </Grid>
                </Grid>
                <Typography variant="subtitle1" sx={{ mt: 3, pt: 3 }}>Copyright &copy; 2021 travelblog</Typography>
            </Container>
        </Box>
    );
};

export default Footer;