import { Card, Col, Container, Row } from 'react-bootstrap';
import { Sponsor } from '../../models/Sponsor';
import { AgeCalculationService } from '../../services/AgeCalculationService';

interface SponsorCardProps {
    sponsor: Sponsor
}

export const SponsorCardComponent = ({sponsor}: SponsorCardProps) => {

    return (
        <Card style={{ width: '15rem', backgroundColor: '#1A1A1C', cursor: "pointer" }}>
            <Card.Body>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card.Title className='text-center fw-bold text-white'>{sponsor.name}</Card.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text className='text-center text-white fw-light'>{AgeCalculationService(new Date(sponsor.dateOfBirth))} years</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text className='text-center text-white'>{sponsor.netWorth} USD</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text className='text-center text-white text-truncate'>{sponsor.sponsoredHeroes.join(", ")}</Card.Text>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );

}