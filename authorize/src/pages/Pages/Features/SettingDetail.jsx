import React, { useContext } from "react";
// import FormEditorJs from "../../../js/FormEditor";
// import SettingDetailJs from "../../../components/SettingDetailJs";
import Breadcrumb from "../../../components/admin/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { useForm } from 'react-hook-form';
import adminContext from "../../../context/auth/adminContext";

const SettingDetail = () => {
  //   FormEditorJs();
  //   SettingDetailJs(); 

  let location = useLocation().pathname;
  let locationSplit = location.split("/");
  let pageType = locationSplit[3];
  document.title = "Admin Settings — " + process.env.REACT_APP_NAME;

  const admincontext = useContext(adminContext);
  const { changePassword } = admincontext;
  const { register: security, watch, reset, formState: { errors: securityErrors }, handleSubmit: handleSecuritySubmit, } = useForm({ mode: "onBlur" });  // validation for security form  
  const { register: general, formState: { errors: generalErrors }, handleSubmit: handleGeneralSubmit, } = useForm({ mode: "onBlur" });  // validation for security form  

  // submit for inserting about us data
  const onSecuritySubmit = data => {
    changePassword(data.current_password.trim(), data.new_password.trim());  // form submit and insert record   
    reset({ current_password: '', new_password: '', confirm_password: '' });
  }

  // submit for inserting about us data
  const onGeneralSubmit = data => {
    console.log(data);
    // loginNow(data.email.trim(), data.password.trim());  // form submit and insert record  
  }

  return (
    <div className="main-content">
      <section className="section">
        <Breadcrumb title={pageType.toUpperCase() + " Setting"} />
        <div className="section-body">
          <h2 className="section-title">All About {pageType} Settings</h2>
          <p className="section-lead">You can adjust all {pageType} settings here</p>
          <div id="output-status" />
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h4>Jump To</h4>
                </div>
                <div className="card-body">
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <Link to="/feature/setting-detail/general" className={(pageType === "general") ? "nav-link active" : "nav-link"}>
                        General
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/feature/setting-detail/seo" className={(pageType === "seo") ? "nav-link active" : "nav-link"}>
                        SEO
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/feature/setting-detail/email" className={(pageType === "email") ? "nav-link active" : "nav-link"}>
                        Email
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/feature/setting-detail/security" className={(pageType === "security") ? "nav-link active" : "nav-link"}>
                        Security
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              {(pageType === "general") ? (
                <form method="post" noValidate onSubmit={handleGeneralSubmit(onGeneralSubmit)} autoComplete="off">
                  <div className="card" id="seo-setting">
                    <div className="card-header">
                      <h4>Security Settings</h4>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">
                        Security settings such as change your login password.
                      </p>
                      <div className="form-group">
                        <label htmlFor="email">Name</label>
                        <input id="email" type="email" className="form-control" name="email" tabIndex={1} autoFocus
                          {...general("email", {
                            required: true,
                            minLength: 3,
                            pattern: /\S+@\S+\.\S+/
                          })} />
                        {generalErrors.email && generalErrors.email.type === "required" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                        )}
                        {generalErrors.password && generalErrors.password.type === "minLength" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">Enter atleast 3 characters!</span>
                        )}
                        {generalErrors.email && generalErrors.email.type === "pattern" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">Entered value does not match email format</span>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="d-block">
                          <label htmlFor="password" className="control-label">
                            Password
                          </label>
                          <div className="float-right">
                            <a href="forget-password" className="text-small">
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <input id="passwords" type="password" className="form-control" name="passwords" tabIndex={2}
                          {...general("passwords", {
                            required: true,
                            minLength: 5
                          })} />
                        {generalErrors.passwords && generalErrors.passwords.type === "required" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                        )}
                        {generalErrors.passwords && generalErrors.passwords.type === "minLength" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">Enter atleast 5 characters!</span>
                        )}
                      </div>
                    </div>
                    <div className="card-footer bg-whitesmoke text-md-right">
                      <button className="btn btn-primary" id="save-btn">
                        Save Changes
                      </button>
                      <button className="btn btn-secondary" type="button">
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              ) : (pageType === "seo") ? (
                <form id="seo-setting-form">
                  <div className="card" id="seo-setting">
                    <div className="card-header">
                      <h4>SEO Settings</h4>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">
                        SEO settings such as, meta title, meta description,
                        meta keyword and so on.
                      </p>
                    </div>
                  </div>
                </form>
              ) : (pageType === "email") ? (
                <form id="seo-setting-form">
                  <div className="card" id="seo-setting">
                    <div className="card-header">
                      <h4>Email Settings</h4>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">
                        Email settings sender email address, provider, password and so on.
                      </p>
                    </div>
                  </div>
                </form>
              ) : (
                <form method="post" noValidate onSubmit={handleSecuritySubmit(onSecuritySubmit)} autoComplete="off">
                  <div className="card" id="seo-setting">
                    <div className="card-header">
                      <h4>Security Settings</h4>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">
                        Security settings such as change your login password.
                      </p>
                      <div className="form-group">
                        <div className="d-block">
                          <label htmlFor="current_password" className="control-label">
                            Current Password
                          </label>
                          <div className="float-right">
                            <a href="/auth/forget-password" className="text-small">
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <input id="current_password" type="password" className="form-control" name="current_password" tabIndex={1} autoFocus
                          {...security("current_password", {
                            required: true,
                            minLength: 8
                          })} />
                        {securityErrors.current_password && securityErrors.current_password.type === "required" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                        )}
                        {securityErrors.current_password && securityErrors.current_password.type === "minLength" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">Enter atleast 8 characters!</span>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="d-block">
                          <label htmlFor="new_password" className="control-label">
                            New Password
                          </label>
                        </div>
                        <input id="new_password" type="password" className="form-control" name="new_password" tabIndex={2}
                          {...security("new_password", {
                            required: true,
                            minLength: 8
                          })} />
                        {securityErrors.new_password && securityErrors.new_password.type === "required" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                        )}
                        {securityErrors.new_password && securityErrors.new_password.type === "minLength" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">Enter atleast 8 characters!</span>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="d-block">
                          <label htmlFor="confirm_password" className="control-label">
                            Confirm Password
                          </label>
                        </div>
                        <input id="confirm_password" type="password" className="form-control" name="confirm_password" tabIndex={3}
                          {...security("confirm_password", {
                            required: true,
                            minLength: 8,
                            validate: (val) => {
                              if (watch('new_password') !== val) {
                                return "Your passwords do no match";
                              }
                            }
                          })} />
                        {securityErrors.confirm_password && securityErrors.confirm_password.type === "required" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                        )}
                        {securityErrors.confirm_password && securityErrors.confirm_password.type === "minLength" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">Enter atleast 8 characters!</span>
                        )}
                        {securityErrors.confirm_password && securityErrors.confirm_password.type === "validate" && (
                          <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">Your passwords do no match!</span>
                        )}
                      </div>
                    </div>
                    <div className="card-footer bg-whitesmoke text-md-right">
                      <button type="submit" tabIndex={4} className="btn btn-primary" id="save-btn"> Save Changes </button>
                      <button tabIndex={5} className="btn btn-secondary" type="reset"> Reset </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default SettingDetail;
