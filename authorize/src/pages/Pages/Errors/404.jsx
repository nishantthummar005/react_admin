import React, { Component } from "react"; 
export class Error404 extends Component {
  render() {
    return (
      <div id="app">
        <section className="section">
          <div className="container text-center mt-5">
            <div className="page-error">
              <div className="page-inner pt-100">
                <h1>404</h1>
                <div className="page-description">
                  The page you were looking for could not be found.
                </div> 
              </div>
            </div> 
          </div>
        </section>
      </div>
    );
  }
}

export default Error404;
