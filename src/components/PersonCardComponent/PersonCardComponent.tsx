import { Card, Col, Container, Row } from 'react-bootstrap';
import { Person } from '../../models/Person';
import { redirect } from "react-router-dom";

interface PersonCardProps {
    person: Person
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
