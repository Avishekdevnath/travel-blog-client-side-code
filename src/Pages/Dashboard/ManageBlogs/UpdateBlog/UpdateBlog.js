import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';

const UpdateBlog = ({ open, handleClose, updateID, selectedUpdateBlog }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'scroll',
        width: "50vw",
        height: '80vh',
        bgcolor: 'white',
        border: '2px solid green',
        boxShadow: 24,
        p: 4,
    };

    // filtering update data
    // const blogs = useSelector((state) => state?.blogsReducer?.blogs);
    // const filteredBlogs = blogs?.filter(blog => blog?._id === updateID);
    const { name, authorInfo, picture, category, rating, price, date, time, transportation, location, shortDescription, description } = selectedUpdateBlog;

    const [data, setData] = useState({});
    //HandleOnBlur
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...data };
        newInfo[field] = value;
        setData(newInfo);
    }
    console.log(data)
    //HandleOnSubmit
    const handleSubmit = (updateID) => {
        // axios.put(`https://travel-blog-server.herokuapp.com/blogs/${_id}`, { status: updatedStatus })
        axios.put(`https://travel-blog-server.herokuapp.com/blogs/${updateID}`, { data })
            .then(res => {
                alert('updated');
                handleClose();
            })

        // e.preventDefault();
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" sx={{ mb: 2 }} component="h2">
                    Update Data
                </Typography>

                <form onSubmit={() => handleSubmit(updateID)} style={{ width: '85%', margin: 'auto' }}>
                    {/* <TextField
                        required
                        name="photo"
                        label="Photo URL"
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        required
                        name="name"
                        label="Name"
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        required
                        name="phone"
                        label="Phone Number"
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        required
                        name="email"
                        type="email"
                        label="E-mail"
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        required
                        name="designation"
                        label="Designation"
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        required
                        name="salary"
                        label="Salary"
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        required
                        name="joinedDate"
                        label="Joined Date"
                        sx={{ my: "10px", mx: "auto", width: "80%" }}
                        onBlur={handleOnBlur}
                    />

                    <Box sx={{ height: '100%', width: '100%', mx: 'auto', }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                bgcolor: 'background.paper',
                                maxWidth: 300,
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{ mx: '5px', background: 'green' }}
                                type="submit">Update
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ mx: '5px', background: 'red' }}
                                onClick={handleClose}>Close
                            </Button>
                        </Box>
                    </Box> */}



                    <TextField
                        sx={{ width: '100%', mb: 1 }}
                        onBlur={handleOnBlur}
                        name="name"
                        label="Title of the article"
                        defaultValue={name}
                        variant="filled"
                        required />
                    <TextField
                        sx={{ width: '100%', mb: 1 }}
                        onBlur={handleOnBlur}
                        name="authorInfo"
                        label="Author Information"
                        defaultValue={authorInfo}
                        variant="filled"
                        multiline
                        required />
                    <Box sx={{ width: '100%', mb: 1, mx: 'auto', display: 'flex', justifyContent: "space-between" }}>

                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '49%' }}
                            name="picture"
                            label="Photo url"
                            defaultValue={picture}
                            variant="filled"
                            required />
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '49%' }}
                            name="category"
                            label="Category"
                            defaultValue={category}
                            variant="filled"
                            required />
                    </Box>

                    <Box sx={{ width: '100%', mb: 1, mx: 'auto', display: 'flex', justifyContent: "space-between" }}>
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '49%' }}
                            type="number"
                            name="rating"
                            label="Rating (0-5)"
                            defaultValue={rating}
                            variant="filled"
                            required />
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '49%' }}
                            type="number"
                            name="price"
                            label="Total cost"
                            defaultValue={price}
                            variant="filled"
                            required />
                    </Box>
                    <Box sx={{ width: '100%', mb: 1, mx: 'auto', display: 'flex', justifyContent: "space-between" }}>
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '49%' }}
                            type="date"
                            name="date"
                            label="Date"
                            defaultValue={date}
                            variant="filled"
                            required />
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '49%' }}
                            type='time'
                            name="time"
                            label="Time"
                            defaultValue={time}
                            variant="filled"
                            required />
                    </Box>
                    <Box sx={{ width: '100%', mb: 1, mx: 'auto', display: 'flex', justifyContent: "space-between" }}>
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '49%' }}
                            name="transportation"
                            label="Transportation (0-5)"
                            defaultValue={transportation}
                            variant="filled"
                            required />
                        <TextField
                            onBlur={handleOnBlur}
                            sx={{ width: '49%' }}
                            name="location"
                            label="Location"
                            defaultValue={location}
                            variant="filled"
                            required />
                    </Box>

                    <TextField
                        sx={{ width: '100%', mb: 1 }}
                        onBlur={handleOnBlur}
                        name="shortDescription"
                        label="short description"
                        defaultValue={shortDescription}
                        placeholder="Add Short Description"
                        multiline
                        variant="filled"
                        required />
                    <TextField
                        sx={{ width: '100%', mb: 1 }}
                        onBlur={handleOnBlur}
                        name="description"
                        label="description"
                        defaultValue={description}
                        placeholder="Add Description"
                        multiline
                        variant="filled"
                        required />
                    <Button sx={{ width: '100%' }} type="submit" color="secondary" variant="contained">Submit</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default UpdateBlog;