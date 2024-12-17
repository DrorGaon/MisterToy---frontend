import { httpService } from './http.service.js'

const BASE_URL = 'toy/'

export const toyService = {
    query,
    get,
    remove,
    save,
    getEmptyToy,
    getDefaultFilter,
    getFilterFromSearchParams,
}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

async function get(toyId) {
    try {
        const toy = await httpService.get(BASE_URL + toyId)
        return _setNextPrevToyId(toy)
    } catch (err) {
        console.log(err)
        throw err
    }
}

function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL + toy._id, toy)
    } else {
        return httpService.post(BASE_URL, toy)
    }
}

function getEmptyToy(name = '', price = 0) {
    return { name, price, inStock: true, labels: [], createdAt: Date.now() }
}

function getDefaultFilter() {
    return { name: '', price: 0 }
}

function getFilterFromSearchParams(searchParams) {
    const defaultFilter = getDefaultFilter()
    const filterBy = {}
    for (const field in defaultFilter) {
        filterBy[field] = searchParams.get(field) || ''
    }
    return filterBy
}

async function _setNextPrevToyId(toy) {
    try {
        const toys = await httpService.get(BASE_URL)
        const toyIdx = toys.findIndex((currToy) => currToy._id === toy._id)
        const nextToy = toys[toyIdx + 1] ? toys[toyIdx + 1] : toys[0]
        const prevToy = toys[toyIdx - 1] ? toys[toyIdx - 1] : toys[toys.length - 1]
        toy.nextToyId = nextToy._id
        toy.prevToyId = prevToy._id
        return toy
    } catch (err){
        console.log(err)
        throw err
    }
}