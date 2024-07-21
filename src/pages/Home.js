import { __ } from "../components/LanguageHandler";

function Home() {
return <div className="flex justify-center w-screen h-screen">
        <div className="m-auto max-w-7xl text-center">
            <h1 className="text-3xl">{__("Welcome to")} <b>{__("Tarot Guide App")}</b></h1>
            <div className="p-2 mt-4">
                <p>{__("This project is meant to be an encyclopedia for tarot decks, cards and the meanings behind them.")}</p>
                <p>{__("The main puprose behind it is to gather all the important and interesting information about the Tarot.")}</p>
                <p>{__("Hope you'll find it useful.")}</p>
            </div>
            <div className="p-2 mt-4">
                <img src={require("../imgs/threecardback.png")} />
            </div>
        </div>
    </div>;
}

export default Home