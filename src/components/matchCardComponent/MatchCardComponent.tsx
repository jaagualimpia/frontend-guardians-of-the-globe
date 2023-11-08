import { Card, Col, Container, Row } from "react-bootstrap"

export const MatchCardComponent = () => {
    return (
        <>
            <Card style={{ width: "35rem", backgroundColor: '#1A1A1C', cursor: "pointer" }}>
                <Card.Body>
                    <Container>
                        <Row className="row justify-content-center">
                            <Col md="5">
                                <Card.Title className="text-white text-center">Nombre heroe</Card.Title>
                            </Col>
                            <Col md="2" className="text-center text-white fw-bold">
                                vs
                            </Col>
                            <Col md="5">
                                <Card.Title className="text-white text-center">Nombre villano</Card.Title>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}