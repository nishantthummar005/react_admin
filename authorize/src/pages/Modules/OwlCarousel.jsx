import React, { Component } from "react";
import $ from "jquery";

export class OwlCarousel extends Component {
  componentDidMount() {
    $("#slider1,#slider2").owlCarousel({
      items: 1,
      nav: true,
      navText: [
        '<i className="fas fa-chevron-left"></i>',
        '<i className="fas fa-chevron-right"></i>',
      ],
    });
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Owl Carousel</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Modules</a>
              </div>
              <div className="breadcrumb-item">Owl Carousel</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Owl Carousel</h2>
            <p className="section-lead">
              Display multiple images alternately within a few seconds.
            </p>

            <div className="row">
              <div className="col-12 col-sm-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Sliders</h4>
                  </div>
                  <div className="card-body">
                    <div className="owl-carousel owl-theme slider" id="slider1">
                      <div>
                        <img alt="something" src="../assets/img/news/img01.jpg" />
                      </div>
                      <div>
                        <img alt="something" src="../assets/img/news/img08.jpg" />
                      </div>
                      <div>
                        <img alt="something" src="../assets/img/news/img10.jpg" />
                      </div>
                      <div>
                        <img alt="something" src="../assets/img/news/img09.jpg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Sliders (Caption)</h4>
                  </div>
                  <div className="card-body">
                    <div className="owl-carousel owl-theme slider" id="slider2">
                      <div>
                        <img alt="something" src="../assets/img/news/img01.jpg" />
                        <div className="slider-caption">
                          <div className="slider-title">Image 1</div>
                          <div className="slider-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </div>
                        </div>
                      </div>
                      <div>
                        <img alt="something" src="../assets/img/news/img08.jpg" />
                        <div className="slider-caption">
                          <div className="slider-title">Image 2</div>
                          <div className="slider-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </div>
                        </div>
                      </div>
                      <div>
                        <img alt="something" src="../assets/img/news/img10.jpg" />
                        <div className="slider-caption">
                          <div className="slider-title">Image 3</div>
                          <div className="slider-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </div>
                        </div>
                      </div>
                      <div>
                        <img alt="something" src="../assets/img/news/img09.jpg" />
                        <div className="slider-caption">
                          <div className="slider-title">Image 4</div>
                          <div className="slider-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </div>
                        </div>
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

export default OwlCarousel;
