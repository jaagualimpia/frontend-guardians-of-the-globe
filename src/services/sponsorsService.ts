import axios from "axios"
import { Sponsor } from "../models/Sponsor"

export const getAllSponsors = async () => {
    let sponsor: Sponsor[] = []

    await axios.get("http://localhost:5050/sponsor").then((response) => {
        response.data.forEach((element: Sponsor) => {
            sponsor.push(element)
        })
    })

    return sponsor
}

export const getSponsorById = async (id: number): Promise<Sponsor> => {
    let sponsor: Sponsor = {
        id: 0,
        name: "",
        gender: "",
        dateOfBirth: "",
        netWorth: 0,
        fortuneOrigin: "",
        sponsoredHeroes: []
    }

    await axios.get(`http://localhost:5050/sponsor/${id}`)
        .then((response) => {
            sponsor.id = response.data.id
            sponsor.name = response.data.name
            sponsor.gender = response.data.gender
            sponsor.sponsoredHeroes = response.data.sponsoredHeroes
            sponsor.dateOfBirth = response.data.dateOfBirth
            sponsor.netWorth = response.data.netWorth
            sponsor.fortuneOrigin = response.data.fortuneOrigin
        })

    return sponsor
}