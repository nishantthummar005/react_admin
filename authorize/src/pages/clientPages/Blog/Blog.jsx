import React, { useEffect, useContext, useState } from 'react'
import "react-data-table-component-extensions/dist/index.css";
import Breadcrumb from "../../../components/admin/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import swal from "sweetalert";
import blogContext from '../../../context/common/Blog/blogContext';
import adminContext from '../../../context/auth/adminContext';
import UpdateData from './UpdateData';
import ShowData from './ShowData';
import { useForm } from 'react-hook-form';
import ReactSummernote from 'react-summernote';

const Blog = () => {
    const [getSummerval, setSummerval] = useState('');
    const [blogAllData, setblogAllData] = useState([]);
    const [getEditData, setEditData] = useState([{ _id: '', blog: '' }]);
    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(5);
    const context = useContext(blogContext);
    const { allBlog, getAllBlog, deleteBlog, addBlogRecord } = context;
    const admincontext = useContext(adminContext);
    const { checkAuthToken } = admincontext;
    const [getProfilePhoto, setProfilePhoto] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();  // validation for login form    

    let location = useLocation().pathname;
    let locationSplit = location.split("/");
    let pageType = locationSplit[3];
    document.title = "Blog — " + process.env.REACT_APP_NAME;

    useEffect(() => {
        checkAuthToken()  // check whether token has been created or not (if not then redirect to login) 
        getAllBlog(page, limit);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        getBlogList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allBlog]);

    /* ************************************************
                    FETCH ALL RECORDS  // Fetch all blog us data through axios API
    ***********************************************/
    const getBlogList = () => {
        setblogAllData(allBlog);
    }

    /* ************************************************
                    INSERT RECORDS   // submit for inserting blog us data
    ***********************************************/
    const onSubmit = data => {
        const { title, meta_title, meta_keyword, meta_description } = data;
        addBlogRecord(title, getSummerval, meta_title, meta_keyword, meta_description, (getProfilePhoto) ? getProfilePhoto : '', page, limit); // form submit and insert record    
        reset({ title: '', meta_title: '', meta_keyword: '', meta_description: '' });
        setProfilePhoto('');
        setSummerval('');   // clear description
    }

    /* ************************************************
                        UPDATE RECORDS   // get updatable item data through axios API
        ***********************************************/
    const getEditItem = async (id) => {
        const host = process.env.REACT_APP_DB_HOST
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${host}/api/blog/getedititem/${id}`, {
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
        let newArr = { _id: getEditData._id, blog: e.target.value };   // assign value to the usestate  
        setEditData(newArr);
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

    const removeSelectedImage = () => {
        setProfilePhoto();
    };

    return (
        <>
            <div className="main-content">
                <section className="section">
                    <Breadcrumb title="Blog" />
                    <div className="section-body">
                        {(pageType === "add") ? (
                            <div>
                                <div className="row">
                                    <div className="col-6">
                                        <h2 className="section-title mt-0">Add Blog</h2>
                                        <p className="section-lead">
                                            Change information Blog yourself on this page.
                                        </p>
                                    </div>
                                    <div className="col-6 text-right">
                                        <Link to="/clientPages/blog/show" className="btn btn-info">Show Blog</Link>
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
                                                                <label><span className='text-danger'>*</span>Blog Title</label>
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
                                                                <label><span className='text-danger'>*</span>Description</label>
                                                                <ReactSummernote
                                                                    value={getSummerval}
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
                                                                    {...register("profile", {
                                                                        required: true
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
                                                        <div className="col-6">
                                                            <div className="form-group col-md-12 col-12">
                                                                <label>Meta Title <span className='text-warning'> *Meta title maximum length is 70</span> </label>
                                                                <input
                                                                    type="text"
                                                                    id="meta_title"
                                                                    name="meta_title"
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
                                                    <div className="form-group">
                                                        <button disabled={!getSummerval} className="btn btn-primary btn-md btn-block" tabIndex={4}>
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
                            <ShowData getEditItem={getEditItem} page={page} setPage={setPage} limit={limit} setlimit={setlimit} blogAllData={blogAllData} deleteBlog={deleteBlog} />
                        )}
                    </div>
                </section>
            </div>
            <UpdateData getEditData={getEditData} setEditTextValue={setEditTextValue} page={page} limit={limit} />
        </>
    )
}

export default Blog;