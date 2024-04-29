
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6

const Country = ({ countrydata }) => {

    return (
        <div className="relative onik rounded-2xl overflow-hidden">
            <Link to={`/country/${countrydata.countryName}`}>
                <div>
                    <img className="w-full h-full" src={countrydata.image}></img>
                    <div className="country-content absolute">
                        <h1 className="text-2xl capitalize font-medium">{countrydata.countryName}</h1>
                        <p>{countrydata.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Country.propTypes = {
    countrydata:PropTypes,
}

export default Country;