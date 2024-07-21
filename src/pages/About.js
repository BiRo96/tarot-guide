import { Link } from "react-router-dom";
import { __ } from "../components/LanguageHandler";

function About() {
return <div className="flex justify-center w-screen">
        <div className="max-w-7xl text-center">
            <h1 className="text-3xl font-bold">{__("Tarot Guide App")}</h1>
            <h2 className="text-xl font-bold">(Tarot Guide App)</h2>
            <h3 className="text-lg italic">{__("The digitalized Tarot Guide Book for everyone")}</h3>
            <h4 className="text-sm italic">{__("by")} <Link to="https://github.com/BiRo96" target="_blank" className="text-blue-300"><b>BiRo</b></Link></h4>
            <h3 className="text-xs italic">{__("Make no mistake, there is no such book published by me")}</h3>
            
            <div className="p-2 mt-4">
                <h3 className="text-2xl font-bold">{__("Made with")}:</h3>
                <ul>
                    <li><Link to="https://reactjs.org/" target="_blank" className="text-blue-300">ReactJS</Link></li>
                    <li><Link to="https://react-icons.netlify.app/" target="_blank" className="text-blue-300">React-Icons</Link></li>
                    <li><Link to="https://tailwindcss.com/" target="_blank" className="text-blue-300">TailwindCSS</Link></li>
                    <li><Link to="https://www.electronjs.org/" target="_blank" className="text-blue-300">ElectronJS</Link></li>
                    <li>{__("and a lot of interest")}</li>
                </ul>
            </div>
            <div className="p-2 mt-4">
                <h3 className="text-2xl font-bold">{__("Want to contribute?")}</h3>
                <p>{__("Check out the project's")} <Link to="https://github.com/BiRo96/tarot-guide" target="_blank" className="text-blue-300"><b>{__("GitHub repository")}</b></Link></p>
                <p>{__("or feel free to")} <Link to="https://github.com/BiRo96/tarot-guide/issues" target="_blank" className="text-blue-300"><b>{__("open an issue")}</b></Link>.</p>
            </div>
            <div className="p-2 mt-4">
                <h3 className="text-2xl font-bold">{__("Future plans")}</h3>
                <p>{__("In my plans, there is a huge place for translations.")}</p>
                <p>{__("I'd like to make this project multilingual to support as much different languages as I can.")}</p>
                <p>{__("But I will need help for that, after I managed to make it possible to translate it.")}</p>
                <p className="mt-4">{__("And of course I'm planning to figure out what kind of design I should use for this project.")}</p>
                <p>{__("It is only the beginning, so it may change drasticly over time. :)")}</p>
            </div>
            <div className="p-2 mt-4">
                <h3 className="text-2xl font-bold">{__("Sources")}</h3>
                <p>{__("Since I'm not an expert, I can't help you understand the Tarot cards by myself.")}</p>
                <p>{__("But I try to gather the most reliable sources the create an offline over-all guidebook app.")}</p>
                <p className="mt-4 font-bold">{__("My main sources")}:</p>
                <ul className="border-2 border-black">
                    <li className="py-3 border-b border-black bg-slate-400">
                        <div className="bg-slate-500">Wikipedia</div>
                        <div className="text-white bg-slate-800"><Link to="https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot" target="_blank" className="text-blue-300">({__("I took the original Rider-Waite tarot deck images from here")})</Link></div>
                        <div className="text-white bg-slate-700"><Link to="https://commons.wikimedia.org/wiki/Category:The_Illustrated_Key_to_the_Tarot_(set_of_cards)" target="_blank" className="text-blue-300">({__("I took the \"The Illustrated Key to the Tarot\" Rider-Waite tarot deck images from here")})</Link></div>
                    </li>
                    <li className="py-3 border-b border-black bg-slate-400">
                        <div className="bg-slate-500"><Link to="https://chatgpt.com/" target="_blank" className="text-blue-300">ChatGPT 4.0 / 3.5</Link></div>
                        <div className="text-white bg-slate-800">({__("It made the card and spread datas and meanings summarized with keywords")})</div>
                    </li>
                    <li className="py-3 border-b border-black bg-slate-400">
                        <div className="bg-slate-500"><Link to="https://bing.com/chat" target="_blank" className="text-blue-300">Bing Copilot</Link></div>
                        <div className="text-white bg-slate-800">({__("It generated the unique card back for this project")})</div>
                    </li>
                    <li className="py-3 border-b border-black bg-slate-400">
                        <div className="bg-slate-500">{__("Books about the Tarot")}</div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>;
}

export default About