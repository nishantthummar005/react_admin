import React, { useContext, useState, useEffect } from "react";
import videoContext from '../../../context/common/Video/videoContext';
import $ from 'jquery';
import { useForm } from 'react-hook-form';

const UpdateData = (props) => {
    const [getVideoType, setVideoType] = useState('');
    const { getEditData, page, limit } = props;
    const context = useContext(videoContext);
    const { updateVideoRecord } = context;
    const [getProfileVideo, setProfileVideo] = useState('');
    const [user, setUser] = useState(null); // user state for form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();  // validation for form  

    // set default value in input from DB using reset and settimeout
    useEffect(() => {
        setVideoType(getEditData.type)
        setTimeout(() => setUser({ title: getEditData.title, video_url: getEditData.path }), 1000); // simulate async api call with set timeout 
    }, [getEditData]);

    useEffect(() => {
        // reset form with user data
        setProfileVideo();  // clear selected photos in image
        reset(user);
        // eslint-disable-next-line
    }, [user]);

    /* ************************************************
    INSERT RECORDS   // submit for inserting video us data
    ***********************************************/
    const onSubmit = data => {
        const { title, video_url } = data;
        updateVideoRecord(getEditData._id, title.trim(), getVideoType, (getVideoType === 'upload') ? ((getProfileVideo) ? getProfileVideo : getEditData.path) : video_url.trim(), page, limit); // form submit and update record     
        reset({ title: '', video_url: '' });
        setProfileVideo();  // clear selected photos in image
        setVideoType('');
        $('#updateModal').modal('toggle');   // close modal
    }

    // Handle Profile Photo 
    const handleProfileVideo = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setProfileVideo(e.target.files[0]);
        }
    }

    return (
        <>
            <div className="modal fade" id="updateModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Data</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form name='editForm' id="editForm" method="post" noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off" encType='multipart/form-data'>
                                <div className="form-group col-md-12 col-12">
                                    <label><span className='text-danger'>*</span>Video Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        defaultValue={getEditData.title}
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
                                                    required: false
                                                })}
                                                onChange={handleProfileVideo}
                                            />
                                            {errors.profile && errors.profile.type === "required" && (
                                                <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                                            )}
                                            <video controls width='70%' autoPlay muted src={"../../" + ((getEditData.path) ? getEditData.path : 'assets/img/404.png')} className={'mt-20'} ></video>
                                        </>
                                    ) : (
                                        <>
                                            <label><span className='text-danger'>*</span>Enter Video URL</label>
                                            <input
                                                type="url"
                                                id="video_url"
                                                name="video_url"
                                                tabIndex={1}
                                                defaultValue={getEditData.path}
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
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
                            <button type="submit" form='editForm' disabled={!getEditData.title} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateData