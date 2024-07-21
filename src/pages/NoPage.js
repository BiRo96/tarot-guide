import { getDeck } from "../components/ConfigHandler";
import { __ } from '../components/LanguageHandler';
import { Link } from "react-router-dom";

function NoPage(params) {
    let TheHermit = "../decks/" + getDeck() + "/thehermit.jpg";
    let TheMoon = "../decks/" + getDeck() + "/themoon.jpg";
    let TheHangedMan = "../decks/" + getDeck() + "/thehangedman.jpg";

    // number between 1 and 3
    const rndInt = Math.floor(Math.random() * 3) + 1

    let img
    let msg
    if (rndInt === 1) {
        // The Moon
        img = TheMoon
        msg = __("This is not the real road you are looking for, you can't find anything here.")
    } else if (rndInt === 2){
        // The Hermit
        img = TheHermit
        msg = __("It's so lonely here... You have to keep looking for the right way...")
    } else {
        // The Hanged Man
        img = TheHangedMan
        msg = __("You seem a little stucked...")
    }

    return (
    <div className="text-center">
      <header className="flex flex-col justify-center items-center min-h-screen text-2xl text-white bg-slate-800">
        <p className="">
            <span className="text-7xl text-red-500">404</span> <br/>{__("page does not exist")}
        </p>
        <img src={img} className="my-10 h-96 pointer-events-none motion-safe:animate-spin-slow" alt="logo" />
        <p className="">
          {msg}
        </p>
        <p className="">
            <Link className="text-blue-300" to="/enc/home">{__("Back to Home")}</Link>
        </p>
      </header>
    </div>
  );
}

export default NoPage