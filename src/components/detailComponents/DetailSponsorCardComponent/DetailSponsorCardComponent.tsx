import { Card, Col, Container, Row } from "react-bootstrap"
import { Sponsor } from "../../../models/Sponsor"
import NavBar from "../../navBarComponent/navBar"
import { AgeCalculationService } from "../../../services/AgeCalculationService"

interface SponsorCardProps {
    sponsor: Sponsor
}

export const DetailSponsorCardComponent = ({ sponsor }: SponsorCardProps) => {

    return (
        <>
            <Card style={{ width: "35rem", backgroundColor: '#1A1A1C', cursor: "pointer" }}>
                <Card.Body className="text-white text-center">

                    <Container fluid>
                        <Row>
                            <Col>
                                <Card.Title className="fw-bold">{sponsor.name}</Card.Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Title className="fw-light">{AgeCalculationService(new Date(sponsor.dateOfBirth))} years</Card.Title>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Card.Title className="fw-light text-start"><strong style={{ color: "green" }}><b>Net Worth: </b></strong> {sponsor.netWorth}</Card.Title>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Card.Title className="fw-light text-start"><strong><b>Sponsored heroes:</b></strong> {sponsor.sponsoredHeroes.join(", ")}</Card.Title>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Card.Title className="fw-bold text-start" >Fortune origin</Card.Title>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Card.Text className="fw-light text-start">{sponsor.fortuneOrigin}</Card.Text>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}