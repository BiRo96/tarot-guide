import { Link } from "react-router-dom";

function Home() {
return <div className="w-screen flex justify-center">
        <div className="max-w-7xl text-center">
            <h1 className="text-3xl">Welcome to <b>Tarot Guide</b> App</h1>
            <div className="mt-4 p-2">
                <p>This project is meant to be an encyclopedia for tarot decks, cards and the meanings behind them.</p>
                <p>The main puprose behind it is to gather all the important and interesting information about the Tarot.</p>
                <p>Hope you'll find it useful.</p>
            </div>
            <div className="mt-4 p-2">
                <p>Made with <b>React</b>, <b>Tailwind</b> and a lot of interest</p>
                <p>by <Link to="https://github.com/BiRo96" className="text-blue-300"><b>BiRo</b></Link></p>
            </div>
            <div className="mt-4 p-2">
                <h3 className="text-2xl font-bold">Want to contribute?</h3>
                <p>Check out the project's <Link to="https://github.com/BiRo96/tarot-guide" className="text-blue-300"><b>GitHub repository</b></Link></p>
                <p>or feel free to <Link to="https://github.com/BiRo96/tarot-guide/issues" className="text-blue-300"><b>open an issue</b></Link>.</p>
            </div>
            <div className="mt-4 p-2">
                <h3 className="text-2xl font-bold">Future plans</h3>
                <p>In my plans, there is a huge place for translations.</p>
                <p>I'd like to make this project multilingual to support as much different languages as I can.</p>
                <p>But I will need help for that, after I managed to make it possible to translate it.</p>
                <p className="mt-4">And of course I'm planning to figure out what kind of design I should use for this project.</p>
                <p>It is only the beginning, so it may change drasticly over time. :)</p>
            </div>
            <div className="mt-4 p-2">
                <h3 className="text-2xl font-bold">Sources</h3>
                <p>Since I'm not an expert, I can't help you understand the Tarot cards by myself.</p>
                <p>But I try to gather the most reliable sources the create an offline over-all guidebook app.</p>
                <p className="mt-4 font-bold">My main sources:</p>
                <ul className="border-2 border-black">
                    <li className="border-b border-black py-3 bg-slate-400">
                        <div className="bg-slate-500"><Link to="https://www.dailytarotdraw.com" className="text-blue-300">Daily Tarot Draw</Link></div>
                        <div className="bg-slate-800 text-white">(I took the original Rider-Waite tarot deck images from here)</div>
                    </li>
                    <li className="border-b border-black py-3 bg-slate-400">
                        <div className="bg-slate-500"><Link to="https://chatgpt.com/" className="text-blue-300">ChatGPT 4.0 / 3.5</Link></div>
                        <div className="bg-slate-800 text-white">(It made the card datas and meanings summarized with keywords)</div>
                    </li>
                    <li className="border-b border-black py-3 bg-slate-400">
                        <div className="bg-slate-500">Books about the Tarot</div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>;
}

export default Home