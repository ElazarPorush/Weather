import {  useState } from "react"

interface Props {
  setCurrCity: (x: string) => void
}

export default function Search({ setCurrCity }: Props) {
  const [input, setInput] = useState("")
  return (
    <div>
      <input
        onChange={e => {
          setInput(e.target.value)
        }}
        onKeyDown={g => {
          if (g.key === 'Enter') {
            setCurrCity(input)
          }
        }}
        type="text"
        placeholder='Enter A City'
      />
    </div>
  )
}