import "./styles/style.scss";
import Hero from "./components/Hero";
import { useState } from "react";
import { Map } from "./components/Map";

function App() {
  const [ipAddress, setIpAddress] = useState("");
  const [results, setResults] = useState({});
  const [position, setPosition] = useState([51.505, -0.09]);

  // console.log(results);

  return (
    <div className="App">
      <Hero
        ipAddress={ipAddress}
        setIpAddress={setIpAddress}
        setResults={setResults}
      />
      <Map results={results} position={position} />
    </div>
  );
}

export default App;
