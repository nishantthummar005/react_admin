import React, { Component } from "react";
import SweetAlerMessage from "../../js/sweetalert";

export class SweetAlert extends Component {
  componentDidMount() {
    SweetAlerMessage();
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Sweet Alert</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Modules</a>
              </div>
              <div className="breadcrumb-item">Sweet Alert</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Sweet Alert</h2>
            <p className="section-lead">
              We use 'Sweet Alert 2' made by 'Tristan Edwards'. You can check
              the full documentation{" "}
              <a href="https://sweetalert.js.org/">here</a>.
            </p>

            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Simple Sweet Alert</div>
                    <button className="btn btn-primary" id="swal-1">
                      Launch
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Success Message</div>
                    <button className="btn btn-primary" id="swal-2">
                      Launch
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Warning Message</div>
                    <button className="btn btn-primary" id="swal-3">
                      Launch
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Info Message</div>
                    <button className="btn btn-primary" id="swal-4">
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
                    <div className="mb-2">Error Message</div>
                    <button className="btn btn-primary" id="swal-5">
                      Launch
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Confirmation</div>
                    <button className="btn btn-primary" id="swal-6">
                      Launch
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Input Text</div>
                    <button className="btn btn-primary" id="swal-7">
                      Launch
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-2">Auto Hide</div>
                    <button className="btn btn-primary" id="swal-8">
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

export default SweetAlert;
