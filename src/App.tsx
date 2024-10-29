import { useEffect, useState } from "react";
import FOrC from "./components/FOrC";
import Search from "./components/Search";
import Temperature from "./components/Temperature";

export default function App() {
  const [currTemp, setCurrTemp] = useState(27.13)
  const [currIcon, setCurrIcon] = useState("04d")
  const [currUnit, setCurrUnit] = useState('metric')
  const [currCity, setCurrCity] = useState("Jerusalem")
  useEffect(() => {
    const searchCity = async () => {
      const keyApi = "d7f64e05043d19af9eb95658ec1a2f74"
      const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${keyApi}&units=${currUnit}`)
      const city = await result.json()
      setCurrTemp(city.main.temp)
      setCurrIcon(city.weather[0].icon)
    }
    searchCity()
  }, [currUnit, currCity])
  
  return (
    <div>
      <Search setCurrCity={setCurrCity}/>
      <Temperature temp={currTemp} icon={currIcon}/>
      <FOrC setCurrUnit={setCurrUnit}/>
    </div>
  )
}
