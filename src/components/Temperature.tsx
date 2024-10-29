interface Props {
    temp: number
    icon: string
}

export default function Temperature({temp, icon}:Props) {
  return (
    <div>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
        <h1>{`${temp}°`}</h1>
    </div>
  )
}
