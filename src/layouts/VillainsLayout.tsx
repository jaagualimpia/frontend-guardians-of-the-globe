import { Col, Container, Row } from "react-bootstrap"
import PersonCardComponent from "../components/PersonCardComponent/PersonCardComponent"
import NavBar from "../components/navBarComponent/navBar"
import { SearchBarComponent } from "../components/searchBarComponent/searchBar"
import { Villain } from "../models/Villain"
import { useEffect, useState } from "react"
import { getAllVillains } from "../services/villainsService"

export const VillainsLayout = () => {
    const [villains, setVillains] = useState<Villain[]>([])
    const [searchValue , setSearchValue] = useState<string>("")
    const [searchCriteria, setSearchCriteria] = useState<string>("name")

    useEffect(() => {
        const fetchAll = async () => {
            setVillains(await getAllVillains())

        }
        fetchAll()
    }, [])

    return (
        <>
            <NavBar />
            <Container className="mt-4">
                <Row className="mx-4">
                    <Col>
                        <SearchBarComponent setSearchValue={setSearchValue} setSearchCriteria={setSearchCriteria}/>
                    </Col>
                </Row>
                <Row className="mx-4 gy-4">
                    {villains.map(villain =>
                        <Col className="col-4">
                            <PersonCardComponent isVillain={true} person={villain} />
                        </Col>    
                    )}
{/* 
                    <Col>
                        <PersonCardComponent isVillain={true} />
                    </Col> */}
                </Row>
            </Container>
        </>
    )
}