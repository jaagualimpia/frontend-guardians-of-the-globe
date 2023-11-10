import { Col, Container, FormCheck, Row } from "react-bootstrap"
import PersonCardComponent from "../components/PersonCardComponent/PersonCardComponent"
import NavBar from "../components/navBarComponent/navBar"
import { SearchBarComponent } from "../components/searchBarComponent/searchBar"
import { useEffect, useState } from "react"
import { getAllHeroes } from "../services/heroesService"
import { Hero } from "../models/Hero"
import { AgeCalculationService } from "../services/AgeCalculationService"

export const HeroesLayout = () => {
    const [heroes, setHeroes] = useState<Hero[]>([])
    const [searchValue, setSearchValue] = useState<string>("")
    const [searchCriteria, setSearchCriteria] = useState<string>("name")
    const [ageLimit, setAgeLimit] = useState<number>(-1)

    useEffect(() => {
        const fetchAll = async () => setHeroes(await getAllHeroes())

        fetchAll()
    }, [])

    return (
        <>
            <NavBar />
            <Container className="mt-4">
                <Row className="mx-4">
                    <Col className="col-8">
                        <SearchBarComponent setSearchValue={setSearchValue} setSearchCriteria={setSearchCriteria} />
                    </Col>
                    <Col className="col-4 align-self-center">
                        <FormCheck>
                            <FormCheck.Input type="checkbox" onChange={() => ageLimit === -1 ? setAgeLimit(18) : setAgeLimit(-1)} />
                            <FormCheck.Label className="text-white">Show just non adults</FormCheck.Label>
                        </FormCheck>
                    </Col>
                </Row>
                <Row className="mx-4 gy-4">
                    {heroes
                        .filter((hero) => ageLimit === -1 || AgeCalculationService(new Date(hero.dateOfBirth)) < ageLimit)
                            .filter((hero) =>
                                String(hero[searchCriteria as keyof Hero])
                                    .toLowerCase()
                                    .includes(searchValue.toLowerCase().trim()))
                            .map(hero =>
                                <Col className="col-4">
                                    <PersonCardComponent key={hero.id} isVillain={false} person={hero} />
                                </Col>
                            )}
                </Row>
            </Container>
        </>
    )
}