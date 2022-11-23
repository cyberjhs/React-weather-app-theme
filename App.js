import React, { useEffect,useState } from 'react'
import Datas from './components/Datas';
import darklogo from './dark.png'
import lightlogo from './light.png'
const APP_KEY= "35acd0e7fc9e307eee4ba4604215e173";
function App() {
  const [city,setCity]=useState("noida");
  const [isclicked]=useState(false);
  const [theme,setTheme] = useState(true)
  const [cityDetails,setCityDetails]=useState([]);
  const [tempDetails,setTempDetails]=useState([]);
  const [iconDetails,seticonDetails]=useState([]);
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APP_KEY}&units=metric`;
  useEffect(() => {
    fetchData();
  }, [isclicked]);

    const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCityDetails(data.city);
    setTempDetails(data.list[0].main);
    seticonDetails(data.list[0].weather[0]);
    console.log(data);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') fetchData();
    };

  return (
    <div className={  [theme ? "light" : "dark" , "main"].join(' ')}>
      <div>
        <h1 className='heading'>REACT WEATHER APP <img style={{cursor:'pointer'}} onClick={() => setTheme(!theme)} className='theme' src={theme? darklogo:lightlogo } alt='#'/></h1>
        <div className='container'>
          <input type={'text'} placeholder="Enter City Name" onChange={(e) => {setCity(e.target.value)}} onKeyDown={handleKeyDown}/>
          <Datas data={cityDetails} tempd={tempDetails} icondata={iconDetails}/>
        </div>
      </div>
    </div>
  );
}

export default App;
