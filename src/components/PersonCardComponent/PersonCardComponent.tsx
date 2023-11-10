import { Card, Col, Container, Row } from 'react-bootstrap';
import { Person } from '../../models/Person';
import { SuperPerson } from '../../models/SuperPerson';
import { AgeCalculationService } from '../../services/AgeCalculationService';

interface PersonCardProps {
    person: SuperPerson
    isVillain?: boolean;
}

const PersonCardComponent = ({isVillain, person }: PersonCardProps) => {
    let nameColor = (isVillain)? '#980000' : '#FFFFFF';

    const onClickCardComponent = () => {
        window.location.href = `${window.location.href}/${person.id}`
    }

    return (
        <Card style={{ backgroundColor: '#1A1A1C', cursor:"pointer"}} onClick={onClickCardComponent}>
            <Card.Body>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card.Title className='text-center fw-bold fs-3' style={{color: nameColor}}>{person.name}</Card.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text className='text-center text-white text-truncate fw-light'>{person.gender}</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text className='text-center text-white fw-light'>{AgeCalculationService(new Date(person.dateOfBirth))}</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text className='text-center text-white text-truncate'><b>{person.abilities.join(", ")}</b></Card.Text>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default PersonCardComponent;
