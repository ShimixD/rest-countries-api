import { useState, useEffect } from 'react'
import CountriesData from '../assets/data.json'
import Search from './components/sections/Search'
import Filters from './components/sections/FiltersRegion'

export default function Home() {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        setCountries(CountriesData);
        setFilteredCountries(CountriesData);
    }, []);
    const handleSearch = (searchValue) => {
        const filteredData = countries.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredCountries(filteredData);
    };
    const handleFilter = (filteredData) => {
        setFilteredCountries(filteredData);
    };

    return (
        <main className="main-container">
            <article className="search-container">
                <Search handleChanges={handleSearch} />
                <Filters country={countries} setCountry={handleFilter} />
            </article>
            <section className="cards-container">
                {filteredCountries.map((e) => {
                    return (
                        <a className="card" href={e.name} key={e.name}>
                            <div className="card-image" style={{ backgroundImage: `url(${e.flag})` }}></div>
                            <div className="card-text">
                                <h1>{e.name}</h1>
                                <p>Population: <span>{e.population.toLocaleString()}</span></p>
                                <p>Region: <span>{e.region}</span></p>
                                <p>Capital: <span>{e.capital}</span></p>
                            </div>
                        </a>
                    )
                })}
            </section>
        </main>
    )
}