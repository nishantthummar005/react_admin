/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import adminContext from "../../../context/auth/adminContext";

const UserDropdown = (props) => {
  const { userDetail } = props;
  const history = useHistory();
  const admincontext = useContext(adminContext);
  const { adminData, getAdminData } = admincontext;
  useEffect(() => {
    getAdminData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <li className="dropdown">
      <a
        href="true" onClick={(e) => { e.preventDefault() }}
        data-toggle="dropdown"
        className="nav-link dropdown-toggle nav-link-lg nav-link-user"
      >
        <img
          alt="something"
          src={userDetail.userImg}
          className="rounded-circle mr-1"
        />
        <div className="d-sm-none d-lg-inline-block">
          Hi, {adminData.admin_name}
        </div>
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        <div className="dropdown-title">
          Logged in {adminData.date} ago
        </div>

        {userDetail.datas.map((data, idata) => {
          return (
            <NavLink
              key={idata}
              to={data.link}
              activeStyle={{
                color: "#6777ef",
              }}
              exact
              className="dropdown-item has-icon"
            >
              <i className={data.icode} /> {data.title}
            </NavLink>
          );
        })}

        <div className="dropdown-divider" />
        <a href="/auth/login" className="dropdown-item has-icon text-danger"
          onClick={() => {
            localStorage.removeItem('token');
            history.push('/auth/login');
          }} >
          <i className={userDetail.logoutIcon} /> {userDetail.logoutTitle}
        </a>
      </div>
    </li>
  );
}

export default UserDropdown;
