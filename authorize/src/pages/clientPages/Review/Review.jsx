import React, { useEffect, useContext, useState } from 'react'
import "react-data-table-component-extensions/dist/index.css";
import Breadcrumb from "../../../components/admin/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import swal from "sweetalert";
import reviewContext from '../../../context/common/Review/reviewContext';
import adminContext from '../../../context/auth/adminContext';
import UpdateData from './UpdateData';
import ShowData from './ShowData';
import { useForm } from 'react-hook-form';
require('dotenv').config();

const Review = () => {
    const [reviewAllData, setreviewAllData] = useState([]);
    const [getEditData, setEditData] = useState([{ _id: '', review: '' }]);
    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(5);
    const context = useContext(reviewContext);
    const { allReview, getAllReview, deleteReview, addReviewRecord } = context;
    const admincontext = useContext(adminContext);
    const { checkAuthToken } = admincontext;
    const [getProfilePhoto, setProfilePhoto] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();  // validation for login form    

    let location = useLocation().pathname;
    let locationSplit = location.split("/");
    let pageType = locationSplit[3];
    document.title = "Review — " + process.env.REACT_APP_NAME;

    useEffect(() => {
        checkAuthToken()  // check whether token has been created or not (if not then redirect to login) 
        getAllReview(page, limit);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        getReviewList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allReview]);

    /* ************************************************
                    FETCH ALL RECORDS  // Fetch all review us data through axios API
    ***********************************************/
    const getReviewList = () => {
        setreviewAllData(allReview);
    }

    /* ************************************************
                    INSERT RECORDS   // submit for inserting review us data
    ***********************************************/
    const onSubmit = data => {
        const { title, review_date, review_message } = data;
        addReviewRecord(title, review_date, review_message, (getProfilePhoto) ? getProfilePhoto : '', page, limit); // form submit and insert record    
        reset({ title: '', review_date: '', review_message: '' });
        setProfilePhoto('');
    }

    /* ************************************************
                        UPDATE RECORDS   // get updatable item data through axios API
        ***********************************************/
    const getEditItem = async (id) => {
        const host = process.env.REACT_APP_DB_HOST
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${host}/api/review/getedititem/${id}`, {
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
        let newArr = { _id: getEditData._id, review: e.target.value };   // assign value to the usestate  
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
                    <Breadcrumb title="Review" />
                    <div className="section-body">
                        {(pageType === "add") ? (
                            <div>
                                <div className="row">
                                    <div className="col-6">
                                        <h2 className="section-title mt-0">Add Review</h2>
                                        <p className="section-lead">
                                            Change information Review yourself on this page.
                                        </p>
                                    </div>
                                    <div className="col-6 text-right">
                                        <Link to="/clientPages/review/show" className="btn btn-info">Show Review</Link>
                                    </div>
                                </div>
                                <div className="row mt-sm-4">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="card card-primary">
                                            <div className="card-body">
                                                <form method="post" noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off" encType='multipart/form-data'>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group col-md-12 col-12">
                                                                <label><span className='text-danger'>*</span>Username</label>
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
                                                            <div className="form-group col-md-12 col-12">
                                                                <label><span className='text-danger'>*</span>Review Message </label>
                                                                <textarea
                                                                    id="review_message"
                                                                    name="review_message"
                                                                    tabIndex={2}
                                                                    className="form-control"
                                                                    {...register("review_message", {
                                                                        required: true
                                                                    })}
                                                                ></textarea>
                                                                {errors.review_message && errors.review_message.type === "required" && (
                                                                    <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-group col-md-12 col-12">
                                                                <label><span className='text-danger'>*</span>Review Date</label>
                                                                <input
                                                                    type="date"
                                                                    id="review_date"
                                                                    name="review_date"
                                                                    tabIndex={1}
                                                                    maxLength={70}
                                                                    className="form-control"
                                                                    {...register("review_date", {
                                                                        required: true
                                                                    })}
                                                                />
                                                                {errors.review_date && errors.review_date.type === "required" && (
                                                                    <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                                                                )}
                                                            </div>
                                                            <div className="form-group col-md-12 col-12">
                                                                <label>User Photo</label>
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
                            <ShowData getEditItem={getEditItem} page={page} setPage={setPage} limit={limit} setlimit={setlimit} reviewAllData={reviewAllData} deleteReview={deleteReview} />
                        )}
                    </div>
                </section>
            </div>
            <UpdateData getEditData={getEditData} setEditTextValue={setEditTextValue} page={page} limit={limit} />
        </>
    )
}

export default Review;