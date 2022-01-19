import { TextField, FormControl, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState} from 'react'
import "./styles.css"

const Details = ({ apiCall, current,Changebackground }) => {

  const [location, setLocation] = useState("");

  const handleSearch = () => {
    apiCall(location);
    Changebackground();
  }

  return (
    <div >
      <FormControl variant="standard" className="search  d-flex flex-row justify-content-center">
        <TextField
          className="seachbox"
          label="Search location"
          variant="standard"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          sx={{
            input: { color: 'white' }, label: { color: 'white' }, border: { color: 'white' },
            "& label.Mui-focused": {
              color: 'white'
            },

            // focused color for input with variant='standard'
            "& .MuiInput-underline:after": {
              borderBottomColor: 'white'
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: 'white'
            },

            // focused color for input with variant='filled'
            "& .MuiFilledInput-underline:after": {
              borderBottomColor: 'white'
            },
            '&:hover fieldset': {
              borderBottomColor: 'white',
            },
            // focused color for input with variant='outlined'
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: 'white'
              }
            }
          }}

          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),

          }}

        />

        <button className='btn searchBtn' onClick={() => handleSearch()}><SearchIcon /></button>

      </FormControl>


      <div className='details-block'>
        <h2>Weather Details</h2>
        <div className="details-element">
          <div className='label'>Cloudy</div>
          <div>{current?current.cloud:"10"}%</div>
        </div>
        <div className="details-element">
          <div className='label'>Humidity</div>
          <div>{current?current.humidity:"10"}%</div>
        </div>
        <div className="details-element">
          <div className='label'>Wind</div>
          <div>{current?current.wind_kph:"10"}km/h</div>
        </div>
        <div className="details-element">
          <div className='label'>UV</div>
          <div>{current?current.uv:"10"}%</div>
        </div>
      </div>
    </div >
  )
}

export default Details
