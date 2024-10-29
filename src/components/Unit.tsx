import Item from './Item'

interface Props {
    setUnit: (x: string) => void
}

export default function Unit({setUnit}: Props) {
  return (
    <div className='f-or-c'>
        <Item itemName='℉' setUnit={setUnit}/>
        <Item itemName='℃' setUnit={setUnit}/>
    </div>
  )
}
