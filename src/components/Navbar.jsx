import React, { useState } from 'react';
import { GiHamburgerMenu, GiCardJoker, GiStack, GiCardAceDiamonds, GiCardDraw } from "react-icons/gi";
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
                <div className='p-4'>
                    <button onClick={() => setIsOpen(!isOpen)} className="hover:text-slate-400 focus:text-slate-400 focus:outline-none flex">
                        <GiHamburgerMenu className="mr-2" size={24} /> {__("Menu")}
                    </button>
                </div>

                <div className="fixed top-0 left-0 bg-slate-800 text-white h-full w-1/4 p-4 transform transition-transform duration-300 ease-in-out"
                    style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>

                    <button className='hover:text-slate-400 focus:text-slate-400 focus:outline-none flex pb-4' onClick={() => setIsOpen(false)}><GiHamburgerMenu className="mr-2" size={24} /> {__("Close")}</button>

                    <div className="flex items-center mb-4">
                        <label htmlFor="language" className="text-lg font-bold mr-2">{__("Language")}:</label>
                        <select id="language" className="bg-slate-700 text-white rounded-md px-2 py-1" value={getLang()} onChange={(e) => setLang(e.target.value)}>
                            <option value="eng">{__("English")}</option>
                            <option value="hun">{__("Hungarian")}</option>
                        </select>
                    </div>

                    <h2 className="text-lg font-bold mb-4">{__("Pages")}</h2>
                    <ul>
                        {menuItems.map((item) => (
                            <Link to={"/" + appMainURL + "/" + item.url}>
                                <li key={"/" + appMainURL + "/" + item.name} className="p-2 cursor-pointer hover:bg-slate-700 flex">
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