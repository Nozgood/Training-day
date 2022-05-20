const plantList = [
    'monstera',
    'ficus lyrata',
    'potchos argenté',
    'yucca',
    'palmier'
]

const ShoppingList = () => {
    return (
        <ul>
            {plantList.map((plant, index)=> 
                (<li key={`${plant}-${index}`}> { plant }</li>
            ))}
        </ul>
    )
}

export default ShoppingList