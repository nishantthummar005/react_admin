/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Footer() {
  return (
    <footer className="main-footer pl-0">
      <div className="text-center">
        Copyright &copy; {new Date().getFullYear()} <div className="bullet" /> Developed By
        <a rel="noopener noreferrer" target="_blank" href={process.env.REACT_APP_WEB_URL}> {process.env.REACT_APP_DEVELOPER} </a>
      </div>
    </footer>
  );
}
