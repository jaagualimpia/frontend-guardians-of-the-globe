import { Col, Container, Row } from "react-bootstrap"
import PersonCardComponent from "../components/PersonCardComponent/PersonCardComponent"
import NavBar from "../components/navBarComponent/navBar"
import { SearchBarComponent } from "../components/searchBarComponent/searchBar"
import { useEffect, useState } from "react"
import { getAllHeroes } from "../services/heroesService"
import { Hero } from "../models/Hero"

export const HeroesLayout = () => {
    const [heroes, setHeroes] = useState<Hero[]>([])
    const [searchValue, setSearchValue] = useState<string>("")
    const [searchCriteria, setSearchCriteria] = useState<string>("name")

    useEffect(() => {
        const fetchAll = async () => setHeroes(await getAllHeroes())
        
        fetchAll()
    }, [])

    return (
        <>
            <NavBar />
            <Container className="mt-4">
                <Row className="mx-4">
                    <Col>
                        <SearchBarComponent setSearchValue={setSearchValue} setSearchCriteria={setSearchCriteria} />
                    </Col>
                </Row>
                <Row className="mx-4 gy-4">
                    {heroes
                        .filter((hero) =>
                            String(hero[searchCriteria as keyof Hero])
                                .toLowerCase()
                                .includes(searchValue.toLowerCase().trim()))
                        .map(hero =>
                            <Col className="col-4">
                                <PersonCardComponent isVillain={false} person={hero} />
                            </Col>
                        )}
                </Row>
            </Container>
        </>
    )
}