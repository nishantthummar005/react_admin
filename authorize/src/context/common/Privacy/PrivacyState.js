import React, { useState } from "react";
import PrivacyContext from "./privacyContext";
import swal from "sweetalert";
require('dotenv').config();

const PrivacyState = (props) => {
    const [allPrivacy, privacyData] = useState([])
    const [loading, setLoading] = useState(false);
    const host = process.env.REACT_APP_DB_HOST
    const token = localStorage.getItem('token');

    // Add Privacy & Policy Record
    const addPrivacyRecord = async (privacy, page, limit) => {
        try {
            const response = await fetch(`${host}/api/privacy/add/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                body: JSON.stringify({ privacy })
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
            } else {
                swal("Oops!", json.error);
            }
            getAllPrivacy(page, limit);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Update Privacy & Policy Record
    const updatePrivacyRecord = async (id, privac, page, limit) => {
        try {
            const response = await fetch(`${host}/api/privacy/updateprivacy/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                body: JSON.stringify({ privac })
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
            } else {
                swal("Oops!", json.error);
            }
            getAllPrivacy(page, limit);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }


    // Get all Privacy & Policy data
    const getAllPrivacy = async (page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/privacy/show/?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            setLoading(false);
            privacyData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Handle Per Rows Change
    const perRowsChange = async (newPerPage, page) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/privacy/show/?page=${page}&limit=${newPerPage}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            setLoading(false);
            const json = await response.json()
            privacyData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Delete a note
    const deletePrivacy = async (id, page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/privacy/deleteprivacy/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            if (json.success) {
                setLoading(false);
                getAllPrivacy(page, limit);
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    return (
        <PrivacyContext.Provider value={{ allPrivacy, loading, getAllPrivacy, deletePrivacy, perRowsChange, addPrivacyRecord, updatePrivacyRecord }}>
            {props.children}
        </PrivacyContext.Provider>
    )
}
export default PrivacyState;