import { Col, Container, Row } from "react-bootstrap"
import NavBar from "../components/navBarComponent/navBar"
import { MatchCardComponent } from "../components/matchCardComponent/MatchCardComponent"
import { useEffect, useState } from "react"
import { getAllMatches } from "../services/matchesService"
import { Match } from "../models/Match"

export const MatchesLayout = () => {
    const [matches, setMatches] = useState<Match[]>()

    useEffect(() => {
        const fetchAll = async () => setMatches(await getAllMatches())

        fetchAll()
    })

    return (
        <>
            <NavBar />
            <Container>
                {
                    matches?.map((match) => (

                        <Row className="mt-4">
                            <Col className="d-flex justify-content-center">
                                <MatchCardComponent match={match} />
                            </Col>

                        </Row>
                    ))
                }
            </Container>
        </>
    )
}