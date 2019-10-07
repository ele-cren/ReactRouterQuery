import React from 'react'
import styles from './Filters.module.css'

const Filters = (props) => {
    const { available } = props
    const { setCheckbox, setSearch } = props
    return (
        <form>
            <label>
                <input className={ styles.inputCheckbox } type="checkbox" onChange={ () => setCheckbox(0) } name="available"
                        checked={ available === 0 || available === 2 } value="available" />
                Available
            </label>
            <label>
                <input className={ styles.inputCheckbox } type="checkbox" onChange={ () => setCheckbox(1) } name="notAvailable" 
                        checked={ available === 1 || available === 2 } value="notAvailable" />
                Not available
            </label>
            <label>
                Search
                <input type="text" name="search" onChange={ setSearch } />
            </label>
        </form>
    )
}

export default Filters
