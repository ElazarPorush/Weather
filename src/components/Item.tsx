interface Props {
    itemName: string
    setCurrUnit: (x: string) => void
}

export default function Item({ itemName, setCurrUnit }: Props) {
    return (
        <div className='item'>
            <button onClick={() => {
                if (itemName === "℉"){
                    setCurrUnit("imperial")
                }
                else {
                    setCurrUnit("metric")
                }
            }}>{itemName}
            </button>
        </div>
    )
}