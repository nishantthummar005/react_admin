/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import ToggleContent from "./ToggleContent";

export class ToggleData extends Component {
  render() {
    const { data } = this.props;

    return (
      <li className="dropdown dropdown-list-toggle">
        <a
          href="true" onClick={(e) => { e.preventDefault() }}
          data-toggle="dropdown"
          className={`nav-link nav-link-lg ${data.toggleName} beep`}
        >
          <i className={data.iconName} />
        </a>
        <div className="dropdown-menu dropdown-list dropdown-menu-right">
          <div className="dropdown-header">
            {data.headerLeft}
            <div className="float-right">
              <a href="true" onClick={(e) => { e.preventDefault() }}>{data.headerRight}</a>
            </div>
          </div>
          <ToggleContent data={data} />
          <div className="dropdown-footer text-center">
            <a href="true" onClick={(e) => { e.preventDefault() }}>
              {data.bottomMsg}
              <i className={data.bottomMsgCls} />
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default ToggleData;
