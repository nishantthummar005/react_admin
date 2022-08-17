import React, { useContext, useState, useEffect } from "react";
import blogContext from '../../../context/common/Blog/blogContext';
import $ from 'jquery';
import { useForm } from 'react-hook-form';
import ReactSummernote from 'react-summernote';

const UpdateData = (props) => {
    const [getSummerval, setSummerval] = useState('');
    const { getEditData, page, limit } = props;
    const context = useContext(blogContext);
    const { updateBlogRecord } = context;
    const [getProfilePhoto, setProfilePhoto] = useState('');
    const [user, setUser] = useState(null); // user state for form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();  // validation for form  

    // set default value in input from DB using reset and settimeout
    useEffect(() => {
        setSummerval(getEditData.description)
        setTimeout(() => setUser({ title: getEditData.title, meta_title: getEditData.meta_title, meta_keyword: getEditData.meta_keyword, meta_description: getEditData.meta_description }), 1000); // simulate async api call with set timeout 
    }, [getEditData]);

    useEffect(() => {
        // reset form with user data
        setProfilePhoto();  // clear selected photos in image
        reset(user);
        // eslint-disable-next-line
    }, [user]);

    /* ************************************************
    UPDATE RECORDS   // submit for update blog  data
    ***********************************************/
    const onSubmit = data => {
        const { title, meta_title, meta_keyword, meta_description } = data;
        updateBlogRecord(getEditData._id, title, getSummerval, meta_title, meta_keyword, meta_description, (getProfilePhoto) ? getProfilePhoto : getEditData.path, page, limit); // form submit and update record     
        reset({ title: '', meta_title: '', meta_keyword: '', meta_description: '' });
        setProfilePhoto();  // clear selected photos in image
        setSummerval('');   // clear description
        $('#updateModal').modal('toggle');   // close modal
    }

    /* ************************************************
    SUMMER NOTE   // Get Summernote value & Upload Image
    ***********************************************/
    // Get Summernote value
    const getSummernoteVal = (content) => {
        setSummerval(content)
    }
    // Upload Image in Summernote
    const onImageUpload = (fileList) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            ReactSummernote.insertImage(reader.result);
        }
        reader.readAsDataURL(fileList[0]);
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
                                            <label><span className='text-danger'>*</span>Blog Title</label>
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
                                            <label><span className='text-danger'>*</span>Description</label>
                                            <ReactSummernote
                                                value={getEditData.description}
                                                options={{
                                                    lang: 'en',
                                                    height: 150,
                                                    dialogsInBody: true,
                                                    toolbar: [
                                                        ['style', ['style']],
                                                        ['font', ['bold', 'underline', 'clear']],
                                                        ['fontname', ['fontname', 'fontsize']],
                                                        ['para', ['ul', 'ol', 'paragraph']],
                                                        ['table', ['table']],
                                                        ['color', ['forecolor', 'backcolor']],
                                                        ['insert', ['link', 'picture', 'video']],
                                                        ['view', ['codeview']]
                                                    ]
                                                }}
                                                onChange={getSummernoteVal}
                                                onImageUpload={onImageUpload}
                                            />
                                        </div>
                                        <div className="form-group col-md-12 col-12">
                                            <label><span className='text-danger'>*</span>Blog Photo</label>
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
                                    <div className="col-6">
                                        <div className="form-group col-md-12 col-12">
                                            <label>Meta Title <span className='text-warning'> *Meta title maximum length is 70</span> </label>
                                            <input
                                                type="text"
                                                id="meta_title"
                                                name="meta_title"
                                                defaultValue={getEditData.meta_title}
                                                tabIndex={1}
                                                maxLength={70}
                                                className="form-control"
                                                {...register("meta_title", {
                                                    required: false
                                                })}
                                            />
                                        </div>
                                        <div className="form-group col-md-12 col-12">
                                            <label>Meta Keyword <span className='text-warning'> *Meta keywords allow maximum 30 words</span> </label>
                                            <textarea
                                                id="meta_keyword"
                                                name="meta_keyword"
                                                defaultValue={getEditData.meta_keyword}
                                                tabIndex={2}
                                                className="form-control"
                                                {...register("meta_keyword", {
                                                    required: false
                                                })}
                                            ></textarea>
                                        </div>
                                        <div className="form-group col-md-12 col-12">
                                            <label>Meta Description <span className='text-warning'>  *Meta description length is between 150 to 160</span> </label>
                                            <textarea
                                                id="meta_description"
                                                name="meta_description"
                                                defaultValue={getEditData.meta_description}
                                                tabIndex={2}
                                                maxLength={160}
                                                className="form-control"
                                                {...register("meta_description", {
                                                    required: false
                                                })}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
                            <button type="submit" form='editForm' disabled={!getSummerval} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateData