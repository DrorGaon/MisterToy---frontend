

export function ToyPreview({ toy }) {
    return (
        <article className="toy-preview">
            <h2>
                Toy: {toy.name}
            </h2>
            <h4>Price: {toy.price}$</h4>
            <h4>{toy.inStock ? 'Avialble' : 'Out of stock'}</h4>
        </article>
    )
}
