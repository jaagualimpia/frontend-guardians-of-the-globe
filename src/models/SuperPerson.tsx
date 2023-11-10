import { Person } from "./Person"

export interface SuperPerson extends Person {
    weaknesses: string[]
    abilities: string[]
}