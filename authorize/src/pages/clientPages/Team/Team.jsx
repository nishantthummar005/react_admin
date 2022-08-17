import React, { useEffect, useContext, useState } from 'react'
import "react-data-table-component-extensions/dist/index.css";
import Breadcrumb from "../../../components/admin/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import swal from "sweetalert";
import teamContext from '../../../context/common/Team/teamContext';
import adminContext from '../../../context/auth/adminContext';
import UpdateData from './UpdateData';
import ShowData from './ShowData';
import { useForm } from 'react-hook-form';
require('dotenv').config();

const Team = () => {
    const [teamAllData, setteamAllData] = useState([]);
    const [getEditData, setEditData] = useState([{ _id: '', team: '' }]);
    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(5);
    const context = useContext(teamContext);
    const { allTeam, getAllTeam, deleteTeam, addTeamRecord } = context;
    const admincontext = useContext(adminContext);
    const { checkAuthToken } = admincontext;
    const [getProfilePhoto, setProfilePhoto] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();  // validation for login form    

    let location = useLocation().pathname;
    let locationSplit = location.split("/");
    let pageType = locationSplit[3];
    document.title = "Team — " + process.env.REACT_APP_NAME;

    useEffect(() => {
        checkAuthToken()  // check whether token has been created or not (if not then redirect to login) 
        getAllTeam(page, limit);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        getTeamList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allTeam]);

    /* ************************************************
                    FETCH ALL RECORDS  // Fetch all team us data through axios API
    ***********************************************/
    const getTeamList = () => {
        setteamAllData(allTeam);
    }

    /* ************************************************
                    INSERT RECORDS   // submit for inserting team us data
    ***********************************************/
    const onSubmit = data => {
        const { title, email, phone, facebook, instagram, twitter, linkedin } = data;
        addTeamRecord(title.trim(), email.trim(), phone.trim(), facebook.trim(), instagram.trim(), twitter.trim(), linkedin.trim(), (getProfilePhoto) ? getProfilePhoto : '', page, limit); // form submit and insert record    
        reset({ title: '', email: '', phone: '', facebook: '', instagram: '', twitter: '', linkedin: '' });
        setProfilePhoto('');
    }

    /* ************************************************
                        UPDATE RECORDS   // get updatable item data through axios API
        ***********************************************/
    const getEditItem = async (id) => {
        const host = process.env.REACT_APP_DB_HOST
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${host}/api/team/getedititem/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                }
            });
            const json = await response.json()
            setEditData(json);
        } catch (error) {
            swal("Oops! Server Error", error.message, "danger");
        }
    }

    // call when textarea value changed in modal
    const setEditTextValue = (e) => {
        let newArr = { _id: getEditData._id, team: e.target.value };   // assign value to the usestate  
        setEditData(newArr);
    }

    // Handle Profile Photo 
    const handleProfilePhoto = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setProfilePhoto(e.target.files[0]);
        }
    }

    const removeSelectedImage = () => {
        setProfilePhoto();
    };

    return (
        <>
            <div className="main-content">
                <section className="section">
                    <Breadcrumb title="Team" />
                    <div className="section-body">
                        {(pageType === "add") ? (
                            <div>
                                <div className="row">
                                    <div className="col-6">
                                        <h2 className="section-title mt-0">Add Team</h2>
                                        <p className="section-lead">
                                            Change information Team yourself on this page.
                                        </p>
                                    </div>
                                    <div className="col-6 text-right">
                                        <Link to="/clientPages/team/show" className="btn btn-info">Show Team</Link>
                                    </div>
                                </div>
                                <div className="row mt-sm-4">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="card card-primary">
                                            <div className="card-body">
                                                <form method="post" noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off" encType='multipart/form-data'>
                                                    <div className="row">
                                                        <div className="form-group col-md-4 col-4">
                                                            <label><span className='text-danger'>*</span>Title</label>
                                                            <input
                                                                type="text"
                                                                id="title"
                                                                name="title"
                                                                tabIndex={1}
                                                                className="form-control"
                                                                {...register("title", {
                                                                    required: true
                                                                })}
                                                            />
                                                            {errors.title && errors.title.type === "required" && (
                                                                <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                                                            )}
                                                        </div>
                                                        <div className="form-group col-md-4 col-4">
                                                            <label><span className='text-danger'>*</span>Email</label>
                                                            <input
                                                                type="email"
                                                                id="email"
                                                                name="email"
                                                                tabIndex={1}
                                                                className="form-control"
                                                                {...register('email', {
                                                                    required: true,
                                                                    pattern: /\S+@\S+\.\S+/
                                                                })}
                                                            />
                                                            {errors.email && errors.email.type === "required" && (
                                                                <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                                                            )}
                                                            {errors.email && errors.email.type === "pattern" && (
                                                                <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">Enter valid email!</span>
                                                            )}
                                                        </div>
                                                        <div className="form-group col-md-4 col-4">
                                                            <label><span className='text-danger'>*</span>Phone</label>
                                                            <input
                                                                type="text"
                                                                id="phone"
                                                                name="phone"
                                                                maxLength={12}
                                                                tabIndex={1}
                                                                className="form-control"
                                                                {...register("phone", {
                                                                    required: true,
                                                                    minLength: 10,
                                                                    pattern: /^(0|[1-9]\d*)(\.\d+)?$/
                                                                })}
                                                            />
                                                            {errors.phone && errors.phone.type === "required" && (
                                                                <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                                                            )}
                                                            {errors.phone && errors.phone.type === "minLength" && (
                                                                <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">Enter minimum 10 digit!</span>
                                                            )}
                                                            {errors.phone && errors.phone.type === "pattern" && (
                                                                <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">Enter valid phone number!</span>
                                                            )}
                                                        </div>
                                                        <div className="form-group col-md-4 col-4">
                                                            <label>Facebook</label>
                                                            <input
                                                                type="text"
                                                                id="facebook"
                                                                name="facebook"
                                                                tabIndex={1}
                                                                className="form-control"
                                                                {...register("facebook", {
                                                                    required: false
                                                                })}
                                                            />
                                                            {errors.facebook && errors.facebook.type === "required" && (
                                                                <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                                                            )}
                                                        </div>
                                                        <div className="form-group col-md-4 col-4">
                                                            <label>Instagram</label>
                                                            <input
                                                                type="text"
                                                                id="instagram"
                                                                name="instagram"
                                                                tabIndex={1}
                                                                className="form-control"
                                                                {...register("instagram", {
                                                                    required: false
                                                                })}
                                                            />
                                                            {errors.instagram && errors.instagram.type === "required" && (
                                                                <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                                                            )}
                                                        </div>
                                                        <div className="form-group col-md-4 col-4">
                                                            <label>Twitter</label>
                                                            <input
                                                                type="text"
                                                                id="twitter"
                                                                name="twitter"
                                                                tabIndex={1}
                                                                className="form-control"
                                                                {...register("twitter", {
                                                                    required: false
                                                                })}
                                                            />
                                                            {errors.twitter && errors.twitter.type === "required" && (
                                                                <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                                                            )}
                                                        </div>
                                                        <div className="form-group col-md-4 col-4">
                                                            <label>Linkedin</label>
                                                            <input
                                                                type="text"
                                                                id="linkedin"
                                                                name="linkedin"
                                                                tabIndex={1}
                                                                className="form-control"
                                                                {...register("linkedin", {
                                                                    required: false
                                                                })}
                                                            />
                                                            {errors.linkedin && errors.linkedin.type === "required" && (
                                                                <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                                                            )}
                                                        </div>
                                                        <div className="form-group col-md-4 col-4">
                                                            <label>Photo</label>
                                                            <input
                                                                type="file"
                                                                accept=".png, .jpg, .jpeg"
                                                                id="profile"
                                                                name="profile"
                                                                tabIndex={3}
                                                                className="form-control"
                                                                {...register("profile", {
                                                                    required: false
                                                                })}
                                                                onChange={handleProfilePhoto}
                                                            />
                                                            {errors.profile && errors.profile.type === "required" && (
                                                                <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                                                            )}
                                                            {getProfilePhoto && (
                                                                <div>
                                                                    <img
                                                                        src={URL.createObjectURL(getProfilePhoto)}
                                                                        alt="Thumb"
                                                                        width={70} height={70} className={'mt-20 vertical-bottom'}
                                                                    />
                                                                    <button className='btn btn-danger btn-sm ml-10' onClick={removeSelectedImage}>
                                                                        Remove This Image
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <button className="btn btn-primary btn-md btn-block" tabIndex={4}>
                                                            Save
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <ShowData getEditItem={getEditItem} page={page} setPage={setPage} limit={limit} setlimit={setlimit} teamAllData={teamAllData} deleteTeam={deleteTeam} />
                        )}
                    </div>
                </section>
            </div>
            <UpdateData getEditData={getEditData} setEditTextValue={setEditTextValue} page={page} limit={limit} />
        </>
    )
}

export default Team;