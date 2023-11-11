import { Col, Container, Row } from "react-bootstrap"
import NavBar from "../../components/navBarComponent/navBar"
import { DetailSponsorCardComponent } from "../../components/detailComponents/DetailSponsorCardComponent/DetailSponsorCardComponent"
import { useParams } from "react-router-dom"
import { Sponsor } from "../../models/Sponsor"
import { useEffect, useState } from "react"
import { getSponsorById } from "../../services/sponsorsService"

export const DetailSponsorLayout = () => {
    const {id} = useParams()
    const [sponsor, setSponsor] = useState<Sponsor>({
        name: "",
        dateOfBirth: "",
        id: 0,
        gender: "",
        netWorth: 0,
        fortuneOrigin: "",
        sponsoredHeroes: [""]
    })

    useEffect(()=>{
        const fetchSponsor = async () => {
            setSponsor(await getSponsorById(parseInt(id!)))
        }

        fetchSponsor()
    
    }, [])
    
    console.log(sponsor)

    return (
        <>
        <NavBar/>
        <Container className="mt-4">
            <Row className="mx-4">
                <Col className="d-flex justify-content-center">
                    <DetailSponsorCardComponent sponsor={sponsor}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}
