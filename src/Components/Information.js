import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import {
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Information() {

  return (
    <Container>
      <Row>
        
        <Col>
          <div className="form-group">
            <h2
              style={{
                fontFamily: "Inter",
                fontSize: "25px",
                letterSpacing: "-1px",
              }}
            >
              Information
            </h2>
            <div style={{ borderTop: "1px solid black" }}></div>
            <br />
            <div style={{ fontSize: "14px", fontWeight: "400" }}>
              <strong style={{ fontFamily: "Inter" }}>
                Opération de maintenance
              </strong>
              <br /> <br />
              <p>
                Cher(e) client(e), <br /> Société Générale Securities Services
                vous informe qu'une opération de maintenance est planifiée le
                samedi 12 mars de 8h à 12h.
              </p>
              <br />
              <p>
                Durant cette opération, certaines fonctionnalités pourraient
                être temporairement inaccessibles. Nous vous prions de bien
                vouloir nous excuser pour la gêne occasionnée et nous vous
                invitons à vous reconnecter ultérieurement.
              </p>
            </div>

            <div
              class="row mt-5 mb-3"
              style={{ textAlign: "left", fontWeight: "450", fontSize: "15px" }}
            >
              <div style={{marginBottom: '150px'}}>
                <a id="lien-codes" href="#" className="link">
                  <FontAwesomeIcon icon={faCaretRight} /> &nbsp; Obtenir vos
                  identifiants
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col md={2} lg={4}></Col>
      </Row>
    </Container>
  );
}