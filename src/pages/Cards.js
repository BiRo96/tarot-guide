import React from 'react';
import { useEffect, useState } from "react";
import card_data from "../datas/eng/card_data.json";
import {imageFinder} from "../components/ImageHandler";
import { useParams } from 'react-router-dom';

function Cards() {
    const {deck : deckParam} = useParams();
    const [cards, setCards] = useState(null);

    let deck        
    if (deckParam !== undefined) {
        deck = deckParam
    } else {
        deck = "rw_original"
    }

    useEffect(() => {
        setCards(card_data)
    }, []);

    
    return (
        <div className="grid grid-cols-8">
            {cards ? (
            <>
                {cards["cards"].map(item => (
                    <div className="p-2 text-center flex flex-col" key={item.name_short}>
                        <img src={'/decks/' + deck + '/' + imageFinder(item.name)} className="my-5 pointer-events-none" alt="card" />
                        <p className="text-xl">{item.name}</p>
                    </div>
                ))}
            </>
            ) : (
            <p>Loading...</p>
            )}
        </div>
    )
}
export default Cards