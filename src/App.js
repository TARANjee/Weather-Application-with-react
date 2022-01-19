import React, { useState, useEffect } from 'react'
import Details from './Components/Details';
import Weather from './Components/Weather';
const Base_Url = 'http://api.weatherapi.com/v1'


function App() {
  let [data, setData] = useState({});
  let [background, setBackground] = useState('');
  
  const apiCall = async (location) => {
    Changebackground(data);
    if (!location) {
      await fetch(`${Base_Url}/forecast.json?q=auto:ip&key=${process.env.REACT_APP_KEY}`)
        .then(res => res.json())
        .then(data => setData(data))
    }
    else {
      await fetch(`${Base_Url}/forecast.json?q=${location}&key=${process.env.REACT_APP_KEY}`)
        .then(res => res.json())
        .then(data => setData(data))
    }

  }

  const Changebackground = (q) => {
    console.log('call :>> ', q);
    if (!data.current) return;
    if (data.current.is_day === 1) {
      if (data.current.condition === "Sunny") {
        setBackground('/img/day/sunny.jpg')
      }
      if (data.current.condition === "Partly cloudy") {
        setBackground('/img/day/partly-Cloudy.jpg')
      }
      if (data.current.condition === "Mist") {
        setBackground('/img/day/mist.jpg')
      }
    }
    else {
      setBackground('/img/night/night.jpg')
    }

  }
  useEffect(() => {
    apiCall();
  })
  console.log(data)
  console.log(background)
  return (
    <div className="row main ">
      <div className="col-8  weather d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${background ? background : '/img/1310510.jpg'})` }}  >
        <Weather location={data.location ? data.location : ''} current={data.current ? data.current : ''} />
      </div>
      <div className='col-4 detail p-4'>
        <Details apiCall={apiCall} current={data.current ? data.current : ''} back={Changebackground()} />
      </div>
    </div>
  );
}

export default App;
