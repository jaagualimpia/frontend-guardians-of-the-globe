import { Col, Container, Row } from "react-bootstrap"
import NavBar from "../components/navBarComponent/navBar"
import { SponsorCardComponent } from "../components/sponsorCardComponent/SponsorCardComponent"
import { Sponsor } from "../models/Sponsor"
import { useEffect, useState } from "react"
import { getAllSponsors } from "../services/sponsorsService"

export const SponsorsLayout = () => {
    const [sponsor, setSponsors] = useState<Sponsor[]>([])

    useEffect(() => {
        const fetchAll = async () => setSponsors(await getAllSponsors())

        fetchAll()
    }, [])


    return (
        <>
            <NavBar />
            <Container className="mt-4">
                <Row className="mx-4">
                    {
                        sponsor.map((sponsor) => (
                            <Col>
                                <SponsorCardComponent sponsor={sponsor} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}