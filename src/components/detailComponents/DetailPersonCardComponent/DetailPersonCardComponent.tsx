import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { AgeCalculationService } from "../../../services/AgeCalculationService"
import { SuperPerson } from "../../../models/SuperPerson"

interface PersonDetailedInfo {
    person: SuperPerson
    isVillain: boolean
}

export const DetailPersonCardComponent = ({ isVillain, person }: PersonDetailedInfo) => {
    const [descriptionOrOrigins, textColor] = isVillain ? ["Origin", "#980000"] : ["Description", "#FFFFFF"]
    const content = String(person[descriptionOrOrigins.toLowerCase() as keyof SuperPerson])

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
                                <Card.Title className="fw-light text-start"><strong><b>Abilities:</b></strong> {person.abilities.join(", ")}</Card.Title>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Card.Title className="fw-light text-start"><strong><b>Weaknesses:</b></strong> {person.weaknesses.join(", ")}</Card.Title>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Card.Title className="fw-bold text-start" style={{ color: textColor }}>{descriptionOrOrigins}</Card.Title>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Card.Text className="fw-light text-start">{content}</Card.Text>
                            </Col>
                        </Row>
                        <>

                            {/* <Row>
                            <Col>
                                <Card.Text className="fw-light text-start">Lorem ipsum dolor sit amet consectetur adipiscing, elit enim cum
                                    ligula tempor non, curae cursus nullam egestas commodo. Pretium
                                    ultrices aliquam primis taciti rhoncus malesuada dictum tristique
                                    laoreet, nulla aliquet dapibus et quisque odio litora dis integer, cum
                                    ligula habitasse lacinia eu scelerisque conubia turpis.
                                    Torquent natoque auctor fames congue ante a pharetra
                                </Card.Text>
                            </Col>
                        </Row> */}
                        </>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}