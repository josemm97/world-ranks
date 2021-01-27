import Head from 'next/head'
import React from 'react'
import styles from './Layout.module.css'

function Layout({children, title="World Ranks"}) {
    return (
    <div className={styles.container}>
      
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/icons/favicon.ico" />
    
      </Head>
      <header className={styles.header}>
          <div>
              <img
                  src="/icons/Logo.svg"
                  alt="Logo"
              />
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
