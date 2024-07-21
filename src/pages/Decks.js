import { Link } from 'react-router-dom';
import { appMainURL } from '../components/UrlHandler';
import { getAvailableDecks } from "../components/ConfigHandler";
import { getDeckTypeByCode, imageFinderForRWCards } from '../components/ContentHandler';
import { __ } from '../components/LanguageHandler';

function Decks() {
    let availableDecks = getAvailableDecks()

    function writeDeckName(codename) {
        let codenameSplit = codename.split('_')

        codenameSplit[0] = getDeckTypeByCode(codenameSplit[0])

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
                            <img src={'/decks/' + deck + '/' + imageFinderForRWCards("The Fool")} className="my-5 pointer-events-none" alt="card" />
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