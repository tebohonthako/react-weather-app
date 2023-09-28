//imports the necessary libraries, including React, useState for managing component state, 
// and Axios for making HTTP requests.
import React, {useState} from 'react'; 
import axios from 'axios';

// Three state variables are defined using the useState hook:
function App() {
  const [data, setData] = useState({})                 //store the weather data retrieved from the API.
  const [location, setLocation] = useState('')         //store the user's input for the location.
  const [error, setError] = useState('');              //store any error messages.

  // const API_KEY = 'fc85c699f910ea9a4d22d0f56f4a0e20';


  // This function is an asynchronous function that is called when the user clicks the "Search" button or 
  // presses Enter after typing a location. 

  // 1.     It makes an HTTP GET request to the OpenWeatherMap API with the user's specified location.
  // 2.     If the request is successful, it updates the data state with the response data and clears any error messages.  
  // 3.     If the request is successful, it updates the data state with the response data and clears any error messages. 
  // 4.     If there is an error (e.g., if the location is not found), it sets an error message in the error state.
  
  const searchLocation = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fc85c699f910ea9a4d22d0f56f4a0e20`
      );

      setData(response.data);
      setError('');
    } catch (err) {
      setError('Location not found.');
      setData({});
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              searchLocation();
            }
          }}
          placeholder="Enter Location"
          type="text"
        />
        <button onClick={searchLocation}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      {data.main && (
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              <h1>{Math.round(data.main.temp - 273.15)}°C</h1>
            </div>
            <div className="description">
              <p>{data.weather[0].main}</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p className="bold">{Math.round(data.main.feels_like - 273.15)}°C</p>
              <p>Feels like</p>
            </div>
            <div className="humidity">
              <p className="bold">{data.main.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">{data.wind.speed} MPH</p>
              <p>Wind speed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
// Please replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual OpenWeatherMap API key. 
// This code should work by allowing the user to input a location and fetch weather data from the OpenWeatherMap API when the "Search" button is clicked or the Enter key is pressed.

