import { Col, Container, Row } from "react-bootstrap"
import PersonCardComponent from "../components/PersonCardComponent/PersonCardComponent"
import NavBar from "../components/navBarComponent/navBar"

export const HeroesLayout = () => {
    return (
        <>
            <NavBar />
            <h3>Heroes Layout</h3>
            <Container>
                <Row>
                    <Col>
                        <PersonCardComponent />
                    </Col>
                </Row>
            </Container>
        </>
    )
}