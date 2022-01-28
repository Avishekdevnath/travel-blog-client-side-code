import { Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedIcon from '@mui/icons-material/Speed';
import PowerIcon from '@mui/icons-material/Power';
import DateRangeIcon from '@mui/icons-material/DateRange';
import StarIcon from '@mui/icons-material/Star';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CategoryIcon from '@mui/icons-material/Category';



const Blog = () => {
    const { blogID } = useParams();

    const blogs = useSelector((state) => state.blogsReducer.blogs);
    const blog = blogs.filter(blog => blog._id === blogID);
    const { name, authorInfo, category, description, shortDescription, transportation, time, date, status, price, location, id, rating, authorName } = blog[0];
    return (
        <>
            <Header></Header>
            <Box
                className="banner"
                sx={{
                    height: '85vh',
                    background: `url("${blog[0].picture}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%'
                }}></Box>
            <Container sx={{ flexGrow: 1, mx: 'auto', mt: 5 }}>

                <Box sx={{ boxShadow: 3, border: '1px solid #ff8000', textAlign: 'left', p: 3, pt: 0 }}>
                    <h2>{name}</h2>
                    {/* <Box sx={{ flexGrow: 1, pb: 3, borderBottom: '1px solid grey' }}>

                    </Box> */}
                    <Box sx={{ flexGrow: 1, pb: 3, borderBottom: '1px solid grey' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={5}>
                                <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                                    <StarIcon sx={{ color: '#ff8000', fontSize: '30px' }} /> Rating: {rating}/5

                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                                    <LocalAirportIcon sx={{ color: '#ff8000', fontSize: '30px' }} /> Transportation : {transportation}/5
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                                    <DateRangeIcon sx={{ color: '#ff8000', fontSize: '30px' }} /> Time & Date: {time}, {date}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                                    <CreditCardIcon sx={{ color: '#ff8000', fontSize: '30px' }} />
                                    Expenses: ৳ {price}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                                    <LocationOnIcon sx={{ color: '#ff8000', fontSize: '30px' }} />
                                    Location: {location}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                                    <CategoryIcon sx={{ color: '#ff8000', fontSize: '30px' }} />
                                    Category: {category}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Typography sx={{ pb: 2 }} variant='h4' className='fw-bold'>{name}</Typography>

                        <Typography sx={{}}> <span className='fw-bold'>Author Name:</span> {authorName}</Typography>
                        <Typography sx={{}}> <span className='fw-bold'>Author Info:</span> {authorInfo}</Typography>
                        <br />

                        <Typography sx={{}} variant='subtitle1' className='fw-bold'>Blog:</Typography>
                        <Typography sx={{}}>{description}</Typography>


                    </Box>
                </Box>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Blog;