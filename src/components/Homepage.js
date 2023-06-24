import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('http://jagah2-env.eba-m3zawypz.us-east-2.elasticbeanstalk.com:80/getCountries')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div class="country">
      <h1>Country Data</h1>
	  <h6>Download country data by clicking below button</h6>
	  <Link to="Razorpaycountry"><button>Download</button></Link>
	  <br/><br/>
	  <div class="table">
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Country Code</th>
            
          </tr>
        </thead>
        <tbody>
          {countries.map(country => (
            <tr key={country.id}>
              <td>{country.country_name}</td>
              <td>{country.country_code}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
	  </div>
    </div>
  );
}

export default App;
