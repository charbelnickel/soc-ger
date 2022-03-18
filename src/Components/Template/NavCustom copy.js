import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../../assets/img/logo.svg';

export default function NavCustom() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{
        backgroundColor: "#fff",
        height: "75px",
        borderBottom: "1px solid #dcdcdc",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} height="35" />
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  style={{ color: "black", fontFamily: "Inter" }}
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faGlobe} /> &nbsp; FR
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Angalis
                  </a>
                  <a className="dropdown-item" href="#">
                    Français
                  </a>
                  <a className="dropdown-item" href="#">
                    Deutsh
                  </a>
                  <a className="dropdown-item" href="#">
                    Espanol
                  </a>
                  <a className="dropdown-item" href="#">
                    Italiano
                  </a>
                  <a className="dropdown-item" href="#">
                    Portugues
                  </a>
                </div>
              </li>
            </ul>
            <span
              style={{ color: "black", fontFamily: "Inter", fontSize: "20px" }}
            >
              SHARINBOX
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
