import React, { useState } from "react";
import ContactusContext from "./contactusContext";
import swal from "sweetalert"; 
require('dotenv').config();

const ContactusState = (props) => {
    const [allContact, contactusData] = useState([])
    const [loading, setLoading] = useState(false); 
    const host = process.env.REACT_APP_DB_HOST
    const token = localStorage.getItem('token'); 

    // Add Contact us Record
    const addContactusRecord = async (contactus, page, limit) => { 
        try {
            await fetch(`${host}/api/contactus/add/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                body: JSON.stringify({ contactus })
            });
            swal("Good job!", "Record Inserted.", "success");
            getAllContactus(page, limit);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Get all Contact us data
    const getAllContactus = async (page, limit) => { 
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/contactus/show/?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            setLoading(false);
            contactusData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Handle Per Rows Change
    const perRowsChange = async (newPerPage, page) => { 
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/contactus/show/?page=${page}&limit=${newPerPage}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            setLoading(false);
            const json = await response.json()
            contactusData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Delete a note
    const deleteContactus = async (id, page, limit) => { 
        try {
            setLoading(true);
            await fetch(`${host}/api/contactus/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            setLoading(false);
            getAllContactus(page, limit);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    return (
        <ContactusContext.Provider value={{ allContact, loading, getAllContactus, deleteContactus, perRowsChange, addContactusRecord }}>
            {props.children}
        </ContactusContext.Provider>
    )
}
export default ContactusState;