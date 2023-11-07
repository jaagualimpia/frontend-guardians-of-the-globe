import { Col, Container, Row } from "react-bootstrap"
import NavBar from "../components/navBarComponent/navBar"
import { MatchCardComponent } from "../components/matchCardComponent/MatchCardComponent"

export const MatchesLayout = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Row className="mt-5">
                    <Col className="d-flex justify-content-center">
                        <MatchCardComponent/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}