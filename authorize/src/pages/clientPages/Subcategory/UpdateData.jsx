import React, { useContext, useState, useEffect } from "react";
import subcategoryContext from '../../../context/common/Subcategory/subcategoryContext';
import $ from 'jquery';
import { useForm } from 'react-hook-form';

const UpdateData = (props) => {
    const { getEditData, categoryAllData, page, limit } = props;
    const context = useContext(subcategoryContext);
    const { updateSubcategoryRecord } = context;
    const [getProfilePhoto, setProfilePhoto] = useState('');
    const [user, setUser] = useState(null); // user state for form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();  // validation for form   

    // set default value in input from DB using reset and settimeout
    useEffect(() => {
        setTimeout(() => setUser({ title: getEditData.title, parent: getEditData.parent }), 1000); // simulate async api call with set timeout 
    }, [getEditData]);

    useEffect(() => {
        // reset form with user data
        setProfilePhoto();  // clear selected photos in image
        reset(user);
        // eslint-disable-next-line
    }, [user]);

    /* ************************************************
    INSERT RECORDS   // submit for inserting subcategory us data
    ***********************************************/
    const onSubmit = data => {
        const { title, parent } = data;
        updateSubcategoryRecord(getEditData._id, title.trim(), parent, (getProfilePhoto) ? getProfilePhoto : getEditData.path, page, limit); // form submit and insert record    
        reset({ title: '', parent: '' });
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
                                <div className="row">
                                    <div className="form-group col-md-6 col-6">
                                        <label><span className='text-danger'>*</span>Parent Category </label>
                                        <select
                                            id="parent"
                                            name="parent"
                                            className="form-control"
                                            defaultValue={getEditData.parent}
                                            tabIndex={1}
                                            {...register("parent", {
                                                required: true
                                            })}
                                        >
                                            <option value=''>Select Parent Category</option>
                                            {/* NOTE : put '?' in array by first asking if the array existed. */}
                                            {categoryAllData?.map(({ _id, title }) => (
                                                <option value={_id} key={_id}>{title}</option>
                                            ))}
                                        </select>
                                        {errors.parent && errors.parent.type === "required" && (
                                            <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                                        )}
                                    </div>
                                    <div className="form-group col-md-6 col-6">
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