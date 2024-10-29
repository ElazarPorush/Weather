import { useEffect, useState } from "react";
import Unit from "./components/Unit";
import Search from "./components/Search";
import Temperature from "./components/Temperature";

export default function App() {
  const [temp, setTemp] = useState(27.13)
  const [icon, setIcon] = useState("")
  const [unit, setUnit] = useState('metric')
  const [city, setCity] = useState("Jerusalem")
  useEffect(() => {
    (async () => {
      const keyApi = "d7f64e05043d19af9eb95658ec1a2f74"
      const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=${unit}`)
      const data = await result.json()
      setTemp(data.main.temp)
      setIcon(data.weather[0].icon)
    })()
  }, [unit, city])

  return (
    <div>
      <Search setCity={setCity} />
      <Temperature temp={temp} icon={icon} />
      <Unit setUnit={setUnit} />
    </div>
  )
}
