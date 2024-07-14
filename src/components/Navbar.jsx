import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { appMainURL } from "../components/UrlHandler";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        {name: "Home", url: "home"},
        {name: "Decks", url: "decks"},
        {name: "Cards and meanings", url: "cards"},
        {name: "Spread types", url: "spreads"}
    ]

    return (
        <>
            <nav>
                <div className='p-4'>
                    <button onClick={() => setIsOpen(!isOpen)} className="hover:text-slate-400 focus:text-slate-400 focus:outline-none flex">
                        <GiHamburgerMenu size={24} /> Menu
                    </button>
                </div>

                <div className="fixed top-0 left-0 bg-slate-800 text-white h-full w-1/4 p-4 transform transition-transform duration-300 ease-in-out"
                    style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>

                    <button className='hover:text-slate-400 focus:text-slate-400 focus:outline-none flex pb-4' onClick={() => setIsOpen(false)}><GiHamburgerMenu size={24} /> Close</button>

                    <h2 className="text-lg font-bold mb-4">Pages</h2>
                    <ul>
                        {menuItems.map((item) => (
                            <li key={"/" + appMainURL + "/" + item.name} className="p-2 cursor-pointer hover:bg-slate-700">
                                <Link to={"/" + appMainURL + "/" + item.url}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );

}

export default Navbar