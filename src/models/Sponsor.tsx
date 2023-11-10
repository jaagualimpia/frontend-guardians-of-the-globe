import { Person } from "./Person";

export interface Sponsor extends Person {
    netWorth: number
    fortuneOrigin: string
    sponsoredHeroes: string[]
}