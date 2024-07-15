import TheHermit from "../decks/rw_original/thehermit.jpg";
import TheMoon from "../decks/rw_original/themoon.jpg";
import TheHangedMan from "../decks/rw_original/thehangedman.jpg";
import { __ } from '../components/LanguageHandler';
import { Link } from "react-router-dom";

function NoPage(params) {
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
      <header className="min-h-screen flex flex-col items-center justify-center text-2xl text-white bg-slate-800">
        <p className="">
            <span className="text-red-500 text-7xl">404</span> <br/>{__("page does not exist")}
        </p>
        <img src={img} className="my-10 pointer-events-none h-96 motion-safe:animate-spin-slow" alt="logo" />
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