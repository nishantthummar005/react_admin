import React, { useContext } from "react";
import { useForm } from 'react-hook-form';
import adminContext from "../../../context/auth/adminContext";

const Login = () => {

  const admincontext = useContext(adminContext);
  const { doAdminLogin } = admincontext;
  const { register, handleSubmit, formState: { errors } } = useForm();  // validation for login form  

  // submit for Login
  const onSubmit = data => {
    doAdminLogin(data.email.trim(), data.password.trim());  //  ______________  LOGIN API CALL ______________
  }

  return (
    <div id="app">
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
              <div className="login-brand mb-0">
                <h2>Project Name</h2>
              </div>
              <div className="card card-primary mb-10">
                <div className="card-header">
                  <h4>Login</h4>
                </div>
                <div className="card-body pb-0">
                  <form method="post" noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="email" className="form-control" name="email" tabIndex={1} autoFocus
                        {...register("email", {
                          required: true,
                          pattern: /\S+@\S+\.\S+/
                        })} />
                      {errors.email && errors.email.type === "required" && (
                        <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">Enter valid email!</span>
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
                      <input id="password" type="password" autoComplete="true" className="form-control" name="password" tabIndex={2}
                        {...register("password", {
                          required: true,
                          minLength: 8
                        })} />
                      {errors.password && errors.password.type === "required" && (
                        <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">This is required field!</span>
                      )}
                      {errors.password && errors.password.type === "minLength" && (
                        <span className='alert p-1 mt-2 font-12 alert-warning' role="alert">Enter atleast 8 characters!</span>
                      )}
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" name="remember" className="custom-control-input" tabIndex={3} id="remember-me" />
                        <label className="custom-control-label" htmlFor="remember-me">
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex={4}>
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Login;
