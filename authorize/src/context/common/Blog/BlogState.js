import React, { useState } from "react";
import BlogContext from "./blogContext";
import swal from "sweetalert";
require('dotenv').config();

const BlogState = (props) => {
    const [allBlog, blogData] = useState([])
    const [loading, setLoading] = useState(false);
    const host = process.env.REACT_APP_DB_HOST
    const token = localStorage.getItem('token');

    // Add Blog Record
    const addBlogRecord = async (title, description, meta_title, meta_keyword, meta_description, blog, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('blog', blog);
            payload.append('title', title);
            payload.append('description', description);
            payload.append('meta_title', meta_title);
            payload.append('meta_keyword', meta_keyword);
            payload.append('meta_description', meta_description);

            const response = await fetch(`${host}/api/blog/add/`, {
                method: 'POST',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllBlog(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Update Blog Record
    const updateBlogRecord = async (id, title, description, meta_title, meta_keyword, meta_description, blog, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('blog', blog);
            payload.append('title', title);
            payload.append('description', description);
            payload.append('meta_title', meta_title);
            payload.append('meta_keyword', meta_keyword);
            payload.append('meta_description', meta_description);

            const response = await fetch(`${host}/api/blog/updateblog/${id}`, {
                method: 'PUT',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllBlog(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }


    // Get all Blog data
    const getAllBlog = async (page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/blog/show/?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            setLoading(false);
            blogData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Handle Per Rows Change
    const perRowsChange = async (newPerPage, page) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/blog/show/?page=${page}&limit=${newPerPage}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            setLoading(false);
            const json = await response.json()
            blogData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Delete a note
    const deleteBlog = async (id, page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/blog/deleteblog/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            if (json.success) {
                setLoading(false);
                getAllBlog(page, limit);
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    return (
        <BlogContext.Provider value={{ allBlog, loading, getAllBlog, deleteBlog, perRowsChange, addBlogRecord, updateBlogRecord }}>
            {props.children}
        </BlogContext.Provider>
    )
}
export default BlogState;