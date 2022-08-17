import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div id="app">
        <section className="section">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
                <div className="login-brand">Stisla</div>

                <div className="card card-primary">
                  <div className="row m-0">
                    <div className="col-12 col-md-12 col-lg-5 p-0">
                      <div className="card-header text-center">
                        <h4>Contact Us</h4>
                      </div>
                      <div className="card-body">
                        <form method="POST">
                          <div className="form-group floating-addon">
                            <label>Name</label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <div className="input-group-text">
                                  <i className="far fa-user"></i>
                                </div>
                              </div>
                              <input
                                id="name"
                                type="text"
                                className="form-control"
                                name="name"
                                autofocus
                                placeholder="Name"
                              />
                            </div>
                          </div>

                          <div className="form-group floating-addon">
                            <label>Email</label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <div className="input-group-text">
                                  <i className="fas fa-envelope"></i>
                                </div>
                              </div>
                              <input
                                id="email"
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>

                          <div className="form-group">
                            <label>Message</label>
                            <textarea
                              className="form-control"
                              placeholder="Type your message"
                              data-height="150"
                            ></textarea>
                          </div>

                          <div className="form-group text-right">
                            <button
                              type="submit"
                              className="btn btn-round btn-lg btn-primary"
                            >
                              Send Message
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-7 p-0">
                      <div id="map" className="contact-map"></div>
                    </div>
                  </div>
                </div>
                <div className="simple-footer">Copyright &copy; Stisla 2018</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
