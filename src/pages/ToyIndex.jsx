import { useEffect } from "react"
import { ToyList } from "../cmps/ToyList.jsx"
import { useSelector } from "react-redux"
import { loadToys } from "../store/actions/toy.actions.js"

export function ToyIndex(){

    const toys = useSelector(storeState => storeState.toyModule.toys)

    useEffect(() => {
        loadToys()
    }, [])

    function onRemoveToy(toyId){
        console.log(toyId)
    }

    if (!toys) return '...loading'
    return (
        <ToyList 
            toys={toys} 
            onRemoveToy={onRemoveToy}
        />
    )
}