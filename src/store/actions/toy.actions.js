import { toyService } from "../../services/toy.service.js"
import { ADD_TOY, REMOVE_TOY, SET_TOYS, UPDATE_TOY } from "../reducers/toy.reducer.js"
import { store } from "../store.js"

export async function loadToys(filterBy){
    try {
        const toys = await toyService.query(filterBy)
        store.dispatch({ type: SET_TOYS, toys })
    } catch (err) {
        console.log('problem loading toys', err)
        throw err
    }
}

export async function removeToy(toyId){
    try {
        await toyService.remove( toyId )
        store.dispatch({ type: REMOVE_TOY, toyId})
    } catch (err) {
        console.log('problem removing toy', err)
        throw err
    }
}

export async function saveToy(toy){
    const type = toy._id ? UPDATE_TOY : ADD_TOY
    try {
        const savedToy = await toyService.save(toy)
        store.dispatch({ type, toy: savedToy})
        return savedToy
    } catch (err) {
        console.log('problem saving toy', err)
        throw err
    }
}