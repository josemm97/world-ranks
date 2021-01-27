import { KeyboardArrowDownRounded } from '@material-ui/icons'
import React from 'react'
import styles from '../CountriesTable/CountriesTable.module.css'

const orderBy = (countries ,direction) => {
    if (direction=== 'asc') {
        return [...countries].sort((a,b)=> (a.population > b.population? 1 :-1))
    }
    if (direction=== 'desc') {
        return [...countries].sort((a,b)=> (a.population > b.population? -1 : 1))
    }
    return countries;
}


function CountriesTable({ countries }) {
    
    const orderCountries =orderBy(countries, 'desc'); 
        
    
    
    return (
        <>
        <div className={styles.heading}>
          <button className={styles.heading_name}>
            <div>Name</div>
            <KeyboardArrowDownRounded/>
          </button>
          <button className={styles.heading_population}>
            <div>Population</div>
            <KeyboardArrowDownRounded/>
          </button>
        </div>
        {orderCountries.map(country=><div className={styles.row}>
            <div className={styles.name}>{country.name}</div>
            <div className={styles.population}>{country.population}</div>
        </div>)}
    

        </>
    )
}

export default CountriesTable
