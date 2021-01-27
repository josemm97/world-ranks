import { StylesProvider } from '@material-ui/core'
import Layout from '../Layout/Layout'
import SearchInput from '../SearchInput/SearchInput'
import styles from '../../styles/Home.module.css'

export default function Home({ countries}) {
  console.log('data', countries)
  return <Layout>
        <div className={styles.counts}>Find {countries.length} countries</div>
        <SearchInput placeholder="Filter by Name, Region, Subregion"/>
      </Layout>
  
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

