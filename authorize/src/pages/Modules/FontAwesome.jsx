import React, { Component } from "react";

export class FontAwesome extends Component {
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Font Awesome</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Modules</a>
              </div>
              <div className="breadcrumb-item">Font Awesome</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Font Awesome</h2>
            <p className="section-lead">
              For icons, we use 'Font Awesome 5' made by @fontawesome. You can
              check the full documentation{" "}
              <a href="http://fontawesome.com/">here</a>.
            </p>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Uh! Why?</h4>
                  </div>
                  <div className="card-body">
                    <div className="alert alert-primary alert-has-icon p-4">
                      <div className="alert-icon">
                        <i className="far fa-lightbulb"></i>
                      </div>
                      <div className="alert-body">
                        <div className="alert-title">Oh, no!</div>
                        <p>
                          Font Awesome 5 has many icons and we can not load it
                          on this page, but you can still go to the official
                          page to see the available icons.
                        </p>
                        <p>Font Awesome Free by @fontawesome</p>
                        <p className="mt-3">
                          <a
                            href="https://fontawesome.com/icons"
                            target="_blank"
                            className="btn bg-white text-dark"
                          >
                            Let's Go
                          </a>
                        </p>
                      </div>
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

export default FontAwesome;
