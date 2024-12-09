import { useEffect } from "react"
import { ToyList } from "../cmps/ToyList.jsx"
import { useSelector } from "react-redux"
import { loadToys, removeToy } from "../store/actions/toy.actions.js"
import { useNavigate } from "react-router-dom"

export function ToyIndex(){

    const toys = useSelector(storeState => storeState.toyModule.toys)
    const navigate = useNavigate()
    useEffect(() => {
        loadToys()
    }, [])

    function onRemoveToy(toyId){
        removeToy(toyId)
    }

    if (!toys) return '...loading'
        return (
            <section className="toy-index">
                <button onClick={() => navigate('/toys/edit')}>Add toy</button>
                <ToyList 
                toys={toys} 
                onRemoveToy={onRemoveToy}
                />
            </section>
        )
}