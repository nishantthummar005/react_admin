// jsx-a11y/anchor-is-valid
// jsx-a11y/img-redundant-alt
import React, { Component } from "react";

export class CompAvatar extends Component {
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Avatar</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Components</a>
              </div>
              <div className="breadcrumb-item">Avatar</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Avatar</h2>
            <p className="section-lead">
              Avatars are user profile pictures. Thanks to{" "}
              <a href="https://picturepan2.github.io/spectre/components/avatars.html">
                Spectre.css
              </a>
              .
            </p>

            <div className="row">
              <div className="col-md-6 col-sm-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Avatar</h4>
                  </div>
                  <div className="card-body">
                    <figure className="avatar mr-2 avatar-xl">
                      <img src="../assets/img/avatar/avatar-1.png" alt="..." />
                    </figure>
                    <figure className="avatar mr-2 avatar-lg">
                      <img src="../assets/img/avatar/avatar-2.png" alt="..." />
                    </figure>
                    <figure className="avatar mr-2">
                      <img src="../assets/img/avatar/avatar-5.png" alt="..." />
                    </figure>
                    <figure className="avatar mr-2 avatar-sm">
                      <img src="../assets/img/avatar/avatar-3.png" alt="..." />
                    </figure>
                    <figure className="avatar mr-2 avatar-xs">
                      <img src="../assets/img/avatar/avatar-4.png" alt="..." />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Avatar Icon</h4>
                  </div>
                  <div className="card-body">
                    <figure className="avatar mr-2 avatar-xl">
                      <img src="../assets/img/avatar/avatar-1.png" alt="..." />
                      <img
                        src="../assets/img/avatar/avatar-5.png"
                        className="avatar-icon"
                        alt="..."
                      />
                    </figure>
                    <figure className="avatar mr-2 avatar-lg">
                      <img src="../assets/img/avatar/avatar-2.png" alt="..." />
                      <img
                        src="../assets/img/avatar/avatar-4.png"
                        className="avatar-icon"
                        alt="..."
                      />
                    </figure>
                    <figure className="avatar mr-2">
                      <img src="../assets/img/avatar/avatar-3.png" alt="..." />
                      <img
                        src="../assets/img/avatar/avatar-3.png"
                        className="avatar-icon"
                        alt="..."
                      />
                    </figure>
                    <figure className="avatar mr-2 avatar-sm">
                      <img src="../assets/img/avatar/avatar-4.png" alt="..." />
                      <img
                        src="../assets/img/avatar/avatar-2.png"
                        className="avatar-icon"
                        alt="..."
                      />
                    </figure>
                    <figure className="avatar mr-2 avatar-xs">
                      <img src="../assets/img/avatar/avatar-5.png" alt="..." />
                      <img
                        src="../assets/img/avatar/avatar-1.png"
                        className="avatar-icon"
                        alt="..."
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Avatar Presence</h4>
                  </div>
                  <div className="card-body">
                    <figure className="avatar mr-2 avatar-xl">
                      <img src="../assets/img/avatar/avatar-1.png" alt="..." />
                      <i className="avatar-presence online"></i>
                    </figure>
                    <figure className="avatar mr-2 avatar-lg">
                      <img src="../assets/img/avatar/avatar-2.png" alt="..." />
                      <i className="avatar-presence busy"></i>
                    </figure>
                    <figure className="avatar mr-2">
                      <img src="../assets/img/avatar/avatar-3.png" alt="..." />
                      <i className="avatar-presence away"></i>
                    </figure>
                    <figure className="avatar mr-2 avatar-sm">
                      <img src="../assets/img/avatar/avatar-4.png" alt="..." />
                      <i className="avatar-presence offline"></i>
                    </figure>
                    <figure className="avatar mr-2 avatar-xs">
                      <img src="../assets/img/avatar/avatar-5.png" alt="..." />
                      <i className="avatar-presence online"></i>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Avatar Initial</h4>
                  </div>
                  <div className="card-body">
                    <figure
                      className="avatar mr-2 avatar-xl"
                      data-initial="UM"
                    ></figure>
                    <figure
                      className="avatar mr-2 avatar-lg bg-danger text-white"
                      data-initial="UM"
                    ></figure>
                    <figure
                      className="avatar mr-2 bg-warning text-white"
                      data-initial="UM"
                    ></figure>
                    <figure
                      className="avatar mr-2 avatar-sm bg-success text-white"
                      data-initial="UM"
                    ></figure>
                    <figure
                      className="avatar mr-2 avatar-xs bg-info text-white"
                      data-initial="UM"
                    ></figure>
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

export default CompAvatar;
