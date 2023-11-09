import { Card, Col, Container, Row } from 'react-bootstrap';
import { Person } from '../../models/Person';

interface PersonCardProps {
    person: Person
    isVillain?: boolean;
}

const PersonCardComponent = ({isVillain, person }: PersonCardProps) => {
    let nameColor = (isVillain)? '#980000' : '#FFFFFF';

    return (
        <Card style={{ backgroundColor: '#1A1A1C', cursor:"pointer"}}>
            <Card.Body>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card.Title className='text-center fw-bold' style={{color: nameColor}}>{person.name}</Card.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text className='text-center text-white fw-light'>edad</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text className='text-center text-white'><b>Poder</b></Card.Text>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default PersonCardComponent;
