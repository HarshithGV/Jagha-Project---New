import React, { useEffect, useState } from 'react';
import "./App.css";
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('http://jagah2-env.eba-m3zawypz.us-east-2.elasticbeanstalk.com:80/getPlaces')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div class="country">
      <h1>Place Data</h1>
	  <div class="table">
      <table>
        <thead>
          <tr>
            <th>Place Name</th>
            
          </tr>
        </thead>
        <tbody>
          {countries.map(country => (
            <tr key={country.id}>
              <td>{country.place_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
	  </div>
    </div>
  );
}

export default App;
