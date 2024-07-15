let availableLang = [
    "eng", 
    "hun",
]

let defaultData = {
    "lang": "eng",
    "deck": "rw_original",
}

function reloadApp() {
    window.location.reload();
}

export function getLang() {
    if (localStorage.getItem('lang') === null) {
        localStorage.setItem('lang', defaultData["lang"]);
    }
    return localStorage.getItem('lang')
}

export function setLang(lang) {
    if (!availableLang.includes(lang)) {
        return 0
    }

    localStorage.setItem('lang', lang);
    reloadApp();
}
