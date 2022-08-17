import React, { Component } from "react";
import ToastrMessage from "../../js/toastrMessage";

export class Toastr extends Component {
  componentDidMount() {
    ToastrMessage();
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Toastr</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Modules</a>
              </div>
              <div className="breadcrumb-item">Toastr</div>
            </div>
          </div>
          <div className="section-body">
            <h2 className="section-title">Toastr</h2>
            <p className="section-lead">
              We use 'iziToast' made by @Dolce. You can check the full
              documentation{" "}
              <a href="https://izitoast.marcelodolza.com/">here</a>.
            </p>
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Info Message</div>
                    <button className="btn btn-primary" id="toastr-1">
                      Launch
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Success Message</div>
                    <button className="btn btn-primary" id="toastr-2">
                      Launch
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Warning Message</div>
                    <button className="btn btn-primary" id="toastr-3">
                      Launch
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Error Message</div>
                    <button className="btn btn-primary" id="toastr-4">
                      Launch
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Toastr Right Bottom</div>
                    <button className="btn btn-primary" id="toastr-5">
                      Launch
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Toastr Center Bottom</div>
                    <button className="btn btn-primary" id="toastr-6">
                      Launch
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Toastr Left Bottom</div>
                    <button className="btn btn-primary" id="toastr-7">
                      Launch
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Toastr Top Center</div>
                    <button className="btn btn-primary" id="toastr-8">
                      Launch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Toastr;
