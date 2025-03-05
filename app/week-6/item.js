export function Item ({name, quantity, category}) {
    return (
        <div className = "p-4 rounded-lg m-4 bg-blue-300 w-48">
            <h2>{name}</h2>
            <h2>Buy {quantity} in {category}</h2>
        </div>
    )
}