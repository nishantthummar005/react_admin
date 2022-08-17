// jsx-a11y/anchor-is-valid
// jsx-a11y/img-redundant-alt
import React, { Component } from "react";
import $ from "jquery";

export class CompArticle extends Component {
  componentDidMount() {
    $("[data-background]").each(function() {
      var me = $(this);
      me.css({
        backgroundImage: "url(" + me.data("background") + ")",
      });
    });
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Article</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Components</a>
              </div>
              <div className="breadcrumb-item">Article</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Articles</h2>
            <p className="section-lead">
              This article component is based on card and flexbox.
            </p>

            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <article className="article">
                  <div className="article-header">
                    <div
                      className="article-image"
                      data-background="../../assets/img/news/img08.jpg"
                    ></div>
                    <div className="article-title">
                      <h2>
                        <a href="true" onClick={(e) => { e.preventDefault() }}>
                          Excepteur sint occaecat cupidatat non proident
                        </a>
                      </h2>
                    </div>
                  </div>
                  <div className="article-details">
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                    <div className="article-cta">
                      <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <article className="article">
                  <div className="article-header">
                    <div
                      className="article-image"
                      data-background="../../assets/img/news/img04.jpg"
                    ></div>
                    <div className="article-title">
                      <h2>
                        <a href="true" onClick={(e) => { e.preventDefault() }}>
                          Excepteur sint occaecat cupidatat non proident
                        </a>
                      </h2>
                    </div>
                  </div>
                  <div className="article-details">
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                    <div className="article-cta">
                      <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <article className="article">
                  <div className="article-header">
                    <div
                      className="article-image"
                      data-background="../../assets/img/news/img09.jpg"
                    ></div>
                    <div className="article-title">
                      <h2>
                        <a href="true" onClick={(e) => { e.preventDefault() }}>
                          Excepteur sint occaecat cupidatat non proident
                        </a>
                      </h2>
                    </div>
                  </div>
                  <div className="article-details">
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                    <div className="article-cta">
                      <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <article className="article">
                  <div className="article-header">
                    <div
                      className="article-image"
                      data-background="../../assets/img/news/img12.jpg"
                    ></div>
                    <div className="article-title">
                      <h2>
                        <a href="true" onClick={(e) => { e.preventDefault() }}>
                          Excepteur sint occaecat cupidatat non proident
                        </a>
                      </h2>
                    </div>
                  </div>
                  <div className="article-details">
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                    <div className="article-cta">
                      <a href="true" onClick={(e) => { e.preventDefault() }} className="btn btn-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <h2 className="section-title">Article Style B</h2>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <article className="article article-style-b">
                  <div className="article-header">
                    <div
                      className="article-image"
                      data-background="../../assets/img/news/img13.jpg"
                    ></div>
                    <div className="article-badge">
                      <div className="article-badge-item bg-danger">
                        <i className="fas fa-fire"></i> Trending
                      </div>
                    </div>
                  </div>
                  <div className="article-details">
                    <div className="article-title">
                      <h2>
                        <a href="true" onClick={(e) => { e.preventDefault() }}>
                          Excepteur sint occaecat cupidatat non proident
                        </a>
                      </h2>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                    <div className="article-cta">
                      <a href="true" onClick={(e) => { e.preventDefault() }}>
                        Read More <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <article className="article article-style-b">
                  <div className="article-header">
                    <div
                      className="article-image"
                      data-background="../../assets/img/news/img15.jpg"
                    ></div>
                  </div>
                  <div className="article-details">
                    <div className="article-title">
                      <h2>
                        <a href="true" onClick={(e) => { e.preventDefault() }}>
                          Excepteur sint occaecat cupidatat non proident
                        </a>
                      </h2>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                    <div className="article-cta">
                      <a href="true" onClick={(e) => { e.preventDefault() }}>
                        Read More <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <article className="article article-style-b">
                  <div className="article-header">
                    <div
                      className="article-image"
                      data-background="../../assets/img/news/img07.jpg"
                    ></div>
                  </div>
                  <div className="article-details">
                    <div className="article-title">
                      <h2>
                        <a href="true" onClick={(e) => { e.preventDefault() }}>
                          Excepteur sint occaecat cupidatat non proident
                        </a>
                      </h2>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                    <div className="article-cta">
                      <a href="true" onClick={(e) => { e.preventDefault() }}>
                        Read More <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <article className="article article-style-b">
                  <div className="article-header">
                    <div
                      className="article-image"
                      data-background="../../assets/img/news/img02.jpg"
                    ></div>
                  </div>
                  <div className="article-details">
                    <div className="article-title">
                      <h2>
                        <a href="true" onClick={(e) => { e.preventDefault() }}>
                          Excepteur sint occaecat cupidatat non proident
                        </a>
                      </h2>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                    <div className="article-cta">
                      <a href="true" onClick={(e) => { e.preventDefault() }}>
                        Read More <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <h2 className="section-title">Article Style C</h2>
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4">
                <article className="article article-style-c">
                  <div className="article-header">
                    <div
                      className="article-image"
                      data-background="../../assets/img/news/img13.jpg"
                    ></div>
                  </div>
                  <div className="article-details">
                    <div className="article-category">
                      <a href="true" onClick={(e) => { e.preventDefault() }}>News</a> <div className="bullet"></div>{" "}
                      <a href="true" onClick={(e) => { e.preventDefault() }}>5 Days</a>
                    </div>
                    <div className="article-title">
                      <h2>
                        <a href="true" onClick={(e) => { e.preventDefault() }}>
                          Excepteur sint occaecat cupidatat non proident
                        </a>
                      </h2>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                    <div className="article-user">
                      <img
                        alt="something"
                        src="../../assets/img/avatar/avatar-1.png"
                      />
                      <div className="article-user-details">
                        <div className="user-detail-name">
                          <a href="true" onClick={(e) => { e.preventDefault() }}>Hasan Basri</a>
                        </div>
                        <div className="text-job">Web Developer</div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <article className="article article-style-c">
                  <div className="article-header">
                    <div
                      className="article-image"
                      data-background="../../assets/img/news/img14.jpg"
                    ></div>
                  </div>
                  <div className="article-details">
                    <div className="article-category">
                      <a href="true" onClick={(e) => { e.preventDefault() }}>News</a> <div className="bullet"></div>{" "}
                      <a href="true" onClick={(e) => { e.preventDefault() }}>5 Days</a>
                    </div>
                    <div className="article-title">
                      <h2>
                        <a href="true" onClick={(e) => { e.preventDefault() }}>
                          Excepteur sint occaecat cupidatat non proident
                        </a>
                      </h2>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                    <div className="article-user">
                      <img
                        alt="something"
                        src="../../assets/img/avatar/avatar-3.png"
                      />
                      <div className="article-user-details">
                        <div className="user-detail-name">
                          <a href="true" onClick={(e) => { e.preventDefault() }}>Rizal Fakhri</a>
                        </div>
                        <div className="text-job">UX Designer</div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <article className="article article-style-c">
                  <div className="article-header">
                    <div
                      className="article-image"
                      data-background="../../assets/img/news/img01.jpg"
                    ></div>
                  </div>
                  <div className="article-details">
                    <div className="article-category">
                      <a href="true" onClick={(e) => { e.preventDefault() }}>News</a> <div className="bullet"></div>{" "}
                      <a href="true" onClick={(e) => { e.preventDefault() }}>5 Days</a>
                    </div>
                    <div className="article-title">
                      <h2>
                        <a href="true" onClick={(e) => { e.preventDefault() }}>
                          Excepteur sint occaecat cupidatat non proident
                        </a>
                      </h2>
                    </div>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                    <div className="article-user">
                      <img
                        alt="something"
                        src="../../assets/img/avatar/avatar-2.png"
                      />
                      <div className="article-user-details">
                        <div className="user-detail-name">
                          <a href="true" onClick={(e) => { e.preventDefault() }}>Irwansyah Saputra</a>
                        </div>
                        <div className="text-job">Mobile Developer</div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CompArticle;
