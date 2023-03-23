import React, { useEffect, useState } from "react";
import arrowIcon from "../assets/icon-arrow.svg";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const Hero = ({ ipAddress, setIpAddress, setResults, results }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    setIpAddress(input);
  };

  const { data, error, isLoading } = useSWR(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_GEOLOCATION_API_KEY}&ipAddress=${ipAddress}
`,
    fetcher
  );

  useEffect(() => {
    setResults(data);
  }, [data, results, setResults]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="hero">
      <h1>IP Address Tracker</h1>

      <div className="form-control">
        <input
          type="search"
          name="tracker"
          placeholder="Search for any IP address or domain"
          value={input}
          onChange={handleChange}
        />
        <button
          type="submit"
          aria-label="search results"
          onClick={() => handleSubmit()}
        >
          <img src={arrowIcon} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
