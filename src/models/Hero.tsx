import { SuperPerson } from "./SuperPerson"

export interface Hero extends SuperPerson {
    description: string
    principalSponsor: number
    mostFoughtVillain: string
}