import axios from "axios"
import { Villain } from "../models/Villain"

export const getAllVillains = async () => {
    let villain: Villain[] = []

    await axios.get(`${process.env.REACT_APP_API_URL_TESTS}/villain`).then((response) => {
        response.data.forEach((element: Villain) => {
            villain.push(element)
        })
    })

    return villain

}

export const getVillainsById = async (id: number): Promise<Villain> => {
    let villain: Villain = {
        id: 0,
        name: "",
        origin: "",
        gender: "",
        dateOfBirth: "",
        weaknesses: [""],
        abilities: ["Fire", "darkness"]
    }

    await axios.get(`${process.env.REACT_APP_API_URL_TESTS}/villain/${id}`)
        .then((response) => {
            villain.id = response.data.id
            villain.name = response.data.name
            villain.gender = response.data.gender
            villain.origin = response.data.origin
            villain.dateOfBirth = response.data.dateOfBirth
            villain.weaknesses = response.data.weaknesses
            villain.abilities = response.data.abilities
        })

    return villain
}