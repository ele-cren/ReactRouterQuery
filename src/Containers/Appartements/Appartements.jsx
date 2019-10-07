import React from 'react'
import data from '../../data.json'
import Item from '../../Components/Item/Item'
import styles from './Appartements.module.css'
import Filters from '../../Components/Filters/Filters'

const Appartements = (props) => {
    //récupération params url (search & available)
    //Utilisation des params url à la place de state React
    let params = new URLSearchParams(props.location.search)
    let available = params.get('available') ? parseInt(params.get('available')) : 2
    let search = params.get('search')

    let filteredApparts = available === 2 ? data.apparts : available === 0 ? data.apparts.filter(x => !x.date) : data.apparts.filter(x => x.date)
    filteredApparts = search ? filteredApparts.filter(x => x.title.toLowerCase().includes(search.toLowerCase())) : filteredApparts

    const apparts = filteredApparts.map((appart, i) => {
        return <Item key={ i } { ...appart } />
    })

    const setSearch = (event) => {
        params.set('search', event.target.value)
        props.history.push('?' + params)
    }

    const setCheckbox = (state) => {
        let newAvailable
        //state : 0 si click sur la première checkbox sinon 1
        //available : 0 = available only, 1 = not available only, 2 = available + not available
        if (available === 0) {
            newAvailable = state === 0 ? 0 : 2
        } else {
            newAvailable = available === 1 ? (state === 0 ? 2 : 1) : (newAvailable = state === 0 ? 1 : 0)
        }
        params.set('available', newAvailable)
        props.history.push('?' + params)
    }

    return (
        <React.Fragment>
            <Filters available={ available } setCheckbox={ setCheckbox } setSearch={ setSearch } />
            <div className={ styles.appartsContainer }>
                { apparts }
            </div>
        </React.Fragment>
    )
}

export default Appartements
