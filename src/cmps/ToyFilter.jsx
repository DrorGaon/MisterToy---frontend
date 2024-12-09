import { useEffect, useState } from "react"

export function ToyFilter({ filterBy, onSetFilterBy }) {

    const [filterByToEdit, setFilterByToEdit] = useState({...filterBy})

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])

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

            default: break
        }

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    const { name, price } = filterByToEdit
    return (
        <section className="toy-filter">
            <h2>Search our toys!</h2>
            <form >
                <section className="filter-field">
                    <label htmlFor="name">Name: </label>
                    <input value={name } onChange={handleChange}
                        type="text" placeholder="By name" id="name" name="name"
                    />
                </section>
                <section className="filter-field">
                    <label htmlFor="price">Price: </label>
                    <input value={price || ''} onChange={handleChange}
                        type="number" placeholder="By minimum price" id="price" name="price"
                    />
                </section>
                <button hidden>Set Filter</button>
            </form>
        </section>
    )
}