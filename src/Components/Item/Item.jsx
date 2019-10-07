import React, { useContext } from 'react'
import styles from './Item.module.css'
import moment from 'moment'
import { Link } from 'react-router-dom'
import UserContext from '../../Contexts/UserContext'


const Item = (props) => {
    const { title, description, date, id } = props
    const user = useContext(UserContext)
    return (
        <div className={ [styles.itemContainer, !date ? styles.available : styles.notAvailable].join(' ') }>
            <Link to={ "appartement/" + id }><h2>{ title }</h2></Link>
            <p>{ description }</p>
            { date ? <p className={ styles.date } >{ moment.unix(date).format('DD/MM/YYYY') }</p> : '' }
            <p>{ user.name }</p>
        </div>
    )
}

export default Item
