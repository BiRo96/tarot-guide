import './App.css';
import {appMainURL} from "./components/UrlHandler";
import { __ } from "./components/LanguageHandler";
import { getDeck } from './components/ConfigHandler';

function App() {
  let theworld = './decks/' + getDeck() + '/theworld.jpg';
  return (
    <div className="text-center">
      <header className="flex flex-col justify-center items-center min-h-screen text-2xl text-white bg-slate-800">
        <img src={theworld} className="my-10 h-96 pointer-events-none motion-safe:animate-spin-slow" alt="logo" />
        <p>
          <b>{__("The world")}</b> {__("in which we live,")} <br/>
          {__("has a lot magic waiting for thee")}
        </p>
        <a
          className="text-blue-300"
          href={"/" + appMainURL + "/home"}
        >
          {__("Open the encyclopedia")}
        </a>
      </header>
    </div>
  );
}

export default App;
