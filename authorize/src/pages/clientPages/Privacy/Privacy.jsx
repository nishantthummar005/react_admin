import React, { useEffect, useContext, useState } from 'react'
import "react-data-table-component-extensions/dist/index.css";
import Breadcrumb from "../../../components/admin/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import swal from "sweetalert";
import privacyContext from '../../../context/common/Privacy/privacyContext';
import adminContext from '../../../context/auth/adminContext';
import UpdateData from './UpdateData';
import ShowData from './ShowData';
import ReactSummernote from 'react-summernote';
require('dotenv').config();

const Privacy = () => {
    const [getSummerval, setSummerval] = useState('');
    const [privacyAllData, setprivacyAllData] = useState([]);
    const [getEditData, setEditData] = useState([{ _id: '', privacy: '' }]);
    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(5);
    const context = useContext(privacyContext);
    const { allPrivacy, getAllPrivacy, deletePrivacy, addPrivacyRecord } = context;
    const admincontext = useContext(adminContext);
    const { checkAuthToken } = admincontext;

    let location = useLocation().pathname;
    let locationSplit = location.split("/");
    let pageType = locationSplit[3];
    document.title = "Privacy — " + process.env.REACT_APP_NAME;

    useEffect(() => {
        checkAuthToken()  // check whether token has been created or not (if not then redirect to login) 
        getAllPrivacy(page, limit);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        getPrivacyList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allPrivacy]);

    /* ************************************************
                    FETCH ALL RECORDS  // Fetch all privacy policy data through axios API
    ***********************************************/
    const getPrivacyList = () => {
        setprivacyAllData(allPrivacy);
    }

    /* ************************************************
                    INSERT RECORDS   // submit for inserting privacy policy data
    ***********************************************/
    const onSubmit = () => {
        addPrivacyRecord(getSummerval.trim(), page, limit); // form submit and insert record   
        setSummerval('')
    }

    /* ************************************************
                        UPDATE RECORDS   // get updatable item data through axios API
        ***********************************************/
    const getEditItem = async (id) => {
        const host = process.env.REACT_APP_DB_HOST
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${host}/api/privacy/getedititem/${id}`, {
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
        let newArr = { _id: getEditData._id, privacy: e.target.value };   // assign value to the usestate  
        setEditData(newArr);
    }

    /* ************************************************
                       SUMMER NOTE   // Get Summernote value & Upload Image
       ***********************************************/
    // Get Summernote value
    const getSummernoteVal = (content) => {
        setSummerval(content.trim())
    }
    // Upload Image in Summernote
    const onImageUpload = (fileList) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            ReactSummernote.insertImage(reader.result);
        }
        reader.readAsDataURL(fileList[0]);
    }

    return (
        <>
            <div className="main-content">
                <section className="section">
                    <Breadcrumb title="Privacy & Policy" />
                    <div className="section-body">
                        {(pageType === "add") ? (
                            <div>
                                <div className="row">
                                    <div className="col-6">
                                        <h2 className="section-title mt-0">Add Privacy</h2>
                                        <p className="section-lead">
                                            Change information Privacy yourself on this page.
                                        </p>
                                    </div>
                                    <div className="col-6 text-right">
                                        <Link to="/clientPages/privacy/show" className="btn btn-info">Show Privacy</Link>
                                    </div>
                                </div>
                                <div className="row mt-sm-4">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="card card-primary">
                                            <div className="card-body">
                                                <form method="post" autoComplete="off">
                                                    <div className="form-group">
                                                        <label htmlFor="privacy" className="form-label"><span className='text-danger'>*</span>Add Data</label>
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
                                                    <div className="form-group">
                                                        <button type="button" disabled={!getSummerval} onClick={onSubmit} className="btn btn-primary btn-md btn-block" tabIndex={2}>
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
                            <ShowData getEditItem={getEditItem} page={page} setPage={setPage} limit={limit} setlimit={setlimit} privacyAllData={privacyAllData} deletePrivacy={deletePrivacy} />
                        )}
                    </div>
                </section>
            </div>
            <UpdateData getEditData={getEditData} setEditTextValue={setEditTextValue} page={page} limit={limit} />
        </>
    )
}

export default Privacy;