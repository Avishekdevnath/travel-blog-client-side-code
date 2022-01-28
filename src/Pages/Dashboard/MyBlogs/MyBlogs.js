import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from '../../../redux/actions';
import axios from 'axios';

const MyBlogs = () => {
    const { user } = useAuth();
    const blogs = useSelector((state) => state.blogsReducer.blogs);
    const filteredBlogs = blogs.filter(blog => blog?.authorEmail === user?.email);
    const dispatch = useDispatch();

    const handleDelete = (_id) => {
        const confirm = window.confirm('Do you want to delete?')

        if (confirm) {
            axios.delete(`https://travel-blog-server.herokuapp.com/blogs/${_id}`)
                .then(data => {
                    const deletedCount = data.data.deletedCount
                    if (deletedCount > 0) {
                        const remainingBlogs = blogs.filter(blog => blog._id !== _id)
                        dispatch(setBlogs(remainingBlogs));
                        alert('deleted seccessfully');
                    }
                })

        }
    }

    return (
        <div>
            <h2>My Blogs</h2>
            <TableContainer component={Paper} >
                <Table aria-label="simple table">
                    <TableHead style={{ backgroundColor: '#5cd65c' }}>
                        <TableRow style={{ backgroundColor: '#5cd65c', color: 'white' }}>
                            <TableCell style={{ color: 'white', fontWeight: '700' }} variant="h5" align="center">Photo</TableCell>
                            <TableCell style={{ color: 'white', fontWeight: '700' }} variant="h5" align="center">Blog title</TableCell>
                            <TableCell style={{ color: 'white', fontWeight: '700' }} variant="h5" align="center">Author Name</TableCell>
                            <TableCell style={{ color: 'white', fontWeight: '700' }} variant="h5" align="center">Status</TableCell>
                            <TableCell style={{ color: 'white', fontWeight: '700' }} variant="h5" align="center">Delete Blog</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredBlogs.map((row) => {
                            const { _id, status, picture, authorName, name } = row;
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
                                    <TableCell align="center">{status}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="contained"
                                            sx={{ backgroundColor: 'red' }}
                                            onClick={() => handleDelete(_id)}
                                        >Delete Blog</Button>
                                    </TableCell>
                                </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyBlogs;