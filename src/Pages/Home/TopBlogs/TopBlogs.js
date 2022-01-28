import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Pagination, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { Circles } from "react-loader-spinner";
import './TopBlogs.css';
import DateRangeIcon from '@mui/icons-material/DateRange';
// import StarIcon from '@mui/icons-material/Star
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CategoryIcon from '@mui/icons-material/Category';


const TopBlogs = () => {
    // const blogs = useSelector((state) => state.blogsReducer.blogs);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [displayBlogs, setDisplayBlogs] = useState([]);
    const [blogs, setBlogs] = useState([])

    const size = 10;
    useEffect(() => {
        fetch(`https://travel-blog-server.herokuapp.com/blogs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.blogs);
                // console.log(data.blogs);
                setDisplayBlogs(data.blogs);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
                // if (blogs.length > 0) {
                //     setLoading(false);
                // }
                // else {
                //     setLoading(true)

                // }
            });
    }, [page]);




    const [loading, setLoading] = useState(false);
    // const [page, setPage] = useState(1);


    // const fetchBlogs = async () => {
    //     const response = await axios
    //         // .get("https://travel-blog-server.herokuapp.com/blogs/")
    //         .get(`https://travel-blog-server.herokuapp.com/blogs?page=${page}&&size=${size}`)
    //         .catch((err) => {
    //             console.error("Error: ", err);
    //         });
    //     setBlogs(response.data);
    //     if (blogs.length > 0) {
    //         setLoading(false);
    //     }
    //     else {
    //         setLoading(true)

    //     }
    // };
    // useEffect(() => {
    //     fetchBlogs();
    //     if (blogs.length > 0) {
    //         setLoading(false);
    //     }
    //     else {
    //         setLoading(true)

    //     }
    // }, [page]);




    const filteredBlogs = blogs.filter(blog => blog.status === 'approved');
    console.log('filteredBlogs', filteredBlogs)

    const [selectedBlogType, setSelectedBlogType] = useState("All");
    const [selectedBlogCompare, setSelectedBlogCompare] = useState("rating");
    const selectedBlogsFilter = selectedBlogType === "All" ? filteredBlogs : filteredBlogs.filter(blog => blog.category === selectedBlogType)
    // const selectedBlogsFilter = () => {
    //     if (selectedBlogType === "All") {
    //          return filteredBlogs;
    //     }
    //     else {
    //         filteredBlogs.filter(blog => blog.category === selectedBlogType)
    //     }

    // }
    // console.log(selectedBlogsFilter);

    // sort by value

    selectedBlogsFilter.sort((a, b) => {
        switch (selectedBlogCompare) {
            case "rating":
                return b.rating - a.rating;

            case "price":
                return a.price - b.price;

            case "transportation":
                return b.transportation - a.transportation;

            default: return a.rating - b.rating;

        }
    })

    return (
        <>
            {loading ?
                <div className="h-100 w-100 my-5 py-5 d-flex justify-content-center align-items-center">
                    <Circles color="#00BFFF" height={80} width={80} />
                </div> :
                <>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', py: 5 }}>Traveller's Blogs</Typography>
                    <Container sx={{ flexGrow: 1 }}>

                        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className=''>
                            <Grid item xs={12} md={4} className=' '>
                                <>
                                    <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }} component="div">
                                        Compare By:
                                    </Typography>
                                    <Box>
                                        <Button onClick={() => setSelectedBlogCompare("rating")} variant={selectedBlogCompare === 'rating' ? "contained" : "outlined"} color="warning" sx={{ ml: 1 }}>Rating</Button>
                                        <Button onClick={() => setSelectedBlogCompare("price")} variant={selectedBlogCompare === 'price' ? "contained" : "outlined"} color="warning" sx={{ ml: 1 }}>Expense</Button>
                                        <Button onClick={() => setSelectedBlogCompare("transportation")} variant={selectedBlogCompare === 'transportation' ? "contained" : "outlined"} color="warning" sx={{ ml: 1 }}>Transportation</Button>
                                    </Box>
                                </>
                                <>
                                    <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold', my: 3 }} component="div">
                                        Catergory:
                                    </Typography>

                                    <Box>
                                        <Button onClick={() => setSelectedBlogType("All")} variant={selectedBlogType === 'All' ? "contained" : "outlined"} color="warning" sx={{ ml: 1, mb: 1 }}>All</Button>
                                        <Button onClick={() => setSelectedBlogType("Lake")} variant={selectedBlogType === 'Lake' ? "contained" : "outlined"} color="warning" sx={{ ml: 1, mb: 1 }}>Lake</Button>
                                        <Button onClick={() => setSelectedBlogType("Hill")} variant={selectedBlogType === 'Hill' ? "contained" : "outlined"} color="warning" sx={{ ml: 1, mb: 1 }}>Hill</Button>
                                        <Button onClick={() => setSelectedBlogType("Sea")} variant={selectedBlogType === 'Sea' ? "contained" : "outlined"} color="warning" sx={{ ml: 1, mb: 1 }}>Sea</Button>
                                        <Button onClick={() => setSelectedBlogType("Nature")} variant={selectedBlogType === 'Nature' ? "contained" : "outlined"} color="warning" sx={{ ml: 1, mb: 1 }}>Nature</Button>
                                    </Box>
                                </>


                            </Grid>
                            <Grid item xs={12} md={8} className="">
                                <Grid container spacing={2} className='pb-5'>

                                    {
                                        selectedBlogsFilter.map(blog => {
                                            const { _id, name, picture, shortDescription, authorInfo, category, description, transportation, time, date, status, price, location, id, rating, authorName } = blog;
                                            return (

                                                <Grid key={_id} item xs={12} md={12}>
                                                    <Card sx={{ maxWidth: '100%', mx: 'auto', height: '100%', boxShadow: 3 }} className="row">
                                                        <CardMedia
                                                            component="img"
                                                            height="250"
                                                            image={picture}
                                                            alt={name}
                                                            width="50"
                                                            className="col"
                                                        />
                                                        <CardContent className="col text-start">
                                                            <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }} component="div">
                                                                {name}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                {shortDescription}
                                                            </Typography>
                                                            <Box sx={{ flexGrow: 1, pb: 1 }}>
                                                                <Grid container spacing={2}>
                                                                    <Grid item xs={12} md={5}>
                                                                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                                                                            <StarIcon sx={{ color: '#ff8000', fontSize: '30px' }} /> {rating}/5

                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={12} md={5}>
                                                                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                                                                            <LocalAirportIcon sx={{ color: '#ff8000', fontSize: '30px' }} /> {transportation}/5
                                                                        </Typography>
                                                                    </Grid>

                                                                    <Grid item xs={12} md={5}>
                                                                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                                                                            <CreditCardIcon sx={{ color: '#ff8000', fontSize: '30px' }} />
                                                                            ৳ {price}
                                                                        </Typography>
                                                                    </Grid>

                                                                    <Grid item xs={12} md={5}>
                                                                        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} variant="h6">
                                                                            <CategoryIcon sx={{ color: '#ff8000', fontSize: '30px' }} />
                                                                            {category}
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>
                                                            <CardActions sx={{ display: 'flex', flexDirection: 'column' }} className="justify-content-start  align-items-start ">
                                                                <NavLink to={`/blogDetails/${_id}`} style={{ textDecoration: 'none' }}>
                                                                    <Button sx={{ backgroundColor: '#ff8000' }}
                                                                        variant="contained">Read More</Button>
                                                                </NavLink>
                                                            </CardActions>
                                                        </CardContent>

                                                    </Card>
                                                </Grid>

                                            )
                                        })
                                    }
                                </Grid>


                                <div className="pagination">
                                    {
                                        [...Array(pageCount).keys()]
                                            .map(number => <button
                                                className={number === page ? 'selected' : ''}
                                                key={number}
                                                onClick={() => setPage(number)}
                                            >{number + 1}</button>)
                                    }
                                </div>
                            </Grid>

                        </Grid>
                    </Container>
                </>

            }
        </>
    );
};

export default TopBlogs;