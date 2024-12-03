import { useState, useEffect } from "react"
import { toyService } from "../services/toy-service.js"
import { ToyList } from "../cmps/ToyList.jsx"

export function ToyIndex(){

    const [toys, setToys] = useState(null)

    useEffect(() => {
        toyService.query()
            .then(setToys)
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