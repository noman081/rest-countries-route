import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = (props) => {
    const { name, flags, region, subregion, population, area } = props.country;
    const navigate = useNavigate();

    const handleCountry = () => {
        const path = `/country/${name.common}`;
        navigate(path);
    }
    return (
        <div className="col">
            <div className="card h-100">
                <img src={flags.png} className="card-img-top p-2 rounded-2" width='200px' height='200px' alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name.common}</h5>
                    <div className="card-text">
                        <p className='m-0'>Region: {region}</p>
                        <p>Area: {area} Sq.KM</p>
                    </div>
                </div>
                <button className="btn btn-outline-primary" onClick={handleCountry}>See Details</button>
            </div>
        </div>
    );
};

export default Country;