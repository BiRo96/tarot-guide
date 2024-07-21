export function imageFinderForRWCards(cardName) {
    let cardImageName

    switch (cardName) {
        case "Fortitude":
            cardImageName = "strength"
            break;

        case "The Last Judgment":
            cardImageName = "judgement"
            break;
    
        default:
            cardImageName = cardName
            break;
    }

    return (cardImageName).toLowerCase().replace(/ /g, '') + '.jpg'
}

export function getDeckTypeByCode(code) {
    let res
    switch (code) {
        case "rw":
            res = "Rider-Waite"
            break;
    
        case "ct":
            res = "Crowley-Toth"
            break;

        default:
            res = code
            break;
    }
    
    return res
}