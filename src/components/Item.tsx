interface Props {
    itemName: string
    setUnit: (x: string) => void
}

export default function Item({ itemName, setUnit }: Props) {
    return (
        <div className='item'>
            <button onClick={() => {
                itemName === "℉"? setUnit("imperial"): setUnit("metric") 
            }}>{itemName}
            </button>
        </div>
    )
}