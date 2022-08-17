import React, { useState } from "react";
import AdminContext from "./adminContext";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

const AdminState = (props) => {
    const history = useHistory();
    const [adminData, setAdminData] = useState([])
    const token = localStorage.getItem('token');
    const host = process.env.REACT_APP_DB_HOST

    // check whether token has been created or not (if not then redirect to login) 
    const checkAuthToken = () => {
        if (!token) {
            history.push('/auth/login');
        }
    }

    // Admin Logout 
    const logout = () => {
        localStorage.removeItem('token');
        history.push('/auth/login');
    }

    // Do admin login
    const doAdminLogin = async (email, password) => {
        try {
            const response = await fetch(`${host}/auth/admin/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, password: password })
            });
            const json = await response.json()
            if (json.success) {
                localStorage.setItem('token', json.authToken);
                window.location.href = '/'  // redirect to dashboard - must reload the page for [sidemenu access]
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Something went wrong while login! ' + error.message);
        }
    }

    // Get Data of admin
    const getAdminData = async () => {
        try {
            const response = await fetch(`${host}/auth/admin/getadmin`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            if (json.success) {
                setAdminData(json.admin);
            } else {
                swal("Oops!", json.error);
                window.location.href = '/auth/login'  // redirect to dashboard - must reload the page for [sidemenu access]

            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Change Password
    const changePassword = async (password, new_password) => {
        try {
            const response = await fetch(`${host}/auth/admin/update/${adminData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                body: JSON.stringify({ password, new_password })
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Change Admin Info
    const changeAdminInfo = async (project_name, admin_name, phone, address, bio, profile) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            if (profile) {
                payload.append('profile', profile);
            }
            payload.append('project_name', project_name);
            payload.append('admin_name', admin_name);
            payload.append('phone', phone);
            payload.append('address', address);
            payload.append('bio', bio);

            const response = await fetch(`${host}/auth/admin/updateinfo/${adminData._id}`, {
                method: 'PUT',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAdminData()
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    return (
        <AdminContext.Provider value={{ adminData, checkAuthToken, logout, getAdminData, changePassword, doAdminLogin, changeAdminInfo }}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminState;