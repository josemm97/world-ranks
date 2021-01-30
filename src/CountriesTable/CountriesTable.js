import Link from 'next/link'
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import React, { useState } from 'react';
import styles from "../CountriesTable/CountriesTable.module.css";

const orderBy = (countries,value, direction) => {   
  if (direction === "asc") {
    return [...countries].sort((a, b) =>
      a[value] > b[value]? 1 : -1,
    );
  }
  if (direction === "desc") {
    return [...countries].sort((a, b) =>
      a[value] > b[value] ? -1 : 1
    );
  }
  return countries;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }
  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  }
  if (direction === "asc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded />
      </div>
    );
  }
};

function CountriesTable({ countries }) {
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();
  const orderCountries = orderBy(countries,value ,direction);
 
 console.log("countries",)
  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };
  const setValueAndDirection = (value) => {
      switchDirection();
      setValue(value);
  };
 
  return (
    <>
      <div className={styles.heading}>
       <div className={styles.heading_flag}></div>
       

        <button className={styles.heading_name} onClick={()=> setValueAndDirection("name")}>
          <div>Name</div>         
          {value === "name" && <SortArrow  direction={direction}/>}
        </button>
        <button className={styles.heading_population} onClick={()=> setValueAndDirection("population")}>
          <div>Population</div>
          {value === "population" && <SortArrow  direction={direction}/>}
        </button>

        <button className={styles.heading_area} onClick={()=> setValueAndDirection("area")}>
          <div>Area(Km  <sup style={{ fontSize:'0.5rem'}}>2</sup>)</div>
          {value === "area" && <SortArrow  direction={direction}/>}
        </button>
        <button className={styles.heading_gini} onClick={()=> setValueAndDirection("gini")}>
          <div>Gini</div>
          {value === "gini" && <SortArrow  direction={direction}/>}
        </button>
      </div>
      {orderCountries.map((country,id) => (
       <Link href={`/country/${country.alpha2Code}`} key={country.name}>
       <div className={styles.row}>
        <div className={styles.flag}>
           <img src={country.flag} alt="Flag"/>
        </div>
          <div className={styles.name} key={id.name}>{country.name}</div>
          <div className={styles.population}>{country.population}</div>
          <div className={styles.area}>{country.area === null ? 0: country.area}</div>
          <div className={styles.gini}>{country.gini === null?0: country.gini}</div>
        </div>
       </Link>
      ))}
    </>
  );
}

export default CountriesTable;
