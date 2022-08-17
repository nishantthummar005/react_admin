import React, { Component } from "react";
import CompDataTables from "../../../js/CompDataTable";

export class Posts extends Component {
  componentDidMount() {
    CompDataTables();
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Posts</h1>
            <div className="section-header-button">
              <a href="features-post-create.html" className="btn btn-primary">
                Add New
              </a>
            </div>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Posts</a>
              </div>
              <div className="breadcrumb-item">All Posts</div>
            </div>
          </div>
          <div className="section-body">
            <h2 className="section-title">Posts</h2>
            <p className="section-lead">
              You can manage all posts, such as editing, deleting and more.
            </p>

            <div className="row">
              <div className="col-12">
                <div className="card mb-0">
                  <div className="card-body">
                    <ul className="nav nav-pills">
                      <li className="nav-item">
                        <a className="nav-link active" href="true" onClick={(e) => { e.preventDefault() }}>
                          All <span className="badge badge-white">5</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="true" onClick={(e) => { e.preventDefault() }}>
                          Draft <span className="badge badge-primary">1</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="true" onClick={(e) => { e.preventDefault() }}>
                          Pending <span className="badge badge-primary">1</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="true" onClick={(e) => { e.preventDefault() }}>
                          Trash <span className="badge badge-primary">0</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>All Posts</h4>
                  </div>
                  <div className="card-body">
                    <div className="float-left">
                      <select className="form-control selectric">
                        <option>Action For Selected</option>
                        <option>Move to Draft</option>
                        <option>Move to Pending</option>
                        <option>Delete Pemanently</option>
                      </select>
                    </div>
                    <div className="float-right">
                      <form>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary">
                              <i className="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="clearfix mb-3"></div>

                    <div className="table-responsive">
                      <table className="table table-striped">
                        <tr>
                          <th className="text-center pt-2">
                            <div className="custom-checkbox custom-checkbox-table custom-control">
                              <input
                                type="checkbox"
                                data-checkboxes="mygroup"
                                data-checkbox-role="dad"
                                className="custom-control-input"
                                id="checkbox-all"
                              />
                              <label
                                htmlFor="checkbox-all"
                                className="custom-control-label"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </th>
                          <th>Title</th>
                          <th>Category</th>
                          <th>Author</th>
                          <th>Created At</th>
                          <th>Status</th>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-checkbox custom-control">
                              <input
                                type="checkbox"
                                data-checkboxes="mygroup"
                                className="custom-control-input"
                                id="checkbox-2"
                              />
                              <label
                                htmlFor="checkbox-2"
                                className="custom-control-label"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            Laravel 5 Tutorial: Introduction
                            <div className="table-links">
                              <a href="true" onClick={(e) => { e.preventDefault() }}>View</a>
                              <div className="bullet"></div>
                              <a href="true" onClick={(e) => { e.preventDefault() }}>Edit</a>
                              <div className="bullet"></div>
                              <a href="true" onClick={(e) => { e.preventDefault() }} className="text-danger">
                                Trash
                              </a>
                            </div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }}>Web Developer</a>,
                            <a href="true" onClick={(e) => { e.preventDefault() }}>Tutorial</a>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }}>
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-5.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="title"
                                title=""
                              />{" "}
                              <div className="d-inline-block ml-1">
                                Rizal Fakhri
                              </div>
                            </a>
                          </td>
                          <td>2018-01-20</td>
                          <td>
                            <div className="badge badge-primary">Published</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-checkbox custom-control">
                              <input
                                type="checkbox"
                                data-checkboxes="mygroup"
                                className="custom-control-input"
                                id="checkbox-3"
                              />
                              <label
                                htmlFor="checkbox-3"
                                className="custom-control-label"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            Laravel 5 Tutorial: Installing
                            <div className="table-links">
                              <a href="true" onClick={(e) => { e.preventDefault() }}>View</a>
                              <div className="bullet"></div>
                              <a href="true" onClick={(e) => { e.preventDefault() }}>Edit</a>
                              <div className="bullet"></div>
                              <a href="true" onClick={(e) => { e.preventDefault() }} className="text-danger">
                                Trash
                              </a>
                            </div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }}>Web Developer</a>,
                            <a href="true" onClick={(e) => { e.preventDefault() }}>Tutorial</a>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }}>
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-5.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="title"
                                title=""
                              />{" "}
                              <div className="d-inline-block ml-1">
                                Rizal Fakhri
                              </div>
                            </a>
                          </td>
                          <td>2018-01-20</td>
                          <td>
                            <div className="badge badge-primary">Published</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-checkbox custom-control">
                              <input
                                type="checkbox"
                                data-checkboxes="mygroup"
                                className="custom-control-input"
                                id="checkbox-4"
                              />
                              <label
                                htmlFor="checkbox-4"
                                className="custom-control-label"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            Laravel 5 Tutorial: MVC
                            <div className="table-links">
                              <a href="true" onClick={(e) => { e.preventDefault() }}>View</a>
                              <div className="bullet"></div>
                              <a href="true" onClick={(e) => { e.preventDefault() }}>Edit</a>
                              <div className="bullet"></div>
                              <a href="true" onClick={(e) => { e.preventDefault() }} className="text-danger">
                                Trash
                              </a>
                            </div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }}>Web Developer</a>,
                            <a href="true" onClick={(e) => { e.preventDefault() }}>Tutorial</a>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }}>
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-5.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="title"
                                title=""
                              />{" "}
                              <div className="d-inline-block ml-1">
                                Rizal Fakhri
                              </div>
                            </a>
                          </td>
                          <td>2018-01-20</td>
                          <td>
                            <div className="badge badge-primary">Published</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-checkbox custom-control">
                              <input
                                type="checkbox"
                                data-checkboxes="mygroup"
                                className="custom-control-input"
                                id="checkbox-5"
                              />
                              <label
                                htmlFor="checkbox-5"
                                className="custom-control-label"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            Laravel 5 Tutorial: CRUD
                            <div className="table-links">
                              <a href="true" onClick={(e) => { e.preventDefault() }}>View</a>
                              <div className="bullet"></div>
                              <a href="true" onClick={(e) => { e.preventDefault() }}>Edit</a>
                              <div className="bullet"></div>
                              <a href="true" onClick={(e) => { e.preventDefault() }} className="text-danger">
                                Trash
                              </a>
                            </div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }}>Web Developer</a>,
                            <a href="true" onClick={(e) => { e.preventDefault() }}>Tutorial</a>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }}>
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-5.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="title"
                                title=""
                              />{" "}
                              <div className="d-inline-block ml-1">
                                Rizal Fakhri
                              </div>
                            </a>
                          </td>
                          <td>2018-01-20</td>
                          <td>
                            <div className="badge badge-danger">Draft</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-checkbox custom-control">
                              <input
                                type="checkbox"
                                data-checkboxes="mygroup"
                                className="custom-control-input"
                                id="checkbox-1"
                              />
                              <label
                                htmlFor="checkbox-1"
                                className="custom-control-label"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            Laravel 5 Tutorial: Deployment
                            <div className="table-links">
                              <a href="true" onClick={(e) => { e.preventDefault() }}>View</a>
                              <div className="bullet"></div>
                              <a href="true" onClick={(e) => { e.preventDefault() }}>Edit</a>
                              <div className="bullet"></div>
                              <a href="true" onClick={(e) => { e.preventDefault() }} className="text-danger">
                                Trash
                              </a>
                            </div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }}>Web Developer</a>,
                            <a href="true" onClick={(e) => { e.preventDefault() }}>Tutorial</a>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }}>
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-5.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="title"
                                title=""
                              />{" "}
                              <div className="d-inline-block ml-1">
                                Rizal Fakhri
                              </div>
                            </a>
                          </td>
                          <td>2018-01-20</td>
                          <td>
                            <div className="badge badge-warning">Pending</div>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div className="float-right">
                      <nav>
                        <ul className="pagination">
                          <li className="page-item disabled">
                            <a className="page-link" href="true" onClick={(e) => { e.preventDefault() }} aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                              <span className="sr-only">Previous</span>
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="true" onClick={(e) => { e.preventDefault() }}>
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="true" onClick={(e) => { e.preventDefault() }}>
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="true" onClick={(e) => { e.preventDefault() }}>
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="true" onClick={(e) => { e.preventDefault() }} aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                              <span className="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
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

export default Posts;
