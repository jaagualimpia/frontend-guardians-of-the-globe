import { Card, Col, Container, Row } from "react-bootstrap"
import { Match } from "../../models/Match"

interface MatchCardProps {
    match: Match
}

export const MatchCardComponent = ({ match }: MatchCardProps) => {
    const [isWinnedString, textColor] = match.isWinned ? ["Winned", "green"] : ["Lost", "#980000"]

    return (
        <>
            <Card style={{ width: "35rem", backgroundColor: '#1A1A1C', cursor: "pointer" }}>
                <Card.Body>
                    <Container>
                        <Row className="row justify-content-center">
                            <Col md="4">
                                <Card.Title className="text-white text-center">{match.heroName}</Card.Title>
                            </Col>
                            <Col md="4" className="fw-bold">
                                <Card.Title className="text-center" style={{color: textColor}}>
                                    <b>{isWinnedString}</b>
                                </Card.Title>
                            </Col>
                            <Col md="4">
                                <Card.Title className="text-white text-center">{match.villainName}</Card.Title>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}