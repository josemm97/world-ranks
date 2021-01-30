import Head from 'next/head';
import React, {useEffect, useState} from 'react';
import styles from './Layout.module.css';
import Brightness6RoundedIcon from '@material-ui/icons/Brightness6Rounded';
import Link from 'next/link';
function Layout({children, title="World Ranks"}) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme",localStorage.getItem("theme"));
    setTheme(localStorage.getItem("theme"));
  }, []);
  const swithTheme = () => {
    if (theme === "light") {
      saveTheme("dark")
    }else{
      saveTheme("light")
    }
  }

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme",theme);
    document.documentElement.setAttribute("data-theme",theme);
  };
  

  
    return (
    <div className={styles.container}>
      
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/icons/favicon.ico" />
    
      </Head>
      <header className={styles.header}>
         <Link href="/">
         <div>
              <img
                  src="/icons/Logo.svg"
                  alt="Logo"
              />
          </div>
         </Link>

         <div className={styles.button_container}>
         <button className={styles.themeSwitcher} onClick={swithTheme}>
             <Brightness6RoundedIcon/>
         </button>
         </div>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
       Jose Montelongo@Developer
      </footer>
    </div>
    )
}

export default Layout
