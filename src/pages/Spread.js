import { appMainURL } from "../components/UrlHandler";
import { __ } from "../components/LanguageHandler";
import { getLang } from '../components/ConfigHandler';
import { useParams } from "react-router-dom";
import { getDeckTypeByCode } from "../components/ContentHandler";
let spread_data = require('../datas/' + getLang() + '/spread_data.json');

function Spread() {
    let {short_name} = useParams();
    let selectedSpread

    selectedSpread = spread_data.find(s => s.name_short === short_name);
    if (selectedSpread === undefined) {
        // TODO: handle error
        window.location.href = "/" + appMainURL + "/spreads";
    }

    let trCSS = "even:bg-slate-500 odd:bg-slate-800 odd:text-slate-200"
    let trhCSS = "bg-slate-800 text-slate-200"
    let tdCSS = "py-1 px-2"

    const card_meanings = Object.entries(selectedSpread.card_meanings).map(([key, value]) => {
        return { key, value };
    });

    return (
        <div className="flex justify-center w-screen">
            <div className="grid grid-cols-8 max-w-7xl">
                <p className="col-span-8 text-3xl text-center">{selectedSpread.name}</p>
                <div className="col-span-8 p-2 sm:col-span-4 lg:col-span-2 xl:col-span-3">
                    <img src={'/spreads/' + selectedSpread.img_name} className="my-5 pointer-events-none" alt="spread" />
                </div>
                <div className="col-span-8 p-2 py-10 sm:col-span-4 lg:col-span-6 xl:col-span-5">
                    <table className="mb-2 w-full">
                        <tbody>
                            <tr className={trCSS}>
                                <td className={tdCSS}>{__("Needed Cards")}:</td>
                                <td className={tdCSS}>{selectedSpread.card_count}</td>
                            </tr>
                            <tr className={trCSS}>
                                <td className={tdCSS}>{__("Compatible Decks")}:</td>
                                <td>
                                {selectedSpread.compatible_tarots.map(info => (
                                        <div className={tdCSS} key={info}>{getDeckTypeByCode(info)}</div>
                                    ))}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="w-full">
                        <tbody>
                            <tr className={trhCSS}>
                                <td className={tdCSS}>{__("Cards' Meaning")}:</td>
                            </tr>
                            <tr className={trCSS}>
                                {card_meanings.map(info => (
                                    <div className="flex even:bg-slate-400" key={info.key}>
                                        <div className={tdCSS}>{__("Card")} <span className="italic">#{info.key}</span></div>
                                        <div className={tdCSS}>{info.value}</div>
                                    </div>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-span-8 px-8 py-3 italic bg-slate-400 text-slate-900">
                    <p>{selectedSpread.short_description}</p>
                </div>
                <div className="col-span-8 px-8 py-3 bg-slate-500">
                    {card_meanings.map(info => (
                        <div className="flex flex-col mb-4" key={info.key}>
                            <div className="flex text-3xl text-slate-900">
                                <h2 className="font-bold">{__("Card")} <span className="italic">#{info.key}</span>:</h2>
                                <div className="ml-2">{info.value}</div>
                            </div>
                            <div className="mx-3 my-2 text-slate-100">{selectedSpread.card_descriptions[info.key]}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
    
}

export default Spread