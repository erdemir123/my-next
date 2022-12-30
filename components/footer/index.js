import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css"

const index = () => {
  return (
    <footer className={styles.footer}>
        Made with ❤️  
        <Link href="https://github.com/erdemir123" target="_blank">SADIK ERDEMİR</Link>
    </footer>
  )
}

export default index