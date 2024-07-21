import React from 'react';
import { useEffect, useState } from "react";
import {imageFinderForRWCards} from "../components/ContentHandler";
import { Link, useParams } from 'react-router-dom';
import {appMainURL, deckVerifier} from "../components/UrlHandler";
import { __ } from "../components/LanguageHandler";
import { getAvailableDecks, getDeck, getLang, setDeck } from '../components/ConfigHandler';
let card_data = require('../datas/' + getLang() + '/card_data.json');

function Cards() {
    const {deck : deckParam} = useParams();
    const [cards, setCards] = useState(null);

    let deck = deckVerifier(deckParam);

    useEffect(() => {
        setCards(card_data)
    }, []);

    
    function showSaveDeckButton(deckName) {
        if (
            deckName === undefined || 
            deckName === null || 
            getAvailableDecks().includes(deckName) === false ||
            deckName === getDeck()
        ) {
            return ""
        }
        return (
            <div className="flex col-span-8 justify-end">
                <button className="flex hover:text-slate-400 focus:text-slate-400 focus:outline-none" onClick={() => setDeck(deckName)}>{__("Save deck as default")}</button>
            </div>
        )
    }

    return (
        <div className="flex justify-center w-screen">
            <div className="grid grid-cols-8 max-w-7xl">
                {showSaveDeckButton(deck)}
                
                {cards ? (
                <>
                    {cards["cards"].map(item => (
                        <Link to={"/" + appMainURL + "/card/" + item.name_short}>
                        <div className="flex flex-col p-2 text-center" key={item.name_short}>
                            <img src={'/decks/' + deck + '/' + imageFinderForRWCards(item.eng_name)} className="my-5 pointer-events-none" alt="card" />
                            <p className="text-xl">{item.name}</p>
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
export default Cards