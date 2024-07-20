import { Link } from 'react-router-dom';
import { appMainURL } from '../components/UrlHandler';
import { getAvailableDecks } from "../components/ConfigHandler";
import { imageFinder } from '../components/ImageHandler';
import { __ } from '../components/LanguageHandler';

function Decks() {
    let availableDecks = getAvailableDecks()

    function writeDeckName(codename) {
        let codenameSplit = codename.split('_')

        switch (codenameSplit[0]) {
            case "rw":
                codenameSplit[0] = "Rider-Waite"
                break;
        
            case "ct":
                codenameSplit[0] = "Crowley-Toth"
                break;

            default:
                break;
        }

        let deckName = codenameSplit.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

        return deckName
    }

    return (
        <div className="flex justify-center w-screen">
            <div className="grid grid-cols-8 max-w-7xl">
                {availableDecks ? (
                <>
                    {availableDecks.map(deck => (
                        <Link to={"/" + appMainURL + "/cards/" + deck + "/"}>
                        <div className="flex flex-col p-2 text-center" key={deck}>
                            <img src={'/decks/' + deck + '/' + imageFinder("The Fool")} className="my-5 pointer-events-none" alt="card" />
                            <p className="text-xl">{writeDeckName(deck)}</p>
                        </div>
                        </Link>
                    ))}
                </>
                ) : (
                <p>{__("Loading...")}</p>
                )}
            </div>
        </div>
    )
}

export default Decks