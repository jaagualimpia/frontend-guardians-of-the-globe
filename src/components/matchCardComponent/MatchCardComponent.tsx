import { Card, Col, Container, Row } from "react-bootstrap"

export const MatchCardComponent = () => {
    return (
        <>
            <Card style={{width:"35rem", backgroundColor: '#1A1A1C', cursor: "pointer" }}>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col md="5">
                                <Card.Title className="text-white text-center">Nombre heroe</Card.Title>
                            </Col>
                            <Col md="2">
                                <Card.Title className="text-white text-center">VS</Card.Title>
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