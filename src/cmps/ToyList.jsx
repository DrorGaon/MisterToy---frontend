import { ToyPreview } from "./ToyPreview.jsx"

export function ToyList({ toys, onRemoveToy }) {
    return (
        <ul className="toy-list">
            {toys.map(toy =>
                <li key={toy._id}>
                    <ToyPreview toy={toy} onToggleToy={()=>onToggleToy(toy)} />
                    <section>
                        <button onClick={() => onRemoveToy(toy._id)}>Remove</button>
                    </section>
                </li>
            )}
        </ul>
    )
}