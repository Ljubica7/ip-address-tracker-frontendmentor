import React, { useEffect } from "react";
import arrowIcon from "../assets/icon-arrow.svg";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const Hero = ({ ipAddress, setIpAddress, setResults }) => {
  const handleChange = (event) => {
    setIpAddress(event.target.value);
  };
  // const { data, error, isLoading } = useSWR(
  //   `https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_GEOLOCATION_API_KEY}`,
  //   fetcher
  // );

  useEffect(() => {
    setResults({
      ip: "77.28.91.207",
      location: "skopje, MK",
      timezone: "+01:00",
      isp: "Makedonski Telekom",
    });
    // setResults(data);

    return () => {
      setResults({});
    };
  }, [setResults]);
  // }, [data, setResults]);

  const handleSubmit = () => {
    // console.log(ipAddress);
    // setResults("qweqwe");
  };

  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;

  return (
    <div className="hero">
      <h1>IP Address Tracker</h1>

      <div className="form-control">
        <input
          type="search"
          name="tracker"
          placeholder="Search for any IP address or domain"
          value={ipAddress}
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
