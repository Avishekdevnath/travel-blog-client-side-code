import React, { useState } from 'react';
import { Avatar, Button, Container, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from '../../../../redux/actions';
import axios from 'axios';
import UpdateBlog from '../UpdateBlog/UpdateBlog';

const ManageBlogs = () => {
    const blogs = useSelector((state) => state.blogsReducer.blogs);
    const filteredBlogs = blogs.filter(blog => blog.status === 'approved');
    const dispatch = useDispatch();

    // modal state handling
    const [updateID, setUpdateID] = useState(null);
    const [selectedUpdateBlog, setSelectedUpdateBlog] = useState({})
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // handle update blog
    const handleUpdate = (_id, handleOpen) => {
        handleOpen();
        setUpdateID(_id);
        const selectedUpdate = blogs.filter(blog => blog._id === _id);
        setSelectedUpdateBlog(selectedUpdate[0]);
    }

    // deleting blog
    const handleDelete = (_id) => {
        const confirm = window.confirm('Do you want to delete?')

        if (confirm) {
            axios.delete(`https://travel-blog-server.herokuapp.com/blogs/${_id}`)
                .then(data => {
                    const deletedCount = data.data.deletedCount
                    if (deletedCount > 0) {
                        alert('deleted seccessfully');
                        const remainingBlogs = blogs.filter(blog => blog._id !== _id)
                        dispatch(setBlogs(remainingBlogs));
                    }
                })

        }
    }
    return (
        <>
            <Container>
                <h2>Manage all Blogs here</h2>
                <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 3 }}>
                    <TableContainer sx={{ maxHeight: 500 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Photo</Typography> </TableCell>
                                    <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Blog title</Typography> </TableCell>
                                    <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Author Name</Typography> </TableCell>
                                    <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Update Blog</Typography> </TableCell>
                                    <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Delete Blog</Typography> </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredBlogs.map((row) => {
                                    const { _id, picture, authorName, name } = row;
                                    return (
                                        <TableRow
                                            key={_id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center" component="th" scope="row">
                                                <Avatar alt={name} src={picture} sx={{ height: '100px', width: '100%', mx: 'auto' }} variant="square" />
                                            </TableCell>
                                            <TableCell align="center">{name}</TableCell>
                                            <TableCell align="center">{authorName}</TableCell>
                                            <TableCell align="center">
                                                <Button
                                                    variant="contained"
                                                    color="success"
                                                    startIcon={<EditIcon />}
                                                    onClick={() => handleUpdate(_id, handleOpen)}
                                                >Update Blog</Button>
                                            </TableCell>
                                            <TableCell align="center">
                                                <Button
                                                    variant="contained"
                                                    color="error"
                                                    startIcon={<DeleteIcon />}
                                                    onClick={() => handleDelete(_id)}
                                                >Delete Blog</Button>
                                            </TableCell>
                                        </TableRow>)
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>
            {selectedUpdateBlog && <UpdateBlog
                open={open}
                handleClose={handleClose}
                updateID={updateID}
                selectedUpdateBlog={selectedUpdateBlog}
            />}
        </>
    );
};

export default ManageBlogs;