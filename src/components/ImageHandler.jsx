export function imageFinder(cardName) {
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
