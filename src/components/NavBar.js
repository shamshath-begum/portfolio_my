import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <Nav className="justify-content-center navbar">
        <Nav.Item>
          <Link className="links" to="/home">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="links" to="/education">
            Education & Experience
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="links" to="/projects">
            Projects
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="links" to="/skills">
            Skills
          </Link>
        </Nav.Item>
        <Nav.Item>
          <a
            href="https://drive.google.com/file/d/1dRawrhTFDG2p-YLBgl6rqoCSIzK-5zCm/view?usp=share_link"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Resume
          </a>
        </Nav.Item>
      </Nav>
      {/* <div className="navbar">
        <div className="toggle"></div>
      </div>
      <ul className="nav nav justify-content-center bg-info">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/education">
            Education
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/projects">
            Projects
          </Link>
        </li>
      </ul> */}
    </>
  );
}

export default NavBar;
