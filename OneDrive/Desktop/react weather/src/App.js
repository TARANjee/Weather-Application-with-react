import React, { useState, useEffect } from 'react'
import Details from './Components/Details';
import Weather from './Components/Weather';
const Base_Url = 'http://api.weatherapi.com/v1'


function App() {
  let [data, setData] = useState({});
  let [background, setBackground] = useState('');
  const apiCall = async (location) => {
   
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
    Changebackground('hello');
  }

  const Changebackground = (q) => {
    console.log('call :>> ', q);
    if (!data.current) return;
    if (data.current.is_day === 1) {
      setBackground('/img/day/sunny.jpg')
    }
    else {
      setBackground('/img/night/night.jpg')
    }

  }
  useEffect(() => {
    apiCall();
    Changebackground('hello');
  }, [])
  console.log(data)
  console.log(background)
  return (
    <div className="row main ">
      <div className="col-8  weather d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${background ? background: '/img/1310510.jpg'})` }}  >
        <Weather location={data.location ? data.location : ''} current={data.current ? data.current : ''} />
      </div>
      <div className='col-4 detail p-4'>
        <Details apiCall={apiCall} current={data.current ? data.current : ''} />
      </div>
    </div>
  );
}

export default App;
