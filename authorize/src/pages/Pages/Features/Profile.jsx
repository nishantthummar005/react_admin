import React, { useContext, useState, useEffect } from "react";
import Breadcrumb from "../../../components/admin/breadcrumb";
import adminContext from "../../../context/auth/adminContext";
import ReactSummernote from 'react-summernote';
import { useForm } from 'react-hook-form';

const Profile = () => {
  const admincontext = useContext(adminContext);
  const { adminData, changeAdminInfo } = admincontext;
  const [getSummerval, setSummerval] = useState('');
  const [getProfilePhoto, setProfilePhoto] = useState('');
  const [user, setUser] = useState(null); // user state for form
  const { register, handleSubmit, reset, formState: { errors } } = useForm();  // validation for form  

  // set default value in input from DB using reset and settimeout
  useEffect(() => {
    setTimeout(() => setUser({ project_name: adminData.project_name, admin_name: adminData.admin_name, phone: adminData.phone, address: adminData.address }), 1000); // simulate async api call with set timeout
    setSummerval(adminData.bio)
  }, [adminData]);

  useEffect(() => {
    // reset form with user data
    reset(user);
    // eslint-disable-next-line
  }, [user]);

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

  // submit for Update admin info
  const onSubmit = data => {
    const { project_name, admin_name, phone, address } = data;
    changeAdminInfo(project_name, admin_name, phone, address, getSummerval.trim(), (getProfilePhoto) ? getProfilePhoto : ''); // update admin info - calling api 
    setSummerval('')
    setProfilePhoto('')
  }

  // Handle Profile Photo 
  const handleProfilePhoto = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfilePhoto(e.target.files[0]);
    }
  }
  // clear selected photo
  const removeSelectedImage = () => {
    setProfilePhoto();
  };


  return (
    <div className="main-content">
      <section className="section">
        <Breadcrumb title="Admin Profile" />
        <div className="section-body">
          <h2 className="section-title">Hi, {adminData.admin_name}!</h2>
          <p className="section-lead">
            Change information about yourself on this page.
          </p>
          <div className="row mt-sm-4">
            <div className="col-12 col-md-12 col-lg-5">
              <div className="card profile-widget">
                <div className="profile-widget-header">
                  <img
                    alt="something"
                    src={"../" + adminData.profile}
                    className="rounded-circle profile-widget-picture"
                  />
                  <div className="profile-widget-items">
                    <div className="profile-widget-item">
                      <div className="profile-widget-item-label">Contacts</div>
                      <div className="profile-widget-item-value">187</div>
                    </div>
                    <div className="profile-widget-item">
                      <div className="profile-widget-item-label">Visitors</div>
                      <div className="profile-widget-item-value">6,8K</div>
                    </div>
                  </div>
                </div>
                <div className="profile-widget-description">
                  <div className="profile-widget-name">
                    {adminData.admin_name}
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: adminData.bio }} />
                </div>
                <div className="card-footer text-center">
                  <div className="font-weight-bold mb-2">Follow Admin On</div>
                  <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-social-icon btn-facebook mr-1">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-social-icon btn-twitter mr-1">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-social-icon btn-github mr-1">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-social-icon btn-instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-7">
              <div className="card">
                <form method="post" noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off" encType='multipart/form-data'>
                  <div className="card-header">
                    <h4>Edit Profile</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="form-group col-md-12 col-12">
                        <label>Project Name</label>
                        <input
                          type="text"
                          id="project_name"
                          name="project_name"
                          className="form-control"
                          {...register("project_name", {
                            required: true
                          })}
                        />
                        {errors.project_name && errors.project_name.type === "required" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-12 col-12">
                        <label>Full Name</label>
                        <input
                          type="text"
                          id="admin_name"
                          name="admin_name"
                          className="form-control"
                          {...register("admin_name", {
                            required: true
                          })}
                        />
                        {errors.admin_name && errors.admin_name.type === "required" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-7 col-12">
                        <label>Email</label>
                        <input
                          readOnly
                          type="email"
                          className="form-control"
                          defaultValue={adminData.email}
                        />
                      </div>
                      <div className="form-group col-md-5 col-12">
                        <label>Phone</label>
                        <input type="tel" name="phone" id="phone" {...register("phone", {
                          required: true,
                          minLength: 10,
                          maxLength: 12
                        })} className="form-control" />
                        {errors.phone && errors.phone.type === "required" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                        )}
                        {errors.phone && errors.phone.type === "minLength" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">Enter atleast 10 characters!</span>
                        )}
                        {errors.phone && errors.phone.type === "maxLength" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">Enter maximum 12 characters!</span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-12 col-12">
                        <label>Address</label>
                        <textarea
                          type="text"
                          name="address"
                          id="address"
                          className="form-control"
                          {...register("address", {
                            required: true
                          })}
                        ></textarea>
                        {errors.address && errors.address.type === "required" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-12 col-12">
                        <label>Profile Photo</label>
                        <input
                          type="file"
                          accept=".png, .jpg, .jpeg"
                          id="profile"
                          name="profile"
                          className="form-control"
                          onChange={handleProfilePhoto}
                        />
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
                    <div className="row">
                      <div className="form-group col-12">
                        <label>Bio</label>
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
                    </div>
                  </div>
                  <div className="card-footer text-right">
                    <button className="btn btn-primary">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
