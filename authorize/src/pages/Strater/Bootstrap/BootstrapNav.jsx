import React from "react";

export default function BootstrapNav() {
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Nav</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="true" onClick={(e) => { e.preventDefault() }}>Dashboard</a>
            </div>
            <div className="breadcrumb-item">
              <a href="true" onClick={(e) => { e.preventDefault() }}>Bootstrap Components</a>
            </div>
            <div className="breadcrumb-item">Nav</div>
          </div>
        </div>

        <div className="section-body">
          <h2 className="section-title">Navs</h2>
          <p className="section-lead">
            Examples for how to use Bootstrap’s included navigation components.
          </p>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Base Nav</h4>
                </div>
                <div className="card-body">
                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link active" href="true" onClick={(e) => { e.preventDefault() }}>
                        Active
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true" onClick={(e) => { e.preventDefault() }}>
                        Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true" onClick={(e) => { e.preventDefault() }}>
                        Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="true" onClick={(e) => { e.preventDefault() }}>
                        Disabled
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>Vertical</h4>
                </div>
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link active" href="true" onClick={(e) => { e.preventDefault() }}>
                        Active
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true" onClick={(e) => { e.preventDefault() }}>
                        Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true" onClick={(e) => { e.preventDefault() }}>
                        Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="true" onClick={(e) => { e.preventDefault() }}>
                        Disabled
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4>Tabs</h4>
                </div>
                <div className="card-body">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a className="nav-link active" href="true" onClick={(e) => { e.preventDefault() }}>
                        Active
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true" onClick={(e) => { e.preventDefault() }}>
                        Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true" onClick={(e) => { e.preventDefault() }}>
                        Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="true" onClick={(e) => { e.preventDefault() }}>
                        Disabled
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4>Pills</h4>
                </div>
                <div className="card-body">
                  <div className="section-title mt-0">Simple</div>
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a className="nav-link active" href="true" onClick={(e) => { e.preventDefault() }}>
                        Active
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true" onClick={(e) => { e.preventDefault() }}>
                        Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true" onClick={(e) => { e.preventDefault() }}>
                        Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="true" onClick={(e) => { e.preventDefault() }}>
                        Disabled
                      </a>
                    </li>
                  </ul>
                  <div className="section-title">Icon</div>
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a className="nav-link active" href="true" onClick={(e) => { e.preventDefault() }}>
                        <i className="fas fa-home"></i> Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true" onClick={(e) => { e.preventDefault() }}>
                        <i className="fas fa-user"></i> Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true" onClick={(e) => { e.preventDefault() }}>
                        <i className="fas fa-cog"></i> Setting
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
