import React, { useState } from "react";
import GalleryContext from "./galleryContext";
import swal from "sweetalert";

const GalleryState = (props) => {
    const [allGallery, galleryData] = useState([])
    const [loading, setLoading] = useState(false);
    const host = process.env.REACT_APP_DB_HOST
    const token = localStorage.getItem('token');

    // Add Gallery Record
    const addGalleryRecord = async (title, gallery, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('gallery', gallery);
            payload.append('title', title); 

            const response = await fetch(`${host}/api/gallery/add/`, {
                method: 'POST',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllGallery(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Update Gallery Record
    const updateGalleryRecord = async (id, title, gallery, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('gallery', gallery);
            payload.append('title', title); 

            const response = await fetch(`${host}/api/gallery/updategallery/${id}`, {
                method: 'PUT',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllGallery(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }


    // Get all Gallery data
    const getAllGallery = async (page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/gallery/show/?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            setLoading(false);
            galleryData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Handle Per Rows Change
    const perRowsChange = async (newPerPage, page) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/gallery/show/?page=${page}&limit=${newPerPage}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            setLoading(false);
            const json = await response.json()
            galleryData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Delete a note
    const deleteGallery = async (id, page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/gallery/deletegallery/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            if (json.success) {
                setLoading(false);
                getAllGallery(page, limit);
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    return (
        <GalleryContext.Provider value={{ allGallery, loading, getAllGallery, deleteGallery, perRowsChange, addGalleryRecord, updateGalleryRecord }}>
            {props.children}
        </GalleryContext.Provider>
    )
}
export default GalleryState;