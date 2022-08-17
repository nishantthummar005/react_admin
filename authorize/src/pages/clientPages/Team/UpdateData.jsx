import React, { useContext, useState, useEffect } from "react";
import teamContext from '../../../context/common/Team/teamContext';
import $ from 'jquery';
import { useForm } from 'react-hook-form';

const UpdateData = (props) => {
    const { getEditData, page, limit } = props;
    const context = useContext(teamContext);
    const { updateTeamRecord } = context;
    const [getProfilePhoto, setProfilePhoto] = useState('');
    const [user, setUser] = useState(null); // user state for form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();  // validation for form  

    // set default value in input from DB using reset and settimeout
    useEffect(() => {
        setTimeout(() => setUser({ title: getEditData.title, email: getEditData.email, phone: getEditData.phone, facebook: getEditData.facebook, instagram: getEditData.instagram, twitter: getEditData.twitter, linkedin: getEditData.linkedin }), 1000); // simulate async api call with set timeout 
    }, [getEditData]);

    useEffect(() => {
        // reset form with user data
        setProfilePhoto();  // clear selected photos in image
        reset(user);
        // eslint-disable-next-line
    }, [user]);

    /* ************************************************
    INSERT RECORDS   // submit for inserting team us data
    ***********************************************/
    const onSubmit = data => {
        const { title, email, phone, facebook, instagram, twitter, linkedin } = data;
        updateTeamRecord(getEditData._id, title.trim(), email.trim(), phone.trim(), facebook.trim(), instagram.trim(), twitter.trim(), linkedin.trim(), (getProfilePhoto) ? getProfilePhoto : getEditData.path, page, limit); // form submit and update record     
        reset({ title: '', email: '', phone: '', facebook: '', instagram: '', twitter: '', linkedin: '' });
        setProfilePhoto();  // clear selected photos in image
        $('#updateModal').modal('toggle');   // close modal
    }

    // Handle Profile Photo 
    const handleProfilePhoto = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setProfilePhoto(e.target.files[0]);
        }
    }

    return (
        <>
            <div className="modal fade" id="updateModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Data</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form name='editForm' id="editForm" method="post" noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off" encType='multipart/form-data'>
                                <div className="row">
                                    <div className="form-group col-md-4 col-4">
                                        <label><span className='text-danger'>*</span>Title</label>
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
                                    <div className="form-group col-md-4 col-4">
                                        <label><span className='text-danger'>*</span>Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            defaultValue={getEditData.email}
                                            tabIndex={1}
                                            className="form-control"
                                            {...register("email", {
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
                                            defaultValue={getEditData.phone}
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
                                            defaultValue={getEditData.facebook}
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
                                            defaultValue={getEditData.instagram}
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
                                            defaultValue={getEditData.twitter}
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
                                            defaultValue={getEditData.linkedin}
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
                                            onChange={handleProfilePhoto}
                                        />
                                        {(getProfilePhoto) ? (
                                            <>
                                                <img
                                                    src={URL.createObjectURL(getProfilePhoto)}
                                                    alt="Thumb"
                                                    width={70} height={70} className={'mt-20 vertical-bottom'}
                                                />
                                            </>
                                        ) : (
                                            <img src={"../../" + ((getEditData.path) ? getEditData.path : 'assets/img/404.png')} width={70} height={70} alt={getEditData.title} className={'mt-20'} />
                                        )}
                                    </div>
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