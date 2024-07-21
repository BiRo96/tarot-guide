let availableLang = [
    "eng", 
    "hun",
]

let availableDecks = [
    "rw_original",
    "rw_illustrated_key_to_tarot",
]

let defaultData = {
    "lang": "eng",
    "deck": "rw_original",
}


function reloadApp() {
    window.location.reload();
}

export function getLang() {
    return get('lang')
}

export function setLang(lang) {
    set('lang', lang, availableLang)
}

export function getDeck() {
    return get('deck')
}

export function setDeck(deck) {
    set('deck', deck, availableDecks)
}

export function getAvailableDecks() {
    return availableDecks
}

function set(param, value, availableValues) {
    if (!availableValues.includes(value)) {
        return 0
    }

    localStorage.setItem(param, value);
    reloadApp();
    
}

function get(param) {
    if (localStorage.getItem(param) === null) {
        localStorage.setItem(param, defaultData[param]);
    }
    return localStorage.getItem(param)
}