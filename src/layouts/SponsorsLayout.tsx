import { Col, Container, Row } from "react-bootstrap"
import PersonCardComponent from "../components/PersonCardComponent/PersonCardComponent"
import NavBar from "../components/navBarComponent/navBar"
import { SponsorCardComponent } from "../components/sponsorCardComponent/SponsorCardComponent"

export const SponsorsLayout = () => {
    return (
        <>
            <NavBar />
            <Container className="mt-4">
                <Row className="mx-4">
                    <Col>
                        <SponsorCardComponent/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}