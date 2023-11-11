import { Col, Container, Row } from "react-bootstrap"
import NavBar from "../components/navBarComponent/navBar"

export const IndexLayout = () => {

    return (
        <>
            <NavBar />
            <Container fluid>
                <Row className="mt-3">
                    <Col className="text-center mx-auto">
                        <h3 className="text-white">Proyecto guardians of the globe</h3>
                        <p className="text-white">
                            Este es un proyecto realizado para la asignatura <br></br>
                            electiva de ingenieria de software de la universidad <br></br>
                            San Buenaventura Cali
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}