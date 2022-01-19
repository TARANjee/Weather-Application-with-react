import React from 'react'
import "./styles.css"

const Weather = ({ location, current }) => {
    return (
        <div className="card cardView d-flex flex-column justify-content-center align-items-center" >
            <div className=" mb-3 d-flex flex-column align-items-center ">
                <div className=" d-flex justify-content-end align-items-end">
                    <div className="fs-1">{location.name === 'Dehra' ? location.name + 'dun' : location.name}, </div>
                    <div className="fs-5 p-1">{location.country}</div>
                </div>
                <div className="condition fs-5">{current?current.condition.text:""}</div>
            </div>
            <img src={current?current.condition.icon:"./img/clouds.png"} alt="condition icon" />
            <div className="card-title fs-1 mt-4">{current?Math.round(current.temp_c):""} &deg;C</div>
        </div>

    )
}

export default Weather
