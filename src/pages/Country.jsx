import CountriesData from '../assets/data.json'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function Country() {
    const [countries, setCountries] = useState([]);
    const { CountryName } = useParams()

    useEffect(() => {
        setCountries(CountriesData);
    }, []);
    const countryFind = countries.find((e) => CountryName === e.name)

    return (
        <>
            {countryFind && (
                <main className="main-container">
                    <a className="back-button" href="/">
                        <i className="fa-solid fa-arrow-left"></i>
                        Back
                    </a>
                    <div className="country-container">
                        <img className="country-image" src={countryFind.flag} alt="country image" />
                        <section className="country-info">
                            <h1>{countryFind.name}</h1>
                            <div className="country-info-block">
                                <div className="country-info1 info-block">
                                    <p>Native Name: <span>{countryFind.nativeName}</span></p>
                                    <p>Population: <span>{countryFind.population.toLocaleString()}</span></p>
                                    <p>Region: <span>{countryFind.region}</span></p>
                                    <p>Sub Region: <span>{countryFind.subregion}</span></p>
                                    <p>Capital: <span>{countryFind.capital}</span></p>
                                </div>
                                <div className="country-info2 info-block">
                                    <p>Top Level Domain: <span>{countryFind.topLevelDomain}</span></p>
                                    <p>Currencies: <span>{countryFind.currencies ? countryFind.currencies[0]?.name : 'Unknown'}</span></p>
                                    <p>Languages: <span>{countryFind.languages[0].name}</span></p>
                                </div>
                            </div>
                            <div className="border-countries">
                                <p>Border Countries: </p>
                                {countryFind.borders ? (
                                    countryFind.borders.map((e) => {
                                        const matchingCountry = countries.find((country) => country.alpha3Code === e);
                                        return (
                                            <a href={`/${matchingCountry.name}`} className="border-country" key={e}>{matchingCountry.name}</a>
                                        )
                                    })
                                ) : <p>No Borders</p>}
                            </div>
                        </section>
                    </div>
                </main>
            )}
        </>
    )
}