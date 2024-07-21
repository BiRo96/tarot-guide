import React, { useState } from 'react';
import { GiHamburgerMenu, GiCardJoker, GiStack, GiCardAceDiamonds, GiCardDraw, GiFastBackwardButton } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { appMainURL } from "../components/UrlHandler";
import { getLang, setLang } from "./ConfigHandler";
import { __ } from "./LanguageHandler";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        {name: __("Home"), url: "home", icon: <GiCardAceDiamonds className="mr-2" size={24} />},
        {name: __("Decks"), url: "decks", icon: <GiStack className="mr-2" size={24} />},
        {name: __("Cards and meanings"), url: "cards", icon: <GiCardJoker className="mr-2" size={24} />},
        {name: __("Spread types"), url: "spreads", icon: <GiCardDraw className="mr-2" size={24} />},
    ]

    return (
        <>
            <nav>
                <div className='flex'>
                    <div className='p-4'>
                        <button onClick={() => setIsOpen(!isOpen)} className="flex hover:text-slate-400 focus:text-slate-400 focus:outline-none">
                            <GiHamburgerMenu className="mr-2" size={24} /> {__("Menu")}
                        </button>
                    </div>
                    <div className='p-4'>
                        <button onClick={() => window.history.back()} className="flex hover:text-slate-400 focus:text-slate-400 focus:outline-none">
                            <GiFastBackwardButton className="mr-2" size={24} /> {__("Back")}
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden fixed top-0 left-0 p-4 w-1/4 h-full text-white transition-transform duration-300 ease-in-out transform bg-slate-800"
                    style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>

                    <button className='flex pb-4 hover:text-slate-400 focus:text-slate-400 focus:outline-none' onClick={() => setIsOpen(false)}><GiHamburgerMenu className="mr-2" size={24} /> {__("Close")}</button>

                    <div className="flex items-center mb-4">
                        <label htmlFor="language" className="mr-2 text-lg font-bold">{__("Language")}:</label>
                        <select id="language" className="px-2 py-1 text-white rounded-md bg-slate-700" value={getLang()} onChange={(e) => setLang(e.target.value)}>
                            <option value="eng">{__("English")}</option>
                            <option value="hun">{__("Hungarian")}</option>
                        </select>
                    </div>

                    <h2 className="mb-4 text-lg font-bold">{__("Pages")}</h2>
                    <ul>
                        {menuItems.map((item) => (
                            <Link to={"/" + appMainURL + "/" + item.url}>
                                <li key={"/" + appMainURL + "/" + item.name} className="flex p-2 cursor-pointer hover:bg-slate-700">
                                    {item.icon}
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>

                </div>
            </nav>
        </>
    );

}

export default Navbar