import React, { useState } from "react";
import ClientContext from "./clientContext";
import swal from "sweetalert";
require('dotenv').config();

const ClientState = (props) => {
    const [allClient, clientData] = useState([])
    const [loading, setLoading] = useState(false);
    const host = process.env.REACT_APP_DB_HOST
    const token = localStorage.getItem('token');

    // Add Client Record
    const addClientRecord = async (title, client, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('client', client);
            payload.append('title', title); 

            const response = await fetch(`${host}/api/client/add/`, {
                method: 'POST',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllClient(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Update Client Record
    const updateClientRecord = async (id, title, client, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('client', client);
            payload.append('title', title); 

            const response = await fetch(`${host}/api/client/updateclient/${id}`, {
                method: 'PUT',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllClient(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }


    // Get all Client data
    const getAllClient = async (page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/client/show/?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            setLoading(false);
            clientData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Handle Per Rows Change
    const perRowsChange = async (newPerPage, page) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/client/show/?page=${page}&limit=${newPerPage}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            setLoading(false);
            const json = await response.json()
            clientData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Delete a note
    const deleteClient = async (id, page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/client/deleteclient/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            if (json.success) {
                setLoading(false);
                getAllClient(page, limit);
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    return (
        <ClientContext.Provider value={{ allClient, loading, getAllClient, deleteClient, perRowsChange, addClientRecord, updateClientRecord }}>
            {props.children}
        </ClientContext.Provider>
    )
}
export default ClientState;