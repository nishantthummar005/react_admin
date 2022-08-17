import React, { useState } from "react";
import BannerContext from "./bannerContext";
import swal from "sweetalert";

const BannerState = (props) => {
    const [allBanner, bannerData] = useState([])
    const [loading, setLoading] = useState(false);
    const host = process.env.REACT_APP_DB_HOST
    const token = localStorage.getItem('token');

    // Add Banner Record
    const addBannerRecord = async (title, subtitle, banner, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('banner', banner);
            payload.append('title', title);
            payload.append('subtitle', subtitle);

            const response = await fetch(`${host}/api/banner/add/`, {
                method: 'POST',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllBanner(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Update Banner Record
    const updateBannerRecord = async (id, title, subtitle, banner, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('banner', banner);
            payload.append('title', title);
            payload.append('subtitle', subtitle);

            const response = await fetch(`${host}/api/banner/updatebanner/${id}`, {
                method: 'PUT',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllBanner(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }


    // Get all Banner data
    const getAllBanner = async (page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/banner/show/?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            setLoading(false);
            bannerData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Handle Per Rows Change
    const perRowsChange = async (newPerPage, page) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/banner/show/?page=${page}&limit=${newPerPage}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            setLoading(false);
            const json = await response.json()
            bannerData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Delete a note
    const deleteBanner = async (id, page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/banner/deletebanner/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            if (json.success) {
                setLoading(false);
                getAllBanner(page, limit);
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    return (
        <BannerContext.Provider value={{ allBanner, loading, getAllBanner, deleteBanner, perRowsChange, addBannerRecord, updateBannerRecord }}>
            {props.children}
        </BannerContext.Provider>
    )
}
export default BannerState;