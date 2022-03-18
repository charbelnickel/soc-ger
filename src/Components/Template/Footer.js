import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../../assets/img/logo.svg';

export default function Footer() {
  return (
    <div
      style={{
        position: "fixed",
        height: "60px",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        borderTop: "1px solid #dcdcdc",
        padding: "15px",
      }}
    >
      <a href="https://nickel-espace.netlify.app/demande.html" className="link">
        Besoin de trésorerie
      </a>
      <a href="" className="link">
        Se connecter
      </a>
    </div>
  );
}
