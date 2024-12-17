import { useEffect } from "react"
import { ToyList } from "../cmps/ToyList.jsx"
import { useDispatch, useSelector } from "react-redux"
import { loadToys, removeToy } from "../store/actions/toy.actions.js"
import { useNavigate } from "react-router-dom"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { ToyFilter } from "../cmps/ToyFilter.jsx"
import { SET_FILTER_BY } from "../store/reducers/toy.reducer.js"

export function ToyIndex(){

    const toys = useSelector(storeState => storeState.toyModule.toys)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        try{
            loadToys(filterBy)
        } catch (err) {
            showErrorMsg('Problem getting toys')
            console.log('Problem getting toys', err)
        }
    }, [filterBy])

    async function onRemoveToy(toyId){
        try {
            await removeToy(toyId)
            showSuccessMsg('Toy removed successfully')
        } catch (err) {
            console.log('Problem removing toy', err)
            showErrorMsg('Problem removing toy')
        }
    }
    
    function onSetFilterBy(filterBy){
        dispatch({ type: SET_FILTER_BY, filterBy})
    }

    if (!toys) return '...loading'
        return (
            <section className="toy-index">
                <button onClick={() => navigate('/toys/edit')}>Add toy</button>
                <ToyFilter onSetFilterBy={onSetFilterBy} filterBy={filterBy} />
                <ToyList 
                toys={toys} 
                onRemoveToy={onRemoveToy}
                />
            </section>
        )
}