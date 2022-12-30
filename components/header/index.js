import React from 'react'
import {FaPlayCircle} from "react-icons/fa"
import Link from "next/link"
import Styles from "./styles.module.css"

const index = () => {
  return (
    <header className={`${Styles.header} container fluid`}>
        <div  className={Styles.headerWrapper}>
        <Link href="/"  className={Styles.logo}>
            <FaPlayCircle /> NetFilms
        </Link>
        <nav className={Styles.navigationMenu}>
            <Link href="/">Movies</Link>
            <Link href="/">Series</Link>
            <Link href="/">Kids</Link>
        </nav>
        </div>
        
    </header>
  )
}

export default index