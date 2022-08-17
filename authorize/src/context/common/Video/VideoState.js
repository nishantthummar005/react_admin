import React, { useState } from "react";
import VideoContext from "./videoContext";
import swal from "sweetalert";
require('dotenv').config();

const VideoState = (props) => {
    const [allVideo, videoData] = useState([])
    const [loading, setLoading] = useState(false);
    const host = process.env.REACT_APP_DB_HOST
    const token = localStorage.getItem('token');

    // Add Video Record
    const addVideoRecord = async (title, type, video, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('video', video);
            payload.append('title', title);
            payload.append('type', type);

            const response = await fetch(`${host}/api/video/add/`, {
                method: 'POST',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllVideo(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Update Video Record
    const updateVideoRecord = async (id, title, type, video, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('video', video);
            payload.append('title', title);
            payload.append('type', type);

            const response = await fetch(`${host}/api/video/updatevideo/${id}`, {
                method: 'PUT',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllVideo(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }


    // Get all Video data
    const getAllVideo = async (page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/video/show/?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            setLoading(false);
            videoData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Handle Per Rows Change
    const perRowsChange = async (newPerPage, page) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/video/show/?page=${page}&limit=${newPerPage}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            setLoading(false);
            const json = await response.json()
            videoData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Delete a note
    const deleteVideo = async (id, page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/video/deletevideo/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            if (json.success) {
                setLoading(false);
                getAllVideo(page, limit);
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    return (
        <VideoContext.Provider value={{ allVideo, loading, getAllVideo, deleteVideo, perRowsChange, addVideoRecord, updateVideoRecord }}>
            {props.children}
        </VideoContext.Provider>
    )
}
export default VideoState;