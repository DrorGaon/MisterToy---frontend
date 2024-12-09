import { useEffect } from "react"
import { ToyList } from "../cmps/ToyList.jsx"
import { useSelector } from "react-redux"
import { loadToys, removeToy } from "../store/actions/toy.actions.js"
import { useNavigate } from "react-router-dom"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

export function ToyIndex(){

    const toys = useSelector(storeState => storeState.toyModule.toys)
    const navigate = useNavigate()
    useEffect(() => {
        loadToys()
            .catch((err) => {
                showErrorMsg('Problem getting toys')
                console.log('Problem getting toys', err)
            })
    }, [])

    function onRemoveToy(toyId){
        removeToy(toyId)
            .then(() => showSuccessMsg('Toy removed successfully'))
            .catch((err) => {
                showErrorMsg('Problem removing toy')
                console.log('Problem removing toy', err)
            })
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