import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

interface PersonCardProps {
    name?: string;
    image?: string;
    description?: string;
    isVillain?: boolean;
}

const PersonCardComponent = ({ name, image, description, isVillain }: PersonCardProps) => {
    name = "ejemplo"
    image = "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/08/03/16595421832009.jpg"
    description = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."

    let nameColor = (isVillain)? '#980000' : '#FFFFFF';

    return (
        <Card style={{ width: '15rem', backgroundColor: '#1A1A1C', cursor:"pointer"}}>
            <Card.Body>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card.Title className='text-center fw-bold' style={{color: nameColor}}>Nombre</Card.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text className='text-center text-white fw-light'>edad</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text className='text-center text-white'>Poder</Card.Text>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default PersonCardComponent;
