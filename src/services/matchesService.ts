import axios from "axios";
import { Match } from "../models/Match";

export const getAllMatches = async (): Promise<Match[]> => {
    let data: Match[] = []

    await axios.get(`${process.env.REACT_APP_API_URL}/matches`).then((response) => {
        response.data.forEach((match: Match) => data.push(match))
    })

    return data;
}

export const getMatchById = async (id: number): Promise<Match> => {
    let data: Match = {
        heroName: '',
        villainName: '',
        isWinned: true,
        date: ''
    }

    await axios.get(`${process.env.REACT_APP_API_URL}/matches/${id}`).then((response) => {
        data.heroName = response.data.heroName
        data.villainName = response.data.villainName
        data.isWinned = response.data.isWinned
        data.date = response.data.date
    })

    return data;
}