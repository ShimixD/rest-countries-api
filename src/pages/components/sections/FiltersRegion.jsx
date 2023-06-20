import { useState } from "react";

export default function Filters({ country, setCountry }) {
  const [regionListActive, setRegionListActive] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const toggleRegionList = () => {
    setRegionListActive(!regionListActive);
  };
  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    filterRegion(region);
  };
  const filterRegion = (region) => {
    if (region) {
      const filteredData = country.filter(
        (item) => item.region.toLowerCase() === region.toLowerCase()
      );
      setCountry(filteredData);
    } else {
      setCountry(country);
    }
  };

  const regionList = [
    { label: "Africa", name: "africa" },
    { label: "Americas", name: "americas" },
    { label: "Asia", name: "asia" },
    { label: "Europe", name: "europe" },
    { label: "Oceania", name: "oceania" },
  ];

  return (
    <section className="filter-container">
      <summary onClick={toggleRegionList} className={regionListActive ? "summary-active" : "summary-false"}>Filter by Region</summary>
      {regionListActive && (
        <div className="region-list">
          {regionList.map((region) => (
            <li
              key={region.label}
              onClick={() => {
                handleRegionClick(region.name);
                toggleRegionList()
              }
              }
              className={region.name === selectedRegion ? "active" : ""}
            >
              {region.label}
            </li>
          ))}
        </div>
      )}
    </section>
  );
}
