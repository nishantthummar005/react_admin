import React, { useState } from "react";
import TermsContext from "./termsContext";
import swal from "sweetalert";

const TermsState = (props) => {
    const [allTerms, termsData] = useState([])
    const [loading, setLoading] = useState(false);
    const host = process.env.REACT_APP_DB_HOST
    const token = localStorage.getItem('token');

    // Add Terms & Condition Record
    const addTermsRecord = async (terms, page, limit) => {
        try {
            const response = await fetch(`${host}/api/terms/add/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                body: JSON.stringify({ terms })
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
            } else {
                swal("Oops!", json.error);
            }
            getAllTerms(page, limit);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Update Terms & Condition Record
    const updateTermsRecord = async (id, term, page, limit) => {
        try {
            const response = await fetch(`${host}/api/terms/updateterms/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                body: JSON.stringify({ term })
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
            } else {
                swal("Oops!", json.error);
            }
            getAllTerms(page, limit);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }


    // Get all Terms & Condition data
    const getAllTerms = async (page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/terms/show/?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            setLoading(false);
            termsData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Handle Per Rows Change
    const perRowsChange = async (newPerPage, page) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/terms/show/?page=${page}&limit=${newPerPage}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            setLoading(false);
            const json = await response.json()
            termsData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Delete a note
    const deleteTerms = async (id, page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/terms/deleteterms/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            if (json.success) {
                setLoading(false);
                getAllTerms(page, limit);
            } else {
                swal("Oops!", json.error);
            } 
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    return (
        <TermsContext.Provider value={{ allTerms, loading, getAllTerms, deleteTerms, perRowsChange, addTermsRecord, updateTermsRecord }}>
            {props.children}
        </TermsContext.Provider>
    )
}
export default TermsState;