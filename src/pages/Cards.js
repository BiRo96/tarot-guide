import React from 'react';
import { useEffect, useState } from "react";
import {imageFinder} from "../components/ImageHandler";
import { Link, useParams } from 'react-router-dom';
import {appMainURL, deckVerifier} from "../components/UrlHandler";
import { __ } from "../components/LanguageHandler";
import { getLang } from '../components/ConfigHandler';
let card_data = require('../datas/' + getLang() + '/card_data.json');

function Cards() {
    const {deck : deckParam} = useParams();
    const [cards, setCards] = useState(null);

    let deck = deckVerifier(deckParam);

    useEffect(() => {
        setCards(card_data)
    }, []);

    
    return (
        <div className="w-screen justify-center flex">
            <div className="grid grid-cols-8 max-w-7xl">
                {cards ? (
                <>
                    {cards["cards"].map(item => (
                        <Link to={"/" + appMainURL + "/card/" + item.name_short}>
                        <div className="p-2 text-center flex flex-col" key={item.name_short}>
                            <img src={'/decks/' + deck + '/' + imageFinder(item.eng_name)} className="my-5 pointer-events-none" alt="card" />
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