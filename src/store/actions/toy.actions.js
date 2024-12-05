import { toyService } from "../../services/toy-service.js"
import { REMOVE_TOY, SET_TOYS } from "../reducers/toy.reducer.js"
import { store } from "../store.js"

export function loadToys(){
    return toyService.query()
        .then(toys => {
            store.dispatch({ type: SET_TOYS, toys })
        })
        .catch(err => {
            console.log('problem loading toys', err)
            throw err
        })
}

export function removeToy(toyId){
    return toyService.remove( toyId )
        .then(() => {
            store.dispatch({ type: REMOVE_TOY, toyId})
        })
        .catch(err => {
            console.log('problem removing toy', err)
            throw err
        })
}
