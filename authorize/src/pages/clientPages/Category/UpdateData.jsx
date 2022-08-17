import React, { useContext, useState, useEffect } from "react";
import categoryContext from '../../../context/common/Category/categoryContext';
import $ from 'jquery';
import { useForm } from 'react-hook-form';

const UpdateData = (props) => {
    const { getEditData, page, limit } = props;
    const context = useContext(categoryContext);
    const { updateCategoryRecord } = context;
    const [getProfilePhoto, setProfilePhoto] = useState('');
    const [user, setUser] = useState(null); // user state for form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();  // validation for form  

    // set default value in input from DB using reset and settimeout
    useEffect(() => {
        setTimeout(() => setUser({ title: getEditData.title }), 1000); // simulate async api call with set timeout 
    }, [getEditData]);

    useEffect(() => {
        // reset form with user data
        setProfilePhoto();  // clear selected photos in image
        reset(user);
        // eslint-disable-next-line
    }, [user]);

    /* ************************************************
    INSERT RECORDS   // submit for inserting category us data
    ***********************************************/
    const onSubmit = data => {
        const { title } = data;
        updateCategoryRecord(getEditData._id, title.trim(), (getProfilePhoto) ? getProfilePhoto : getEditData.path, page, limit); // form submit and insert record    
        reset({ title: '' });
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
                                <div className="form-group col-md-12 col-12">
                                    <label>Category Photo</label>
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