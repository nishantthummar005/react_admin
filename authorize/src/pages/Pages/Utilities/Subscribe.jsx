import React from "react";

export default function Subscribe() {
  return (
    <div id="app">
      <section className="section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
              <div className="login-brand">Stisla</div>

              <div className="card card-primary">
                <div className="card-header">
                  <h4>Subscribe Our Newsletters</h4>
                </div>

                <div className="card-body">
                  <form method="POST">
                    <div className="form-group">
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
                          autofocus
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="form-group text-center">
                      <button
                        type="submit"
                        className="btn btn-lg btn-round btn-primary"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
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
