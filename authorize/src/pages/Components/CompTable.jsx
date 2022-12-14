import React, { Component } from "react";
import CompDataTable from "../../js/CompDataTable";
import ProgressHeightWidth from "../../js/ProgressHeightWidth";

export class CompTable extends Component {
  componentDidMount() {
    ProgressHeightWidth();
    CompDataTable();
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Table</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Components</a>
              </div>
              <div className="breadcrumb-item">Table</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Table</h2>
            <p className="section-lead">
              Example of some Bootstrap table components.
            </p>

            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Simple Table</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered table-md">
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Created At</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Irwansyah Saputra</td>
                          <td>2017-01-09</td>
                          <td>
                            <div className="badge badge-success">Active</div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Hasan Basri</td>
                          <td>2017-01-09</td>
                          <td>
                            <div className="badge badge-success">Active</div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Kusnadi</td>
                          <td>2017-01-11</td>
                          <td>
                            <div className="badge badge-danger">Not Active</div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Rizal Fakhri</td>
                          <td>2017-01-11</td>
                          <td>
                            <div className="badge badge-success">Active</div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer text-right">
                    <nav className="d-inline-block">
                      <ul className="pagination mb-0">
                        <li className="page-item disabled">
                          <a className="page-link" href="true" onClick={(e) => { e.preventDefault() }} tabindex="-1">
                            <i className="fas fa-chevron-left"></i>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="true" onClick={(e) => { e.preventDefault() }}>
                            1 <span className="sr-only">(current)</span>
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
                          <a className="page-link" href="true" onClick={(e) => { e.preventDefault() }}>
                            <i className="fas fa-chevron-right"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Full Width</h4>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-striped table-md">
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Created At</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Irwansyah Saputra</td>
                          <td>2017-01-09</td>
                          <td>
                            <div className="badge badge-success">Active</div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Hasan Basri</td>
                          <td>2017-01-09</td>
                          <td>
                            <div className="badge badge-success">Active</div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Kusnadi</td>
                          <td>2017-01-11</td>
                          <td>
                            <div className="badge badge-danger">Not Active</div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Rizal Fakhri</td>
                          <td>2017-01-11</td>
                          <td>
                            <div className="badge badge-success">Active</div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Isnap Kiswandi</td>
                          <td>2017-01-17</td>
                          <td>
                            <div className="badge badge-success">Active</div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer text-right">
                    <nav className="d-inline-block">
                      <ul className="pagination mb-0">
                        <li className="page-item disabled">
                          <a className="page-link" href="true" onClick={(e) => { e.preventDefault() }} tabindex="-1">
                            <i className="fas fa-chevron-left"></i>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="true" onClick={(e) => { e.preventDefault() }}>
                            1 <span className="sr-only">(current)</span>
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
                          <a className="page-link" href="true" onClick={(e) => { e.preventDefault() }}>
                            <i className="fas fa-chevron-right"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Advanced Table</h4>
                    <div className="card-header-form">
                      <form>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                          <div className="input-group-btn">
                            <button className="btn btn-primary">
                              <i className="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <tr>
                          <th>
                            <div className="custom-checkbox custom-control">
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
                          <th>Task Name</th>
                          <th>Progress</th>
                          <th>Members</th>
                          <th>Due Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                        <tr>
                          <td className="p-0 text-center">
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
                          <td>Create a mobile app</td>
                          <td className="align-middle">
                            <div
                              className="progress"
                              data-height="4"
                              data-toggle="tooltip"
                              title="100%"
                            >
                              <div
                                className="progress-bar bg-success"
                                data-width="100"
                              ></div>
                            </div>
                          </td>
                          <td>
                            <img
                              alt="something"
                              src="../assets/img/avatar/avatar-5.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Wildan Ahdian"
                            />
                          </td>
                          <td>2018-01-20</td>
                          <td>
                            <div className="badge badge-success">Completed</div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-0 text-center">
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
                          <td>Redesign homepage</td>
                          <td className="align-middle">
                            <div
                              className="progress"
                              data-height="4"
                              data-toggle="tooltip"
                              title="0%"
                            >
                              <div className="progress-bar" data-width="0"></div>
                            </div>
                          </td>
                          <td>
                            <img
                              alt="something"
                              src="../assets/img/avatar/avatar-1.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Nur Alpiana"
                            />
                            <img
                              alt="something"
                              src="../assets/img/avatar/avatar-3.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Hariono Yusup"
                            />
                            <img
                              alt="something"
                              src="../assets/img/avatar/avatar-4.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Bagus Dwi Cahya"
                            />
                          </td>
                          <td>2018-04-10</td>
                          <td>
                            <div className="badge badge-info">Todo</div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-0 text-center">
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
                          <td>Backup database</td>
                          <td className="align-middle">
                            <div
                              className="progress"
                              data-height="4"
                              data-toggle="tooltip"
                              title="70%"
                            >
                              <div
                                className="progress-bar bg-warning"
                                data-width="70"
                              ></div>
                            </div>
                          </td>
                          <td>
                            <img
                              alt="something"
                              src="../assets/img/avatar/avatar-1.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Rizal Fakhri"
                            />
                            <img
                              alt="something"
                              src="../assets/img/avatar/avatar-2.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Hasan Basri"
                            />
                          </td>
                          <td>2018-01-29</td>
                          <td>
                            <div className="badge badge-warning">In Progress</div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-0 text-center">
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
                          <td>Input data</td>
                          <td className="align-middle">
                            <div
                              className="progress"
                              data-height="4"
                              data-toggle="tooltip"
                              title="100%"
                            >
                              <div
                                className="progress-bar bg-success"
                                data-width="100"
                              ></div>
                            </div>
                          </td>
                          <td>
                            <img
                              alt="something"
                              src="../assets/img/avatar/avatar-2.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Rizal Fakhri"
                            />
                            <img
                              alt="something"
                              src="../assets/img/avatar/avatar-5.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Isnap Kiswandi"
                            />
                            <img
                              alt="something"
                              src="../assets/img/avatar/avatar-4.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Yudi Nawawi"
                            />
                            <img
                              alt="something"
                              src="../assets/img/avatar/avatar-1.png"
                              className="rounded-circle"
                              width="35"
                              data-toggle="tooltip"
                              title="Khaerul Anwar"
                            />
                          </td>
                          <td>2018-01-16</td>
                          <td>
                            <div className="badge badge-success">Completed</div>
                          </td>
                          <td>
                            <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                              Detail
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Sortable Table</h4>
                    <div className="card-header-action">
                      <form>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                          <div className="input-group-btn">
                            <button className="btn btn-primary">
                              <i className="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-striped" id="sortable-table">
                        <thead>
                          <tr>
                            <th className="text-center">
                              <i className="fas fa-th"></i>
                            </th>
                            <th>Task Name</th>
                            <th>Progress</th>
                            <th>Members</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="sort-handler">
                                <i className="fas fa-th"></i>
                              </div>
                            </td>
                            <td>Create a mobile app</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="100%"
                              >
                                <div
                                  className="progress-bar bg-success"
                                  data-width="100"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-5.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Wildan Ahdian"
                              />
                            </td>
                            <td>2018-01-20</td>
                            <td>
                              <div className="badge badge-success">Completed</div>
                            </td>
                            <td>
                              <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="sort-handler">
                                <i className="fas fa-th"></i>
                              </div>
                            </td>
                            <td>Redesign homepage</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="0%"
                              >
                                <div className="progress-bar" data-width="0"></div>
                              </div>
                            </td>
                            <td>
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-1.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Nur Alpiana"
                              />
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-3.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Hariono Yusup"
                              />
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-4.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Bagus Dwi Cahya"
                              />
                            </td>
                            <td>2018-04-10</td>
                            <td>
                              <div className="badge badge-info">Todo</div>
                            </td>
                            <td>
                              <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="sort-handler">
                                <i className="fas fa-th"></i>
                              </div>
                            </td>
                            <td>Backup database</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="70%"
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  data-width="70"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-1.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Rizal Fakhri"
                              />
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-2.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Hasan Basri"
                              />
                            </td>
                            <td>2018-01-29</td>
                            <td>
                              <div className="badge badge-warning">In Progress</div>
                            </td>
                            <td>
                              <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="sort-handler">
                                <i className="fas fa-th"></i>
                              </div>
                            </td>
                            <td>Input data</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="100%"
                              >
                                <div
                                  className="progress-bar bg-success"
                                  data-width="100"
                                ></div>
                              </div>
                            </td>
                            <td>
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-2.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Rizal Fakhri"
                              />
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-5.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Isnap Kiswandi"
                              />
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-4.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Yudi Nawawi"
                              />
                              <img
                                alt="something"
                                src="../assets/img/avatar/avatar-1.png"
                                className="rounded-circle"
                                width="35"
                                data-toggle="tooltip"
                                title="Khaerul Anwar"
                              />
                            </td>
                            <td>2018-01-16</td>
                            <td>
                              <div className="badge badge-success">Completed</div>
                            </td>
                            <td>
                              <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export default CompTable;
