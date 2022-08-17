import React, { useState } from "react";
import SubcategoryContext from "./subcategoryContext";
import swal from "sweetalert";

const SubcategoryState = (props) => {
    const [allSubcategory, subcategoryData] = useState([])
    const [loading, setLoading] = useState(false);
    const host = process.env.REACT_APP_DB_HOST
    const token = localStorage.getItem('token');

    // Add Subcategory Record
    const addSubcategoryRecord = async (title, parent, subcategory, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('subcategory', subcategory);
            payload.append('title', title);
            payload.append('parent', parent);

            const response = await fetch(`${host}/api/subcategory/add/`, {
                method: 'POST',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllSubcategory(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Update Subcategory Record
    const updateSubcategoryRecord = async (id, title, parent, subcategory, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('subcategory', subcategory);
            payload.append('title', title);
            payload.append('parent', parent);

            const response = await fetch(`${host}/api/subcategory/updatesubcategory/${id}`, {
                method: 'PUT',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllSubcategory(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }


    // Get all Subcategory data
    const getAllSubcategory = async (page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/subcategory/show/?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            setLoading(false);
            subcategoryData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Handle Per Rows Change
    const perRowsChange = async (newPerPage, page) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/subcategory/show/?page=${page}&limit=${newPerPage}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            setLoading(false);
            const json = await response.json()
            subcategoryData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Delete a note
    const deleteSubcategory = async (id, page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/subcategory/deletesubcategory/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            if (json.success) {
                setLoading(false);
                getAllSubcategory(page, limit);
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    return (
        <SubcategoryContext.Provider value={{ allSubcategory, loading, getAllSubcategory, deleteSubcategory, perRowsChange, addSubcategoryRecord, updateSubcategoryRecord }}>
            {props.children}
        </SubcategoryContext.Provider>
    )
}
export default SubcategoryState;