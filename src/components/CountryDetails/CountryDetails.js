import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]));
    }, []);
    const { name, flags, area, region, subregion, population } = country;
    return (
        <div>
            <h2>Welcome to {countryName}!</h2>
            <div className="col w-50 mx-auto">
                <div className="card h-100">
                    <img src={flags?.png} className="card-img-top p-2 rounded-2" width='200px' height='250px' alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name?.common}</h5>
                        <div className="card-text">
                            <p>Region: {region}</p>
                            <p>Subregion: {subregion}</p>
                            <p>Population: {population}</p>
                            <p>Area: {area} Sq.KM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;