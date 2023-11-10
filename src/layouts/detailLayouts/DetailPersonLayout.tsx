import { Button, Card, Col, Container, Row } from "react-bootstrap"
import NavBar from "../../components/navBarComponent/navBar"
import { DetailPersonCardComponent } from "../../components/detailComponents/DetailPersonCardComponent/DetailPersonCardComponent"
import { useParams } from "react-router-dom"
import { getHeroesById } from "../../services/heroesService"
import { useEffect, useState } from "react"
import { getVillainsById } from "../../services/villainsService"
import { SuperPerson } from "../../models/SuperPerson"

interface Definition {
    isVillain: boolean
}

export const DetailPersonLayout = ({ isVillain }: Definition) => {
    const { id } = useParams()
    const [person, setPerson] = useState<SuperPerson>({
        name: "",
        dateOfBirth: "",
        id: 0,
        gender: "femenino",
        weaknesses: [""],
        abilities: ["Fire breathing"]
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

    const content = isVillain ? (
        <></>
    ) : (
        <Row className="my-3">
            <Col className="d-flex justify-content-center">
                <a className="btn btn-success" href="/sponsors">
                    <b className="">Know principal Sponsor</b>
                </a>
            </Col>
            <Col className="d-flex justify-content-center">
                <p className="text-white fw-bold">
                    Most fought villain is <b>{person.name}</b>
                </p>
            </Col>
        </Row>
    );

    return (
        <>
            <NavBar />
            <Container className="mt-4">
                <Row className="mx-4">
                    <Col className="d-flex justify-content-center">
                        <DetailPersonCardComponent isVillain={isVillain} person={person}/>
                    </Col>
                </Row>
                {content}
            </Container>
        </>
    )
}