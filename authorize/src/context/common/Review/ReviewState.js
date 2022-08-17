import React, { useState } from "react";
import ReviewContext from "./reviewContext";
import swal from "sweetalert";

const ReviewState = (props) => {
    const [allReview, reviewData] = useState([])
    const [loading, setLoading] = useState(false);
    const host = process.env.REACT_APP_DB_HOST
    const token = localStorage.getItem('token');

    // Add Review Record
    const addReviewRecord = async (title, review_date, review_message, review, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('review', review);
            payload.append('title', title);
            payload.append('review_date', review_date);
            payload.append('review_message', review_message); 

            const response = await fetch(`${host}/api/review/add/`, {
                method: 'POST',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllReview(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Update Review Record
    const updateReviewRecord = async (id, title, review_date, review_message, review, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('review', review);
            payload.append('title', title);
            payload.append('review_date', review_date);
            payload.append('review_message', review_message); 

            const response = await fetch(`${host}/api/review/updatereview/${id}`, {
                method: 'PUT',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllReview(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }


    // Get all Review data
    const getAllReview = async (page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/review/show/?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            setLoading(false);
            reviewData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Handle Per Rows Change
    const perRowsChange = async (newPerPage, page) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/review/show/?page=${page}&limit=${newPerPage}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            setLoading(false);
            const json = await response.json()
            reviewData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Delete a note
    const deleteReview = async (id, page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/review/deletereview/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            if (json.success) {
                setLoading(false);
                getAllReview(page, limit);
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    return (
        <ReviewContext.Provider value={{ allReview, loading, getAllReview, deleteReview, perRowsChange, addReviewRecord, updateReviewRecord }}>
            {props.children}
        </ReviewContext.Provider>
    )
}
export default ReviewState;