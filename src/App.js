import "./styles/style.scss";
import Hero from "./components/Hero";
import { useState } from "react";
import { Map } from "./components/Map";

function App() {
  const [ipAddress, setIpAddress] = useState("77.28.91.207");
  const [results, setResults] = useState({});

  return (
    <div className="App">
      <Hero
        ipAddress={ipAddress}
        setIpAddress={setIpAddress}
        setResults={setResults}
        results={results}
      />

      {results && results.ip ? <Map results={results} /> : ""}
    </div>
  );
}

export default App;
