import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toyService } from "../services/toy.service"
import { showErrorMsg } from "../services/event-bus.service"


export function ToyDetails() {

    const [toy, setToy] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadToy()
    }, [params.toyId])

    async function loadToy() {
        toyService.get(params.toyId)
        try{
            const toy = await toyService.get(params.toyId)
            setToy(toy)
        } catch (err){
            console.error('err:', err)
            showErrorMsg('Problem loading toy')
            navigate('/toys')
        }
    }

    function onBack() {
        navigate('/toys')
    }

    if (!toy) return <div>Loading...</div>
    return (
        <section className="toy-details">
            <h1>{toy.name}</h1>
            <h1>Price: {toy.price}</h1>
            <h1>{toy.inStock ? 'In stock' : 'Out of stock'}</h1>
            <h1>Labels: {JSON.stringify(toy.labels) === '[]' ? 'none' : 'coming soon'}</h1>
            <button onClick={onBack}>Back to list</button>
            <div>
                <Link to={`/toys/${toy.prevToyId}`}>Previous Toy</Link> |
                <Link to={`/toys/${toy.nextToyId}`}>Next Toy</Link> 
            </div>
        </section>
    )
}