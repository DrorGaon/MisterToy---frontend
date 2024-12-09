import { useNavigate } from "react-router-dom"
import { ToyPreview } from "./ToyPreview.jsx"

export function ToyList({ toys, onRemoveToy }) {

    const navigate = useNavigate()

    return (
        <ul className="toy-list">
            {toys.map(toy =>
                <li key={toy._id}>
                    <ToyPreview toy={toy} onToggleToy={()=>onToggleToy(toy)} />
                    <section>
                        <button onClick={() => onRemoveToy(toy._id)}>Remove</button>
                        <button onClick={() => navigate(`/toys/${toy._id}`)}>Details</button>
                        <button onClick={() => navigate(`/toys/edit/${toy._id}`)}>Edit</button>
                    </section>
                </li>
            )}
        </ul>
    )
}