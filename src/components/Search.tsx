interface Props {
  setCity: (x: string) => void
}

export default function Search({ setCity }: Props) {
  return (
    <div>
      <input
        onChange={e => {
          setCity(e.target.value)
        }}
        type="text"
        placeholder='Search A City'
      />
    </div>
  )
}