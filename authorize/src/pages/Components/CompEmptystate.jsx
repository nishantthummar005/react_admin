import React, { Component } from "react";

export class CompEmptystate extends Component {
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Empty State</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Components</a>
              </div>
              <div className="breadcrumb-item">Empty State</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Empty States</h2>
            <p className="section-lead">
              Empty state are generally used when there is no data or content.
            </p>

            <div className="row">
              <div className="col-12 col-md-6 col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Empty Data</h4>
                  </div>
                  <div className="card-body">
                    <div className="empty-state" data-height="400">
                      <div className="empty-state-icon">
                        <i className="fas fa-question"></i>
                      </div>
                      <h2>We couldn't find any data</h2>
                      <p className="lead">
                        Sorry we can't find any data, to get rid of this
                        message, make at least 1 entry.
                      </p>
                      <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-primary mt-4">
                        Create new One
                      </a>
                      <a href="true" onClick={(e) => { e.preventDefault() }} className="mt-4 bb">
                        Need Help?
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Whoops</h4>
                  </div>
                  <div className="card-body">
                    <div className="empty-state" data-height="600">
                      <img
                        className="img-fluid"
                        src="../assets/img/drawkit/drawkit-full-stack-man-colour.svg"
                        alt="something"
                      />
                      <h2 className="mt-0">We can't reach the server</h2>
                      <p className="lead">
                        We were unable to reach the server, it seemed like it
                        was sleeping, so we were reluctant to wake it up.
                      </p>
                      <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-warning mt-4">
                        Try Again
                      </a>
                      <a href="true" onClick={(e) => { e.preventDefault() }} className="mt-4 bb">
                        Need Help?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Request Failed</h4>
                  </div>
                  <div className="card-body">
                    <div className="empty-state" data-height="400">
                      <div className="empty-state-icon bg-danger">
                        <i className="fas fa-times"></i>
                      </div>
                      <h2>HTTP Request Failed</h2>
                      <p className="lead">
                        We tried it, but failed when requesting data to the
                        server, sorry. (Code:{" "}
                        <a href="true" onClick={(e) => { e.preventDefault() }} className="bb">
                          14045
                        </a>
                        )
                      </p>
                      <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-warning mt-4">
                        Try Again
                      </a>
                      <a href="true" onClick={(e) => { e.preventDefault() }} className="mt-4 bb">
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Not Found</h4>
                  </div>
                  <div className="card-body">
                    <div className="empty-state" data-height="600">
                      <img
                        className="img-fluid"
                        src="../assets/img/drawkit/drawkit-nature-man-colour.svg"
                        alt="something"
                      />
                      <h2 className="mt-0">Looks like you got lost</h2>
                      <p className="lead">
                        We can't find the path you're looking for, check the
                        path again and try again.
                      </p>
                      <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-warning mt-4">
                        Try Again
                      </a>
                      <a href="true" onClick={(e) => { e.preventDefault() }} className="mt-4 bb">
                        Need Help?
                      </a>
                    </div>
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

export default CompEmptystate;
