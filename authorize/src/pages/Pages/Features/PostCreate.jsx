import React, { Component } from "react";
import $ from "jquery";
import * as jQuery from "jquery";
import SummerNoteJs from "../../../js/summernote";

export class PostCreate extends Component {
  componentDidMount() {
    $("select").selectric();
    $.uploadPreview({
      input_field: "#image-upload", // Default: .image-upload
      preview_box: "#image-preview", // Default: .image-preview
      label_field: "#image-label", // Default: .image-label
      label_default: "Choose File", // Default: Choose File
      label_selected: "Change File", // Default: Change File
      no_label: false, // Default: false
      success_callback: null, // Default: null
    });
    $(".inputtags").tagsinput("items");
    SummerNoteJs();
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <div className="section-header-back">
              <a href="features-posts.html" className="btn btn-icon">
                <i className="fas fa-arrow-left"></i>
              </a>
            </div>
            <h1>Create New Post</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="true" onClick={(e) => { e.preventDefault() }}>Posts</a>
              </div>
              <div className="breadcrumb-item">Create New Post</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Create New Post</h2>
            <p className="section-lead">
              On this page you can create a new post and fill in all fields.
            </p>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Write Your Post</h4>
                  </div>
                  <div className="card-body">
                    <div className="form-group row mb-4">
                      <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                        Title
                      </label>
                      <div className="col-sm-12 col-md-7">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row mb-4">
                      <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                        Category
                      </label>
                      <div className="col-sm-12 col-md-7">
                        <select className="form-control selectric">
                          <option>Tech</option>
                          <option>News</option>
                          <option>Political</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row mb-4">
                      <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                        Content
                      </label>
                      <div className="col-sm-12 col-md-7">
                        <textarea className="summernote-simple"></textarea>
                      </div>
                    </div>
                    <div className="form-group row mb-4">
                      <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                        Thumbnail
                      </label>
                      <div className="col-sm-12 col-md-7">
                        <div id="image-preview" className="image-preview">
                          <label htmlFor="image-upload" id="image-label">
                            Choose File
                          </label>
                          <input type="file" name="image" id="image-upload" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row mb-4">
                      <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                        Tags
                      </label>
                      <div className="col-sm-12 col-md-7">
                        <input type="text" className="form-control inputtags" />
                      </div>
                    </div>
                    <div className="form-group row mb-4">
                      <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                        Status
                      </label>
                      <div className="col-sm-12 col-md-7">
                        <select className="form-control selectric">
                          <option>Publish</option>
                          <option>Draft</option>
                          <option>Pending</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row mb-4">
                      <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3"></label>
                      <div className="col-sm-12 col-md-7">
                        <button className="btn btn-primary">Create Post</button>
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

export default PostCreate;
