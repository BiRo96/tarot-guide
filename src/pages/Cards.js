import React from 'react';
import { useEffect, useState } from "react";
import card_data from "../datas/eng/card_data.json";
import {imageFinder} from "../components/ImageHandler";
import { Link, useParams } from 'react-router-dom';
import {appMainURL, deckVerifier} from "../components/UrlHandler";

function Cards() {
    const {deck : deckParam} = useParams();
    const [cards, setCards] = useState(null);

    let deck = deckVerifier(deckParam);

    useEffect(() => {
        setCards(card_data)
    }, []);

    
    return (
        <div className="grid grid-cols-8">
            {cards ? (
            <>
                {cards["cards"].map(item => (
                    <Link to={"/" + appMainURL + "/card/" + item.name_short}>
                    <div className="p-2 text-center flex flex-col" key={item.name_short}>
                        <img src={'/decks/' + deck + '/' + imageFinder(item.name)} className="my-5 pointer-events-none" alt="card" />
                        <p className="text-xl">{item.name}</p>
                    </div>
                    </Link>
                ))}
            </>
            ) : (
            <p>Loading...</p>
            )}
        </div>
    )
}
export default Cards