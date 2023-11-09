import { Col, Container, Row } from "react-bootstrap"
import NavBar from "../../components/navBarComponent/navBar"
import { DetailPersonComponent } from "../../components/detailComponents/DetailPersonComponent/DetailPersonComponent"
import { useParams } from "react-router-dom"
import { getHeroesById } from "../../services/heroesService"
import { useEffect, useState } from "react"
import { Person } from "../../models/Person"
import { getVillainsById } from "../../services/villainsService"

interface Definition {
    isVillain: boolean
}

export const DetailPersonLayout = ({ isVillain }: Definition) => {
    const { id } = useParams()
    const [person, setPerson] = useState<Person>({
        name: "",
        dateOfBirth: "",
        id: 0,
        gender: "femenino"
    })

    useEffect(() => {
        const fetchPerson = async () => {
            if (isVillain) {
                setPerson(await getVillainsById(parseInt(id!)))

            } else {
                setPerson(await getHeroesById(parseInt(id!)))
            }
        }

        fetchPerson()
    }, [])

    return (
        <>
            <NavBar />
            <Container className="mt-4">
                <Row className="mx-4">
                    <Col>
                    </Col>
                </Row>
                <Row className="mx-4">
                    <Col className="d-flex justify-content-center">
                        <DetailPersonComponent isVillain={isVillain} person={person} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}