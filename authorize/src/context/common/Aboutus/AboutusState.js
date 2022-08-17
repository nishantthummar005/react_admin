import React, { useState } from "react";
import AboutusContext from "./aboutusContext";
import swal from "sweetalert";
require('dotenv').config();

const AboutusState = (props) => {
    const [allAbout, aboutusData] = useState([])
    const [loading, setLoading] = useState(false);
    const host = process.env.REACT_APP_DB_HOST
    const token = localStorage.getItem('token');

    // Add About us Record
    const addAboutusRecord = async (aboutus, page, limit) => {
        try {
            const response = await fetch(`${host}/api/aboutus/add/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                body: JSON.stringify({ aboutus })
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
            } else {
                swal("Oops!", json.error);
            }
            getAllAboutus(page, limit);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Update About us Record
    const updateAboutusRecord = async (id, about, page, limit) => {
        try {
            const response = await fetch(`${host}/api/aboutus/updateaboutus/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                body: JSON.stringify({ about })
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
            } else {
                swal("Oops!", json.error);
            }
            getAllAboutus(page, limit);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }


    // Get all About us data
    const getAllAboutus = async (page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/aboutus/show/?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json() 
            setLoading(false);
            aboutusData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Handle Per Rows Change
    const perRowsChange = async (newPerPage, page) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/aboutus/show/?page=${page}&limit=${newPerPage}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            setLoading(false);
            const json = await response.json()
            aboutusData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Delete a note
    const deleteAboutus = async (id, page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/aboutus/deleteaboutus/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            if (json.success) { 
                setLoading(false);
                getAllAboutus(page, limit);
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    return (
        <AboutusContext.Provider value={{ allAbout, loading, getAllAboutus, deleteAboutus, perRowsChange, addAboutusRecord, updateAboutusRecord }}>
            {props.children}
        </AboutusContext.Provider>
    )
}
export default AboutusState;