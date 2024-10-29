import Item from './Item'

interface Props {
    setCurrUnit: (x: string) => void
}

export default function FOrC({setCurrUnit}: Props) {
  return (
    <div className='f-or-c'>
        <Item itemName='℉' setCurrUnit={setCurrUnit}/>
        <Item itemName='℃' setCurrUnit={setCurrUnit}/>
    </div>
  )
}
