import React from 'react'
import styles from './Item.module.css'
import moment from 'moment'


const Item = (props) => {
    const { title, description, date } = props
    return (
        <div className={ [styles.itemContainer, !date ? styles.available : styles.notAvailable].join(' ') }>
            <h2>{ title }</h2>
            <p>{ description }</p>
            { date ? <p className={ styles.date } >{ moment.unix(date).format('DD/MM/YYYY') }</p> : '' }
        </div>
    )
}

export default Item
