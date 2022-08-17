import React from "react";

export default function Activities() {
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Activities</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="true" onClick={(e) => { e.preventDefault() }}>Dashboard</a>
            </div>
            <div className="breadcrumb-item">Activities</div>
          </div>
        </div>
        <div className="section-body">
          <h2 className="section-title">September 2018</h2>
          <div className="row">
            <div className="col-12">
              <div className="activities">
                <div className="activity">
                  <div className="activity-icon bg-primary text-white shadow-primary">
                    <i className="fas fa-comment-alt"></i>
                  </div>
                  <div className="activity-detail">
                    <div className="mb-2">
                      <span className="text-job text-primary">2 min ago</span>
                      <span className="bullet"></span>
                      <a className="text-job" href="true" onClick={(e) => { e.preventDefault() }}>
                        View
                      </a>
                      <div className="float-right dropdown">
                        <a href="true" onClick={(e) => { e.preventDefault() }} data-toggle="dropdown">
                          <i className="fas fa-ellipsis-h"></i>
                        </a>
                        <div className="dropdown-menu">
                          <div className="dropdown-title">Options</div>
                          <a href="true" onClick={(e) => { e.preventDefault() }} className="dropdown-item has-icon">
                            <i className="fas fa-eye"></i> View
                          </a>
                          <a href="true" onClick={(e) => { e.preventDefault() }} className="dropdown-item has-icon">
                            <i className="fas fa-list"></i> Detail
                          </a>
                          <div className="dropdown-divider"></div>
                          <a
                            href="true" onClick={(e) => { e.preventDefault() }}
                            className="dropdown-item has-icon text-danger"
                            data-confirm="Wait, wait, wait...|This action can't be undone. Want to take risks?"
                            data-confirm-text-yes="Yes, IDC"
                          >
                            <i className="fas fa-trash-alt"></i> Archive
                          </a>
                        </div>
                      </div>
                    </div>
                    <p>
                      Have commented on the task of "
                      <a href="true" onClick={(e) => { e.preventDefault() }}>Responsive design</a>".
                    </p>
                  </div>
                </div>
                <div className="activity">
                  <div className="activity-icon bg-primary text-white shadow-primary">
                    <i className="fas fa-arrows-alt"></i>
                  </div>
                  <div className="activity-detail">
                    <div className="mb-2">
                      <span className="text-job">1 hour ago</span>
                      <span className="bullet"></span>
                      <a className="text-job" href="true" onClick={(e) => { e.preventDefault() }}>
                        View
                      </a>
                      <div className="float-right dropdown">
                        <a href="true" onClick={(e) => { e.preventDefault() }} data-toggle="dropdown">
                          <i className="fas fa-ellipsis-h"></i>
                        </a>
                        <div className="dropdown-menu">
                          <div className="dropdown-title">Options</div>
                          <a href="true" onClick={(e) => { e.preventDefault() }} className="dropdown-item has-icon">
                            <i className="fas fa-eye"></i> View
                          </a>
                          <a href="true" onClick={(e) => { e.preventDefault() }} className="dropdown-item has-icon">
                            <i className="fas fa-list"></i> Detail
                          </a>
                          <div className="dropdown-divider"></div>
                          <a
                            href="true" onClick={(e) => { e.preventDefault() }}
                            className="dropdown-item has-icon text-danger"
                            data-confirm="Wait, wait, wait...|This action can't be undone. Want to take risks?"
                            data-confirm-text-yes="Yes, IDC"
                          >
                            <i className="fas fa-trash-alt"></i> Archive
                          </a>
                        </div>
                      </div>
                    </div>
                    <p>
                      Moved the task "
                      <a href="true" onClick={(e) => { e.preventDefault() }}>
                        Fix some features that are bugs in the master module
                      </a>
                      " from Progress to Finish.
                    </p>
                  </div>
                </div>
                <div className="activity">
                  <div className="activity-icon bg-primary text-white shadow-primary">
                    <i className="fas fa-unlock"></i>
                  </div>
                  <div className="activity-detail">
                    <div className="mb-2">
                      <span className="text-job">4 hour ago</span>
                      <span className="bullet"></span>
                      <a className="text-job" href="true" onClick={(e) => { e.preventDefault() }}>
                        View
                      </a>
                      <div className="float-right dropdown">
                        <a href="true" onClick={(e) => { e.preventDefault() }} data-toggle="dropdown">
                          <i className="fas fa-ellipsis-h"></i>
                        </a>
                        <div className="dropdown-menu">
                          <div className="dropdown-title">Options</div>
                          <a href="true" onClick={(e) => { e.preventDefault() }} className="dropdown-item has-icon">
                            <i className="fas fa-eye"></i> View
                          </a>
                          <a href="true" onClick={(e) => { e.preventDefault() }} className="dropdown-item has-icon">
                            <i className="fas fa-list"></i> Detail
                          </a>
                          <div className="dropdown-divider"></div>
                          <a
                            href="true" onClick={(e) => { e.preventDefault() }}
                            className="dropdown-item has-icon text-danger"
                            data-confirm="Wait, wait, wait...|This action can't be undone. Want to take risks?"
                            data-confirm-text-yes="Yes, IDC"
                          >
                            <i className="fas fa-trash-alt"></i> Archive
                          </a>
                        </div>
                      </div>
                    </div>
                    <p>
                      Login to the system with ujang@maman.com email and
                      location in Bogor.
                    </p>
                  </div>
                </div>
                <div className="activity">
                  <div className="activity-icon bg-primary text-white shadow-primary">
                    <i className="fas fa-sign-out-alt"></i>
                  </div>
                  <div className="activity-detail">
                    <div className="mb-2">
                      <span className="text-job">12 hour ago</span>
                      <span className="bullet"></span>
                      <a className="text-job" href="true" onClick={(e) => { e.preventDefault() }}>
                        View
                      </a>
                      <div className="float-right dropdown">
                        <a href="true" onClick={(e) => { e.preventDefault() }} data-toggle="dropdown">
                          <i className="fas fa-ellipsis-h"></i>
                        </a>
                        <div className="dropdown-menu">
                          <div className="dropdown-title">Options</div>
                          <a href="true" onClick={(e) => { e.preventDefault() }} className="dropdown-item has-icon">
                            <i className="fas fa-eye"></i> View
                          </a>
                          <a href="true" onClick={(e) => { e.preventDefault() }} className="dropdown-item has-icon">
                            <i className="fas fa-list"></i> Detail
                          </a>
                          <div className="dropdown-divider"></div>
                          <a
                            href="true" onClick={(e) => { e.preventDefault() }}
                            className="dropdown-item has-icon text-danger"
                            data-confirm="Wait, wait, wait...|This action can't be undone. Want to take risks?"
                            data-confirm-text-yes="Yes, IDC"
                          >
                            <i className="fas fa-trash-alt"></i> Archive
                          </a>
                        </div>
                      </div>
                    </div>
                    <p>Log out of the system after 6 hours using the system.</p>
                  </div>
                </div>
                <div className="activity">
                  <div className="activity-icon bg-primary text-white shadow-primary">
                    <i className="fas fa-trash"></i>
                  </div>
                  <div className="activity-detail">
                    <div className="mb-2">
                      <span className="text-job">Yesterday</span>
                      <span className="bullet"></span>
                      <a className="text-job" href="true" onClick={(e) => { e.preventDefault() }}>
                        View
                      </a>
                      <div className="float-right dropdown">
                        <a href="true" onClick={(e) => { e.preventDefault() }} data-toggle="dropdown">
                          <i className="fas fa-ellipsis-h"></i>
                        </a>
                        <div className="dropdown-menu">
                          <div className="dropdown-title">Options</div>
                          <a href="true" onClick={(e) => { e.preventDefault() }} className="dropdown-item has-icon">
                            <i className="fas fa-eye"></i> View
                          </a>
                          <a href="true" onClick={(e) => { e.preventDefault() }} className="dropdown-item has-icon">
                            <i className="fas fa-list"></i> Detail
                          </a>
                          <div className="dropdown-divider"></div>
                          <a
                            href="true" onClick={(e) => { e.preventDefault() }}
                            className="dropdown-item has-icon text-danger"
                            data-confirm="Wait, wait, wait...|This action can't be undone. Want to take risks?"
                            data-confirm-text-yes="Yes, IDC"
                          >
                            <i className="fas fa-trash-alt"></i> Archive
                          </a>
                        </div>
                      </div>
                    </div>
                    <p>
                      Removing task "Delete all unwanted selectors in CSS
                      files".
                    </p>
                  </div>
                </div>
                <div className="activity">
                  <div className="activity-icon bg-primary text-white shadow-primary">
                    <i className="fas fa-trash"></i>
                  </div>
                  <div className="activity-detail">
                    <div className="mb-2">
                      <span className="text-job">Yesterday</span>
                      <span className="bullet"></span>
                      <a className="text-job" href="true" onClick={(e) => { e.preventDefault() }}>
                        View
                      </a>
                      <div className="float-right dropdown">
                        <a href="true" onClick={(e) => { e.preventDefault() }} data-toggle="dropdown">
                          <i className="fas fa-ellipsis-h"></i>
                        </a>
                        <div className="dropdown-menu">
                          <div className="dropdown-title">Options</div>
                          <a href="true" onClick={(e) => { e.preventDefault() }} className="dropdown-item has-icon">
                            <i className="fas fa-eye"></i> View
                          </a>
                          <a href="true" onClick={(e) => { e.preventDefault() }} className="dropdown-item has-icon">
                            <i className="fas fa-list"></i> Detail
                          </a>
                          <div className="dropdown-divider"></div>
                          <a
                            href="true" onClick={(e) => { e.preventDefault() }}
                            className="dropdown-item has-icon text-danger"
                            data-confirm="Wait, wait, wait...|This action can't be undone. Want to take risks?"
                            data-confirm-text-yes="Yes, IDC"
                          >
                            <i className="fas fa-trash-alt"></i> Archive
                          </a>
                        </div>
                      </div>
                    </div>
                    <p>
                      Assign the task of "
                      <a href="true" onClick={(e) => { e.preventDefault() }}>
                        Redesigning website header and make it responsive AF
                      </a>
                      " to <a href="true" onClick={(e) => { e.preventDefault() }}>Syahdan Ubaidilah</a>.
                    </p>
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
