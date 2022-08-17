import React, { Component } from "react";
import { DatImage } from "../../js/DataImage";

export class CompGallery extends Component {
  componentDidMount() {
    DatImage();
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Gallery</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Components</a>
              </div>
              <div className="breadcrumb-item">Gallery</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Gallery</h2>
            <p className="section-lead">
              Grouping multiple images on one component.
            </p>

            <div className="row">
              <div className="col-12 col-sm-12 col-lg-4">
                <div className="row">
                  <div className="col-12 col-sm-6 col-lg-12">
                    <div className="card">
                      <div className="card-header">
                        <h4>Gallery</h4>
                      </div>
                      <div className="card-body">
                        <div className="gallery">
                          <div
                            className="gallery-item"
                            data-image="../../assets/img/news/img01.jpg"
                            data-title="Image 1"
                          ></div>
                          <div
                            className="gallery-item"
                            data-image="../assets/img/news/img02.jpg"
                            data-title="Image 2"
                          ></div>
                          <div
                            className="gallery-item"
                            data-image="../assets/img/news/img03.jpg"
                            data-title="Image 3"
                          ></div>
                          <div
                            className="gallery-item"
                            data-image="../assets/img/news/img04.jpg"
                            data-title="Image 4"
                          ></div>
                          <div
                            className="gallery-item"
                            data-image="../assets/img/news/img05.jpg"
                            data-title="Image 5"
                          ></div>
                          <div
                            className="gallery-item"
                            data-image="../assets/img/news/img06.jpg"
                            data-title="Image 6"
                          ></div>
                          <div
                            className="gallery-item"
                            data-image="../assets/img/news/img07.jpg"
                            data-title="Image 7"
                          ></div>
                          <div
                            className="gallery-item"
                            data-image="../assets/img/news/img08.jpg"
                            data-title="Image 8"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-12">
                    <div className="card">
                      <div className="card-header">
                        <h4>Gallery</h4>
                      </div>
                      <div className="card-body">
                        <div className="gallery">
                          <div
                            className="gallery-item"
                            data-image="../assets/img/news/img05.jpg"
                            data-title="Image 1"
                          ></div>
                          <div
                            className="gallery-item"
                            data-image="../assets/img/news/img08.jpg"
                            data-title="Image 2"
                          ></div>
                          <div
                            className="gallery-item"
                            data-image="../assets/img/news/img04.jpg"
                            data-title="Image 3"
                          ></div>
                          <div
                            className="gallery-item"
                            data-image="../assets/img/news/img11.jpg"
                            data-title="Image 4"
                          ></div>
                          <div
                            className="gallery-item"
                            data-image="../assets/img/news/img02.jpg"
                            data-title="Image 5"
                          ></div>
                          <div
                            className="gallery-item"
                            data-image="../assets/img/news/img05.jpg"
                            data-title="Image 6"
                          ></div>
                          <div
                            className="gallery-item"
                            data-image="../assets/img/news/img03.jpg"
                            data-title="Image 7"
                          ></div>
                          <div
                            className="gallery-item gallery-more"
                            data-image="../assets/img/news/img02.jpg"
                            data-title="Image 8"
                          >
                            <div>+2</div>
                          </div>
                          <div
                            className="gallery-item gallery-hide"
                            data-image="../assets/img/news/img11.jpg"
                            data-title="Image 9"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h4>
                      Gallery <code>.gallery-md</code>
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="gallery gallery-md">
                      <div
                        className="gallery-item"
                        data-image="../assets/img/news/img03.jpg"
                        data-title="Image 1"
                      ></div>
                      <div
                        className="gallery-item"
                        data-image="../assets/img/news/img14.jpg"
                        data-title="Image 2"
                      ></div>
                      <div
                        className="gallery-item"
                        data-image="../assets/img/news/img08.jpg"
                        data-title="Image 3"
                      ></div>
                      <div
                        className="gallery-item"
                        data-image="../assets/img/news/img05.jpg"
                        data-title="Image 4"
                      ></div>
                      <div
                        className="gallery-item"
                        data-image="../assets/img/news/img11.jpg"
                        data-title="Image 5"
                      ></div>
                      <div
                        className="gallery-item"
                        data-image="../assets/img/news/img09.jpg"
                        data-title="Image 6"
                      ></div>
                      <div
                        className="gallery-item"
                        data-image="../assets/img/news/img12.jpg"
                        data-title="Image 8"
                      ></div>
                      <div
                        className="gallery-item"
                        data-image="../assets/img/news/img13.jpg"
                        data-title="Image 9"
                      ></div>
                      <div
                        className="gallery-item"
                        data-image="../assets/img/news/img14.jpg"
                        data-title="Image 10"
                      ></div>
                      <div
                        className="gallery-item"
                        data-image="../assets/img/news/img15.jpg"
                        data-title="Image 11"
                      ></div>
                      <div
                        className="gallery-item gallery-more"
                        data-image="../assets/img/news/img08.jpg"
                        data-title="Image 12"
                      >
                        <div>+2</div>
                      </div>
                      <div
                        className="gallery-item gallery-hide"
                        data-image="../assets/img/news/img01.jpg"
                        data-title="Image 9"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h4>
                      Gallery <code>.gallery-fw</code>
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="gallery gallery-fw" data-item-height="100">
                      <div
                        className="gallery-item"
                        data-image="../assets/img/news/img09.jpg"
                        data-title="Image 1"
                      ></div>
                      <div
                        className="gallery-item"
                        data-image="../assets/img/news/img10.jpg"
                        data-title="Image 2"
                      ></div>
                      <div
                        className="gallery-item gallery-more"
                        data-image="../assets/img/news/img08.jpg"
                        data-title="Image 3"
                      >
                        <div>+2</div>
                      </div>
                      <div
                        className="gallery-item gallery-hide"
                        data-image="../assets/img/news/img01.jpg"
                        data-title="Image 4"
                      ></div>
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

export default CompGallery;
