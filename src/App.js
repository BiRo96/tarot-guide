import deck from './decks/rw_original/theworld.jpg';
import './App.css';

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center text-2xl text-white bg-slate-800">
        <img src={deck} className="my-10 pointer-events-none h-96 motion-safe:animate-spin-slow" alt="logo" />
        <p>
          The <b>world</b> in which we live, <br/>
          has a lot magic waiting for thee
        </p>
        <a
          className="text-blue-300"
          href="/enc/home"
        >
          Open the encyclopedia
        </a>
      </header>
    </div>
  );
}

export default App;
