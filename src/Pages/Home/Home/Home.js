import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import "./home.css"
import Slider from '../Slider/Slider';
import TopBlogs from '../TopBlogs/TopBlogs';
const Home = () => {
    return (
        <>
            <Header></Header>
            <Slider></Slider>


            <TopBlogs></TopBlogs>
            <Footer></Footer>
        </>
    );
};

export default Home;