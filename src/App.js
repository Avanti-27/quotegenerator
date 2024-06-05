import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://type.fit/api/quotes");
    const res = await data.json();
    setQuotes(res);
    setQuote(res[1]);
  };

  const generateRandomQuote = (quotes) => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const handleClick = () => {
    setQuote(generateRandomQuote(quotes));
  };

  return (
    <div className="">
      <h1 className="font-bold text-5xl text-center p-4 m-10">
        Quote Generator
      </h1>
      <div className="w-[30%] bg-black text-white mx-auto my-0 p-8 m-8 text-center">
        <button
          className="border-white border-2 p-3 m-2 text-xl"
          onClick={handleClick}
        >
          New Quote
        </button>
        <p className="text-2xl p-2 m-4">{quote?.text}</p>
        <p className="text-xl p-2">- {quote?.author}</p>
      </div>
    </div>
  );
}

export default App;
