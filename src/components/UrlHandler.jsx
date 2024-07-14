export const appMainURL = "enc"

export function deckVerifier(deckName) {
    let deck        
    if (deckName !== undefined) {
        deck = deckName
    } else {
        deck = "rw_original"
    }
    return deck
}