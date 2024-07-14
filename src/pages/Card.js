import { useParams } from "react-router-dom";
import card_data from "../datas/eng/card_data.json";
import { imageFinder } from "../components/ImageHandler";
import { deckVerifier } from "../components/UrlHandler";
import { appMainURL } from "../components/UrlHandler";

function Card() {
    let {deck : deckParam, short_name} = useParams();
    let selectedCard

    let deck = deckVerifier(deckParam);

    selectedCard = card_data.cards.find(c => c.name_short === short_name);
    if (selectedCard === undefined) {
        // TODO: handle error
        window.location.href = "/" + appMainURL + "/cards";
    }

    let trCSS = "even:bg-slate-500 odd:bg-slate-800 odd:text-slate-200"
    let tdCSS = "py-1 px-2"

    const tableInfos = [
        {name: "Arcana type", value: selectedCard.type},
        {name: "Numerology value", value: selectedCard.value},
        {name: "Meaning up", value: selectedCard.meaning_up},
        {name: "Meaning reversed", value: selectedCard.meaning_rev},
    ]

    return (
        <div className="w-screen justify-center flex">
            <div className="grid grid-cols-8 max-w-7xl">
                <p className="text-3xl text-center col-span-8">{selectedCard.name}</p>
                <div className="p-2 col-span-8 sm:col-span-4 lg:col-span-2 xl:col-span-1">
                    <img src={'/decks/' + deck + '/' + imageFinder(selectedCard.name)} className="my-5 pointer-events-none" alt="card" />
                </div>
                <div className="p-2 py-10 col-span-8 sm:col-span-4 lg:col-span-6 xl:col-span-7">
                    <table className="w-full">
                        <tbody>
                            {tableInfos.map(info => (
                                <tr className={trCSS} key={info.name}>
                                    <td className={tdCSS}>{info.name}:</td>
                                    <td className={tdCSS}>{info.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-8 col-span-8">
                    <p>{selectedCard.desc}</p>
                </div>
            </div>
        </div>
    )
    
}

export default Card