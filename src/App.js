import React, {useState} from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  // Calling my API 
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=fc85c699f910ea9a4d22d0f56f4a0e20`


  return (
    <div className="app"> 
     <div className='container'>
      <div className='top'>
        <div className='location'>
          <p>Welkom</p>
        </div>
        <div className='temp'>
          <h1>30℃ </h1>
        </div>
        <div className='description'>
          <p>Clouds</p>
        </div>
      </div>
      <div className='bottom'>
        <div className='feels'>
          <p className='bold'>28°C</p>
          <p>Feels like</p>
        </div>
        <div className='humidity'>
          <p className='bold'>10%</p>
          <p>Humidity</p>
        </div>
        <div className='wind'>
          <p className='bold'>5 MPH</p>
          <p>Wind speed</p>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
