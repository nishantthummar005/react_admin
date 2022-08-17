import React, { useState } from "react";
import TeamContext from "./teamContext";
import swal from "sweetalert";
require('dotenv').config();

const TeamState = (props) => {
    const [allTeam, teamData] = useState([])
    const [loading, setLoading] = useState(false);
    const host = process.env.REACT_APP_DB_HOST
    const token = localStorage.getItem('token');

    // Add Team Record
    const addTeamRecord = async (title, email, phone, facebook, instagram, twitter, linkedin, team, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('team', (team) ? team : '');
            payload.append('title', title);
            payload.append('email', email);
            payload.append('phone', phone);
            payload.append('facebook', facebook);
            payload.append('instagram', instagram);
            payload.append('twitter', twitter);
            payload.append('linkedin', linkedin);

            const response = await fetch(`${host}/api/team/add/`, {
                method: 'POST',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllTeam(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Update Team Record
    const updateTeamRecord = async (id, title, email, phone, facebook, instagram, twitter, linkedin, team, page, limit) => {
        try {
            // ** Do not pass json content type while uploading file in api
            const payload = new FormData();
            payload.append('team', (team) ? team : '');
            payload.append('title', title);
            payload.append('email', email);
            payload.append('phone', phone);
            payload.append('facebook', facebook);
            payload.append('instagram', instagram);
            payload.append('twitter', twitter);
            payload.append('linkedin', linkedin);

            const response = await fetch(`${host}/api/team/updateteam/${id}`, {
                method: 'PUT',
                headers: {
                    'auth-token': token
                },
                body: payload
            });
            const json = await response.json()
            if (json.success) {
                swal("Good job!", json.message, "success");
                getAllTeam(page, limit)
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }


    // Get all Team data
    const getAllTeam = async (page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/team/show/?page=${page}&limit=${limit}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            setLoading(false);
            teamData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Handle Per Rows Change
    const perRowsChange = async (newPerPage, page) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/team/show/?page=${page}&limit=${newPerPage}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            setLoading(false);
            const json = await response.json()
            teamData(json);
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    // Delete a note
    const deleteTeam = async (id, page, limit) => {
        try {
            setLoading(true);
            const response = await fetch(`${host}/api/team/deleteteam/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            if (json.success) {
                setLoading(false);
                getAllTeam(page, limit);
            } else {
                swal("Oops!", json.error);
            }
        } catch (error) {
            console.log('Server Error : ' + error.message);
        }
    }

    return (
        <TeamContext.Provider value={{ allTeam, loading, getAllTeam, deleteTeam, perRowsChange, addTeamRecord, updateTeamRecord }}>
            {props.children}
        </TeamContext.Provider>
    )
}
export default TeamState;