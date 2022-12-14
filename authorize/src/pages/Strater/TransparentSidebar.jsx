import React, { Component } from "react";

export class TransparentSidebar extends Component {
  render() {
    return (
      <>
        <div className="main-content">
          <section className="section">
            <div className="section-header">
              <h1>Transprent Sidebar</h1>
              <div className="section-header-breadcrumb">
                <div className="breadcrumb-item active">
                  <a href="true" onClick={(e) => { e.preventDefault() }}>Dashboard</a>
                </div>
                <div className="breadcrumb-item">
                  <a href="true" onClick={(e) => { e.preventDefault() }}>Layout</a>
                </div>
                <div className="breadcrumb-item">Transprent Sidebar</div>
              </div>
            </div>

            <div className="section-body">
              <h2 className="section-title">This is Example Page</h2>
              <p className="section-lead">
                This page is just an example for you to create your own page.
              </p>
              <div className="card">
                <div className="card-header">
                  <h4>Example Card</h4>
                </div>
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="card-footer bg-whitesmoke">This is card footer</div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default TransparentSidebar;
