import React, { useEffect, useContext, useState } from 'react'
import "react-data-table-component-extensions/dist/index.css";
import Breadcrumb from "../../../components/admin/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import swal from "sweetalert";
import videoContext from '../../../context/common/Video/videoContext';
import adminContext from '../../../context/auth/adminContext';
import UpdateData from './UpdateData';
import ShowData from './ShowData';
import { useForm } from 'react-hook-form';

const Video = () => {
    const [getVideoType, setVideoType] = useState('online');
    const [videoAllData, setvideoAllData] = useState([]);
    const [getEditData, setEditData] = useState([{ _id: '', video: '' }]);
    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(5);
    const context = useContext(videoContext);
    const { allVideo, getAllVideo, deleteVideo, addVideoRecord } = context;
    const admincontext = useContext(adminContext);
    const { checkAuthToken } = admincontext;
    const [getProfileVideo, setProfileVideo] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();  // validation for login form    

    let location = useLocation().pathname;
    let locationSplit = location.split("/");
    let pageType = locationSplit[3];
    document.title = "Video — " + process.env.REACT_APP_NAME;

    useEffect(() => {
        checkAuthToken()  // check whether token has been created or not (if not then redirect to login) 
        getAllVideo(page, limit);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        getVideoList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allVideo]);

    /* ************************************************
                    FETCH ALL RECORDS  // Fetch all video us data through axios API
    ***********************************************/
    const getVideoList = () => {
        setvideoAllData(allVideo);
    }

    /* ************************************************
                    INSERT RECORDS   // submit for inserting video us data
    ***********************************************/
    const onSubmit = data => {
        const { title, video_url } = data;
        addVideoRecord(title.trim(), getVideoType, (getVideoType === 'upload') ? ((getProfileVideo) ? getProfileVideo : '') : video_url.trim(), page, limit); // form submit and insert record    
        reset({ title: '', video_url: '' });
        setProfileVideo('');
        setVideoType('online');
    }

    /* ************************************************
                        UPDATE RECORDS   // get updatable item data through axios API
        ***********************************************/
    const getEditItem = async (id) => {
        const host = process.env.REACT_APP_DB_HOST
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${host}/api/video/getedititem/${id}`, {
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
        let newArr = { _id: getEditData._id, video: e.target.value };   // assign value to the usestate  
        setEditData(newArr);
    }

    // Handle VideoType
    const handleVideoType = (e) => {
        setVideoType(e.target.value);
    }

    // Handle Profile Photo 
    const handleProfileVideo = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setProfileVideo(e.target.files[0]);
        }
    }


    return (
        <>
            <div className="main-content">
                <section className="section">
                    <Breadcrumb title="Video" />
                    <div className="section-body">
                        {(pageType === "add") ? (
                            <div>
                                <div className="row">
                                    <div className="col-6">
                                        <h2 className="section-title mt-0">Add Video</h2>
                                        <p className="section-lead">
                                            Change information Video yourself on this page.
                                        </p>
                                    </div>
                                    <div className="col-6 text-right">
                                        <Link to="/clientPages/video/show" className="btn btn-info">Show Video</Link>
                                    </div>
                                </div>
                                <div className="row mt-sm-4">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="card card-primary">
                                            <div className="card-body">
                                                <form method="post" noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off" encType='multipart/form-data'>
                                                    <div className="row">
                                                        <div className="form-group col-md-6 col-6">
                                                            <label><span className='text-danger'>*</span>Video Title</label>
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
                                                        <div className="form-group col-md-6 col-6">
                                                            <label><span className='text-danger'>*</span>Video Type</label>
                                                            <br />
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    id="video_type"
                                                                    name="video_type"
                                                                    value="online"
                                                                    defaultChecked={getVideoType === 'online'}
                                                                    tabIndex={2}
                                                                    onClick={handleVideoType}
                                                                    className="vertical-center"
                                                                /> Online
                                                            </label>
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    id="video_type"
                                                                    name="video_type"
                                                                    value="upload"
                                                                    defaultChecked={getVideoType === 'upload'}
                                                                    tabIndex={3}
                                                                    onClick={handleVideoType}
                                                                    className="vertical-center ml-10"
                                                                /> Upload
                                                            </label>
                                                        </div>
                                                        <div className="form-group col-md-12 col-12">
                                                            {getVideoType === 'upload' ? (
                                                                <>
                                                                    <label><span className='text-danger'>*</span>Upload Video</label>
                                                                    <input
                                                                        type="file"
                                                                        accept=".mp4,.mov,.wmv,.avi,.mkv,.webm"
                                                                        id="profile"
                                                                        name="profile"
                                                                        tabIndex={4}
                                                                        className="form-control"
                                                                        {...register("profile", {
                                                                            required: true
                                                                        })}
                                                                        onChange={handleProfileVideo}
                                                                    />
                                                                    {errors.profile && errors.profile.type === "required" && (
                                                                        <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                                                                    )} 
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <label><span className='text-danger'>*</span>Enter Video URL</label>
                                                                    <input
                                                                        type="url"
                                                                        id="video_url"
                                                                        name="video_url"
                                                                        tabIndex={1}
                                                                        className="form-control"
                                                                        {...register("video_url", {
                                                                            required: true
                                                                        })}
                                                                    />
                                                                    {errors.video_url && errors.video_url.type === "required" && (
                                                                        <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                                                                    )}
                                                                </>
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
                            <ShowData getEditItem={getEditItem} page={page} setPage={setPage} limit={limit} setlimit={setlimit} videoAllData={videoAllData} deleteVideo={deleteVideo} />
                        )}
                    </div>
                </section>
            </div>
            <UpdateData getEditData={getEditData} setEditTextValue={setEditTextValue} page={page} limit={limit} />
        </>
    )
}

export default Video;