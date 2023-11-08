import { Card, Col, Container, Row } from 'react-bootstrap';

interface PersonCardProps {
    name?: string;
    edad?: string;
    heroes?: boolean;
}

export const SponsorCardComponent = ({name, edad, heroes}: PersonCardProps) => {
    name = "ejemplo"
    edad = "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/08/03/16595421832009.jpg"
    heroes = true

    return (
        <Card style={{ width: '15rem', backgroundColor: '#1A1A1C', cursor: "pointer" }}>
            <Card.Body>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card.Title className='text-center fw-bold text-white'>Nombre</Card.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text className='text-center text-white fw-light'>edad</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text className='text-center text-white'>Net worth</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text className='text-center text-white'>Sponsored hero</Card.Text>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );

}