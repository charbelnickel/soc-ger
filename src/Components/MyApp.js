import { Col, Container, Row } from "react-bootstrap";
import Formulaire from "./Formulaire";
import Information from "./Information";
import Footer from "./Template/Footer";
import NavCustom from "./Template/NavCustom";

export default function MyApp() {
    return (
        <>
            <NavCustom />
            <Container style={{ marginTop: "150px", marginBottom: "120px" }}>
                <Row>
                    <Col md={6}>
                        <Formulaire />
                    </Col>

                    <Col md={6}>
                        <div
                            className="division"
                            style={{
                                borderLeft: "3px solid rgba(0, 0, 0, 0.5)",
                                height: "100%",
                                marginLeft: "-10px",
                                position: "absolute",
                                top: 0,
                            }}
                        ></div>
                        <Information />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </>
    )
}