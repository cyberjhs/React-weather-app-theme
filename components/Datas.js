import React from 'react'

const Datas = ({data,tempd,icondata}) => {
    const logo = `https://openweathermap.org/img/wn/${icondata.icon}@4x.png`;
    
  return (
    <div>
      <div className='city'>
        <h1>{data.name} ({data.country})</h1>
        <img src={logo} alt='logo'/>
        <h1>{Math.round(tempd.temp)}° Cel</h1>
      </div>
      <div className='tempDetails'>
        <span>
            <p>{tempd.temp_max}° Cel</p>
            <p>MaxTemp</p>
        </span>
        <span>
            <p>{tempd.temp_min}° Cel</p>
            <p>MinTemp</p>
        </span>
        <span>
            <p>{tempd.humidity}° Cel</p>
            <p>Humidity</p>
        </span>
      </div>
    </div>
  )
}

export default Datas
