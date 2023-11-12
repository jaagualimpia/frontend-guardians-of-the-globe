import axios from "axios"
import { Hero } from "../models/Hero"

export const getAllHeroes = async (): Promise<Hero[]> => {
    let heroes: Hero[] = []

    await axios.get(`${process.env.REACT_APP_API_URL_TESTS}/heroes`).then((response) => {
        response.data.forEach((element: Hero) => {
            heroes.push(element)
        })
    })

    return heroes
}

export const getHeroesById = async (id: number): Promise<Hero> => {
    let hero: Hero = {
        id: 0,
        name: "",
        description: "",
        gender: "",
        dateOfBirth: "",
        weaknesses: [""],
        abilities: ["Fire", "darkness"],
        principalSponsor: 0,
        mostFoughtVillain: ""
    }

    await axios.get(`${process.env.REACT_APP_API_URL_TESTS}/heroes/${id}`).then((response) => {
        hero.id = response.data.id
        hero.name = response.data.name
        hero.description = response.data.description
        hero.gender = response.data.gender
        hero.dateOfBirth = response.data.dateOfBirth
        hero.weaknesses = response.data.weaknesses
        hero.abilities = response.data.abilities
        hero.principalSponsor = response.data.principalSponsor
        hero.mostFoughtVillain = response.data.mostFoughtVillain
    })

    return hero
}