import React from 'react';
import { Card } from 'react-bootstrap';

interface PersonCardProps {
    name?: string;
    image?: string;
    description?: string;
}

const PersonCardComponent = ({name, image, description}: PersonCardProps) => {
    name = "ejemplo"
    image = "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/08/03/16595421832009.jpg"
    description = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Male</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PersonCardComponent;
