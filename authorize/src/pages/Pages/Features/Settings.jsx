import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/admin/breadcrumb";

export default function Settings() {
  return (
    <div className="main-content">
      <section className="section">
        <Breadcrumb title="Admin Settings" />

        <div className="section-body">
          <h2 className="section-title">Overview</h2>
          <p className="section-lead">
            Organize and adjust all settings about this site.
          </p>

          <div className="row">
            <div className="col-lg-6">
              <div className="card card-large-icons">
                <div className="card-icon bg-primary text-white">
                  <i className="fas fa-cog"></i>
                </div>
                <div className="card-body">
                  <h4>General</h4>
                  <p>
                    General settings such as, site title, site description,
                    address and so on.
                  </p>
                  <Link to="/feature/setting-detail/general" className="card-cta">
                    Change Setting <i className="fas fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card card-large-icons">
                <div className="card-icon bg-primary text-white">
                  <i className="fas fa-search"></i>
                </div>
                <div className="card-body">
                  <h4>SEO</h4>
                  <p>
                    Search engine optimization settings, such as meta tags and
                    social media.
                  </p>
                  <Link to="/feature/setting-detail/seo" className="card-cta">
                    Change Setting <i className="fas fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card card-large-icons">
                <div className="card-icon bg-primary text-white">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="card-body">
                  <h4>Email</h4>
                  <p>
                    Email SMTP settings, notifications and others related to
                    email.
                  </p>
                  <Link to="/feature/setting-detail/email" className="card-cta">
                    Change Setting <i className="fas fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div> 
            <div className="col-lg-6">
              <div className="card card-large-icons">
                <div className="card-icon bg-primary text-white">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="card-body">
                  <h4>Security</h4>
                  <p>
                    Security settings such as firewalls, server accounts and
                    others.
                  </p>
                  <Link to="/feature/setting-detail/security" className="card-cta">
                    Change Setting <i className="fas fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </div>
  );
}
