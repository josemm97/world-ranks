import { StylesProvider } from "@material-ui/core";
import Layout from "../Layout/Layout";
import SearchInput from "../SearchInput/SearchInput";
import CountriesTable from "../CountriesTable/CountriesTable";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState("");

  // const filterCountries = countries.filter((country) => {
  //   country.name.toLowerCase().includes(keyword) ||
  //   country.region.toLowerCase().includes(keyword) ||
  //   country.subregion.toLowerCase().includes(keyword);
  // });
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };

  // const onInputChange = (e) => {
  //   e.preventDefault();
  //   setKeyword(e.target.value.toLowerCase());
  //   console.log(keyword);
  // };

  console.log("data", countries);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.counts}>Find {countries.length} countries</div>
        <div className={styles.input}>
          <SearchInput
            placeholder="Filter by Name, Region, Subregion"
            onChange={onInputChange}
          />
        </div>
      </div>
      <CountriesTable countries={filteredCountries} />

    </Layout>
  );
}
//  export const getStaticProps = async () => {
//    const res= await fetch("https://restcountries.eu/rest/v2/all")
//    const data= await res.json();
//    console.log(data)
//    return{
//      props:{
//        data,
//      }
//    };
//  };

// export async function getStaticProps(context) {
//   try {
//   const res = await fetch("https://restcountries.eu/rest/v2/all");
//   const data = await res.json();
//   console.log("data",data)

//   return {
//     props: {
//       data
//     }, // will be passed to the page component as props
//   }

//   } catch (error) {
//     return {
//       props: null
//     }

//   }
// }
