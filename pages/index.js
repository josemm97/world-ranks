import React from 'react'
import Home from '../src/components/Index'

export default function index({ countries}) {
    return (
        <div>
            <Home countries={countries} />
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await res.json();
  
    return {
      props: {
        countries,
      },
    };
  };
  
