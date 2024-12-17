import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { toyService } from "../services/toy.service.js"
import { saveToy } from "../store/actions/toy.actions.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

export function ToyEdit() {

    const navigate = useNavigate()
    const [toyToEdit, setToyToEdit] = useState(toyService.getEmptyToy())
    const { toyId } = useParams()

    useEffect(() => {
        if (toyId) loadToy()
    }, [])

    async function loadToy() {
        try{
            const toy = await toyService.get(toyId)
            setToyToEdit(toy)
        } catch (err){
            console.error('err:', err)
            showErrorMsg('Problem editing toy')
            navigate('/toys')
        }
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break

            case 'checkbox':
                value = target.checked
                break

            default:
                break
        }

        setToyToEdit(prevToyToEdit => ({ ...prevToyToEdit, [field]: value }))
    }

    async function onSaveToy(ev) {
        ev.preventDefault()
        try {
            await saveToy(toyToEdit)                
            console.log('toy added')
            showSuccessMsg(`Toy saved successfully`)
        } catch (err) {
            console.log('Problem saving toy', err)
            showErrorMsg('Problem saving toy')
        } finally {
            navigate('/toys')
        }
    }

    return (
        <section className="toy-edit">
            <h2>{toyToEdit._id ? 'Edit' : 'Add'} Toy</h2>

            <form onSubmit={onSaveToy} >
                <label htmlFor="name">Toy name : </label>
                <input type="text"
                    name="name"
                    id="name"
                    placeholder="Enter toy name..."
                    value={toyToEdit.name}
                    onChange={handleChange}
                />
                <label htmlFor="price">Price : </label>
                <input type="number"
                    name="price"
                    id="price"
                    placeholder="Enter price"
                    value={toyToEdit.price}   
                    onChange={handleChange}
                />

                <div>
                    <button>{toyToEdit._id ? 'Save' : 'Add'}</button>
                    <Link to="/toys">Cancel</Link>
                </div>
            </form>
        </section>
    )
}