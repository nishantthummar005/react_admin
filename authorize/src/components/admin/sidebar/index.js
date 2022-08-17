/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Data } from "./data";
import "../../../js/js/scripts";
import "../../../js/js/stisla";
import adminContext from "../../../context/auth/adminContext";
// import SidebarGlobal from "../../../js/SidebarGlobal";

const SideBar = () => {
  const admincontext = useContext(adminContext);
  const { logout } = admincontext;

  return (
    <div className="main-sidebar">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <Link to="/"> Nishant Thummar </Link>
        </div>
        <div className="sidebar-brand sidebar-brand-sm">
          <Link to="/"> NT </Link>
        </div>
        <ul className="sidebar-menu mb-5">

          {Data.menus.map((menu, iMenu) => {
            let comp;
            if (menu.header) {
              comp = (
                <li key={iMenu} className="menu-header">

                  {menu.name}
                </li>
              );
            } else if (menu.dropdown) {
              if (menu.active) {
                comp = (
                  <li key={iMenu} className="nav-item dropdown active">
                    <a href="true" onClick={(e) => { e.preventDefault() }} className="nav-link has-dropdown">
                      <i className={menu.icon} /> <span> {menu.name} </span>
                    </a>
                    <ul className="dropdown-menu">

                      {menu.children.map((submenu, iSubmenu) => {
                        let subComp;
                        if (submenu.active) {
                          if (submenu.beep) {
                            subComp = (
                              <li key={iSubmenu} className="active">
                                <NavLink
                                  activeStyle={{
                                    color: " #6777ef",
                                    fontWeight: "600",
                                  }}
                                  exact
                                  className="beep beep-sidebar"
                                  to={submenu.url}
                                >

                                  {submenu.name}
                                </NavLink>
                              </li>
                            );
                          } else {
                            subComp = (
                              <li key={iSubmenu}>
                                <NavLink
                                  activeStyle={{
                                    color: " #6777ef",
                                    fontWeight: "600",
                                  }}
                                  exact
                                  to={submenu.url}
                                >

                                  {submenu.name}
                                </NavLink>
                              </li>
                            );
                          }
                        } else if (submenu.beep) {
                          subComp = (
                            <li key={iSubmenu}>
                              <NavLink
                                activeStyle={{
                                  color: " #6777ef",
                                  fontWeight: "600",
                                }}
                                exact
                                className="beep beep-sidebar"
                                to={submenu.url}
                              >

                                {submenu.name}
                              </NavLink>
                            </li>
                          );
                        } else {
                          subComp = (
                            <li key={iSubmenu}>
                              <NavLink
                                activeStyle={{
                                  color: " #6777ef",
                                  fontWeight: "600",
                                }}
                                exact
                                to={submenu.url}
                              >

                                {submenu.name}
                              </NavLink>
                            </li>
                          );
                        }

                        return subComp;
                      })}
                    </ul>
                  </li>
                );
              } else {
                comp = (
                  <li key={iMenu} className="nav-item dropdown">
                    <a href="true" onClick={(e) => { e.preventDefault() }} className="nav-link has-dropdown">
                      <i className={menu.icon} /> <span> {menu.name} </span>
                    </a>
                    <ul className="dropdown-menu">

                      {menu.children.map((submenu, iSubmenu) => {
                        let subComp;
                        if (submenu.active) {
                          if (submenu.beep) {
                            subComp = (
                              <li key={iSubmenu} className="active">
                                <NavLink
                                  activeStyle={{
                                    color: " #6777ef",
                                    fontWeight: "600",
                                  }}
                                  exact
                                  className="beep beep-sidebar"
                                  to={submenu.url}
                                >

                                  {submenu.name}
                                </NavLink>
                              </li>
                            );
                          } else {
                            subComp = (
                              <li key={iSubmenu} className="active">
                                <NavLink
                                  activeStyle={{
                                    color: " #6777ef",
                                    fontWeight: "600",
                                  }}
                                  exact
                                  to={submenu.url}
                                >

                                  {submenu.name}
                                </NavLink>
                              </li>
                            );
                          }
                        } else if (submenu.beep) {
                          subComp = (
                            <li key={iSubmenu}>
                              <NavLink
                                activeStyle={{
                                  color: " #6777ef",
                                  fontWeight: "600",
                                }}
                                exact
                                className="beep beep-sidebar"
                                to={submenu.url}
                              >

                                {submenu.name}
                              </NavLink>
                            </li>
                          );
                        } else {
                          subComp = (
                            <li key={iSubmenu}>
                              <NavLink
                                activeStyle={{
                                  color: " #6777ef",
                                  fontWeight: "600",
                                }}
                                exact
                                to={submenu.url}
                              >

                                {submenu.name}
                              </NavLink>
                            </li>
                          );
                        }

                        return subComp;
                      })}
                    </ul>
                  </li>
                );
              }
            } else if (menu.active) {
              //
              comp = (
                <li key={iMenu} className="s">
                  <NavLink
                    activeStyle={{
                      color: " #6777ef",
                      fontWeight: "600",
                    }}
                    exact
                    to={menu.url}
                  >
                    <i className={menu.icon} /> <span> {menu.name} </span>
                  </NavLink>
                </li>
              );
            } else {
              //Single Component
              comp = (
                <li key={iMenu}>
                  <NavLink
                    activeStyle={{
                      color: " #6777ef",
                      fontWeight: "600",
                    }}
                    exact
                    to={menu.url}
                  >
                    <i className={menu.icon} /> <span> {menu.name} </span>
                  </NavLink>
                </li>
              );
            }

            return comp;
          })}
        </ul>
        <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
          <button onClick={logout} className="btn btn-danger btn-lg btn-block btn-icon-split" >
            <i className="fas fa-power-off"> </i> Logout
          </button>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
