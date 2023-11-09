import { Card, Col, Container, Row } from "react-bootstrap"
import { Person } from "../../../models/Person"
import { AgeCalculationService } from "../../../services/AgeCalculationService"

interface PersonDetailedInfo {
    person: Person
    isVillain: boolean
}

export const DetailPersonComponent = ({ isVillain, person }: PersonDetailedInfo) => {
    const [descriptionOrOrigins, textColor] = isVillain ? ["Origins", "#980000"] : ["Description", "#FFFFFF"]

    return (
        <>
            <Card style={{ width: "35rem", backgroundColor: '#1A1A1C', cursor: "pointer" }}>
                <Card.Body className="text-white text-center">

                    <Container fluid>
                        <Row>
                            <Col>
                                <Card.Title style={{ color: textColor }} className="fw-bold">{person.name}</Card.Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Title className="fw-light">{AgeCalculationService(new Date(person.dateOfBirth))} years</Card.Title>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Card.Title className="fw-light text-start"><strong><b>Poderes:</b></strong> uno, dos, tres, cuatro</Card.Title>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Card.Title className="fw-light text-start"><strong><b>Debilidades:</b></strong> uno, dos, tres, cuatro</Card.Title>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Card.Title className="fw-bold text-start" style={{ color: textColor }}>{descriptionOrOrigins}</Card.Title>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Card.Text className="fw-light text-start">Lorem ipsum dolor sit amet consectetur adipiscing, elit enim cum
                                    ligula tempor non, curae cursus nullam egestas commodo. Pretium
                                    ultrices aliquam primis taciti rhoncus malesuada dictum tristique
                                    laoreet, nulla aliquet dapibus et quisque odio litora dis integer, cum
                                    ligula habitasse lacinia eu scelerisque conubia turpis.
                                    Torquent natoque auctor fames congue ante a pharetra
                                </Card.Text>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}