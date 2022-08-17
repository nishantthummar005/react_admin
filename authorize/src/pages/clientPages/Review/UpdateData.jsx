import React, { useContext, useState, useEffect } from "react";
import reviewContext from '../../../context/common/Review/reviewContext';
import $ from 'jquery';
import { useForm } from 'react-hook-form';

const UpdateData = (props) => {
    const { getEditData, page, limit } = props;
    const context = useContext(reviewContext);
    const { updateReviewRecord } = context;
    const [getProfilePhoto, setProfilePhoto] = useState('');
    const [user, setUser] = useState(null); // user state for form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();  // validation for form  

    // set default value in input from DB using reset and settimeout
    useEffect(() => {
        setTimeout(() => setUser({ title: getEditData.title, meta_title: getEditData.meta_title, meta_keyword: getEditData.meta_keyword, meta_description: getEditData.meta_description }), 1000); // simulate async api call with set timeout 
    }, [getEditData]);

    useEffect(() => {
        // reset form with user data
        setProfilePhoto();  // clear selected photos in image
        reset(user);
        // eslint-disable-next-line
    }, [user]);

    /* ************************************************
    UPDATE RECORDS   // submit for update review  data
    ***********************************************/
    const onSubmit = data => {
        const { title, review_date, review_message } = data;
        updateReviewRecord(getEditData._id, title, review_date, review_message, (getProfilePhoto) ? getProfilePhoto : getEditData.path, page, limit); // form submit and update record      
        reset({ title: '', review_date: '', review_message: '' });
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
                <div className="modal-dialog modal-xl" role="document">
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
                                    <div className="col-6">
                                        <div className="form-group col-md-12 col-12">
                                            <label><span className='text-danger'>*</span>Username</label>
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
                                            <label><span className='text-danger'>*</span>Review Message </label>
                                            <textarea
                                                id="review_message"
                                                name="review_message"
                                                defaultValue={getEditData.review_message}
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
                                                defaultValue={getEditData.review_date}
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
                                            <label><span className='text-danger'>*</span>Review Photo</label>
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
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
                            <button type="submit" form='editForm' className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateData