import { Col, Container, Row } from "react-bootstrap"
import PersonCardComponent from "../components/PersonCardComponent/PersonCardComponent"
import NavBar from "../components/navBarComponent/navBar"
import { SearchBarComponent } from "../components/searchBarComponent/searchBar"

export const VillainsLayout = () => {
    return (
        <>
            <NavBar />
            <Container className="mt-4">
                <Row className="mx-4">
                    <Col>
                        <SearchBarComponent/>
                    </Col>
                </Row>
                <Row className="mx-4">
                    <Col>
                        <PersonCardComponent isVillain={true}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}