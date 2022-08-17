/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb(props) {
    return (
        <>
            <div className="section-header">
                <h1>{props.title}</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">{props.title}</div>
                </div>
            </div>
        </>
    );
}
