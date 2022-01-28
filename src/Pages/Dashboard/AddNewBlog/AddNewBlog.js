import { Alert, Avatar, Button, Container, Grid, Snackbar, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

// status
// authorName
// authorEmail

// picture
// name
// shortDescription
// description
// rating
// price
// date
// time
// transportation
// location

const AddNewBlog = () => {

    const { user } = useAuth();
    const initialInfo = { authorName: user.displayName, authorEmail: user.email, status: 'approved' }
    const [blogData, setBlogData] = useState(initialInfo);
    const [confirm, setConfirm] = useState(false);

    // snack bar
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    ///////////////

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newBlogData = { ...blogData };
        newBlogData[field] = value;
        setBlogData(newBlogData);
    }

    const handleBlogSubmit = (e) => {
        axios.post(`https://travel-blog-server.herokuapp.com/blogs`, blogData)
            .then(res => {
                if (res.data.insertedId) {
                    setConfirm(true);
                }
            })
        e.preventDefault();
    }


    // Select
    const categories = [
        {
            value: 'Lake',
            label: 'Lake',
        },
        {
            value: 'Hill',
            label: 'Hill',
        },
        {
            value: 'Sea',
            label: 'Sea',
        },
        {
            value: 'Nature',
            label: 'Nature',
        },
    ];
    const [category, setCategory] = React.useState('Lake');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };




    return (

        <Container>
            <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <Grid item sx={{ mt: 2 }} xs={12} md={6}>
                    <Typography sx={{ fontWeight: 'bold', mb: 1 }} variant="h4">Add a New blog</Typography>
                    <form onSubmit={handleBlogSubmit}>
                        <TextField
                            sx={{ width: '75%', mb: 1 }}
                            onBlur={handleOnBlur}
                            name="name"
                            label="Title of the article"
                            variant="filled"
                            required />
                        <TextField
                            sx={{ width: '75%', mb: 1 }}
                            onBlur={handleOnBlur}
                            name="authorInfo"
                            label="Author Information"
                            variant="filled"
                            multiline
                            required />
                        <Box sx={{ width: '75%', mb: 1, mx: 'auto', display: 'flex', justifyContent: "space-between" }}>

                            <TextField
                                onBlur={handleOnBlur}
                                name="picture"
                                label="Photo url"
                                variant="filled"
                                required />
                            {/* <TextField
                                onBlur={handleOnBlur}
                                name="category"
                                label="Category"
                                variant="filled"
                                required /> */}
                            <TextField
                                // className="my-5"
                                // id="outlined-select-category-native"
                                select
                                required
                                sx={{ width: '49%' }}
                                label="Category"
                                value={category}
                                variant="filled"
                                onChange={handleChange}
                                SelectProps={{
                                    native: true,
                                }}
                            // helperText="Please select a category"
                            >
                                {categories.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Box>

                        <Box sx={{ width: '75%', mb: 1, mx: 'auto', display: 'flex', justifyContent: "space-between" }}>
                            <TextField
                                onBlur={handleOnBlur}
                                type="number"
                                name="rating"
                                label="Rating (0-5)"
                                variant="filled"
                                required />
                            <TextField
                                onBlur={handleOnBlur}
                                type="number"
                                name="price"
                                label="Total cost"
                                variant="filled"
                                required />
                        </Box>
                        <Box sx={{ width: '75%', mb: 1, mx: 'auto', display: 'flex', justifyContent: "space-between" }}>
                            <TextField
                                onBlur={handleOnBlur}
                                sx={{ width: '49%' }}
                                type="date"
                                name="date"
                                label="Date"
                                variant="filled"
                                required />
                            <TextField
                                onBlur={handleOnBlur}
                                sx={{ width: '49%' }}
                                type='time'
                                name="time"
                                label="Time"
                                variant="filled"
                                required />
                        </Box>
                        <Box sx={{ width: '75%', mb: 1, mx: 'auto', display: 'flex', justifyContent: "space-between" }}>
                            <TextField
                                onBlur={handleOnBlur}
                                name="transportation"
                                label="Transportation (0-5)"
                                variant="filled"
                                required />
                            <TextField
                                onBlur={handleOnBlur}
                                name="location"
                                label="Location"
                                variant="filled"
                                required />
                        </Box>

                        <TextField
                            sx={{ width: '75%', mb: 1 }}
                            onBlur={handleOnBlur}
                            name="shortDescription"
                            label="short description"
                            placeholder="Add Short Description"
                            multiline
                            variant="filled"
                            required />
                        <TextField
                            sx={{ width: '75%', mb: 1 }}
                            onBlur={handleOnBlur}
                            name="description"
                            label="description"
                            placeholder="Add Description"
                            multiline
                            variant="filled"
                            required />
                        <Button sx={{ width: '75%' }} onClick={handleClick} type="submit" color="secondary" variant="contained">Submit</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Avatar
                        src="https://image.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg"
                        sx={{ height: "100%", width: '100%' }}
                        variant='square'
                        alt="" />
                </Grid>
            </Grid>
            {
                confirm && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        blog added successfully
                    </Alert>
                </Snackbar>
            }
        </Container >
    );
};

export default AddNewBlog;