import React from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import styles from './SearchInput.module.css'
function SearchInput({...rest}) {
    return (
        <div className={styles.wrapper}>
            <SearchRoundedIcon/>
            <input className={styles.input}{...rest} />
        </div>
    )
}

export default SearchInput
