import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../assets/img/logo.svg';

export default function NavCustom() {
  return (
    <nav
      className="navbar navbar-light fixed-top"
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

        <div className="language">
          <ul className="navbar-nav">
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
              <div className="dropdown-menu" style={{ position: "absolute" }}>
                <a
                  className="dropdown-item"
                  href="javascript:void()"
                  onClick={() => {
                    window.location.hash = "#googtrans(en)";
                    window.location.reload();
                  }}
                >
                  Angalis
                </a>
                <a
                  className="dropdown-item"
                  href="javascript:void()"
                  onClick={() => {
                    window.location.hash = "#googtrans(fr)";
                    window.location.reload();
                  }}
                >
                  Français
                </a>
                <a
                  className="dropdown-item"
                  href="javascript:void()"
                  onClick={() => {
                    window.location.hash = "#googtrans(de)";
                    window.location.reload();
                  }}
                >
                  Deutsh
                </a>
                <a
                  className="dropdown-item"
                  href="javascript:void()"
                  onClick={() => {
                    window.location.hash = "#googtrans(es)";
                    window.location.reload();
                  }}
                >
                  Espanol
                </a>
                <a
                  className="dropdown-item"
                  href="javascript:void()"
                  onClick={() => {
                    window.location.hash = "#googtrans(it)";
                    window.location.reload();
                  }}
                >
                  Italiano
                </a>
                <a
                  className="dropdown-item"
                  href="javascript:void()"
                  onClick={() => {
                    window.location.hash = "#googtrans(po)";
                    window.location.reload();
                  }}
                >
                  Portugues
                </a>
              </div>
            </li>
          </ul>
          <span
            className="division"
            style={{ color: "black", fontFamily: "Inter", fontSize: "20px" }}
          >
            SHARINBOX
          </span>
        </div>
      </div>
    </nav>
  );
}
