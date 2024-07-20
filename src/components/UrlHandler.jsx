import { getDeck } from "./ConfigHandler"

export const appMainURL = "enc"

export function deckVerifier(deckName) {
    let deck        
    if (deckName !== undefined) {
        deck = deckName
    } else {
        deck = getDeck()
    }
    return deck
}