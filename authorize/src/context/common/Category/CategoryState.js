import React, { useState } from "react";
import CategoryContext from "./categoryContext";
import swal from "sweetalert";
require('dotenv').config();

const CategoryState = (props) => {
    const [allCategory, categoryData] = useState([])
    const [loading, setLoading] = useState(false);
    const host = process.env.REACT_APP_DB_HOST
    const token = localStorage.getItem('token');

    // Add Category Record
    const addCategoryRecord = async (title, category, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('category', category);
            payload.append('title', title);

            const response = await fetch(`${host}/api/category/add/`, {
                method: 'POST',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllCategory(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Update Category Record
    const updateCategoryRecord = async (id, title, category, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('category', category);
            payload.append('title', title);

            const response = await fetch(`${host}/api/category/updatecategory/${id}`, {
                method: 'PUT',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllCategory(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }


    // Get all Category data
    const getAllCategory = async (page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/category/show/?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            setLoading(false);
            categoryData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Handle Per Rows Change
    const perRowsChange = async (newPerPage, page) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/category/show/?page=${page}&limit=${newPerPage}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            setLoading(false);
            const json = await response.json()
            categoryData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Delete a note
    const deleteCategory = async (id, page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/category/deletecategory/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            if (json.success) {
                setLoading(false);
                getAllCategory(page, limit);
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    return (
        <CategoryContext.Provider value={{ allCategory, loading, getAllCategory, deleteCategory, perRowsChange, addCategoryRecord, updateCategoryRecord }}>
            {props.children}
        </CategoryContext.Provider>
    )
}
export default CategoryState;