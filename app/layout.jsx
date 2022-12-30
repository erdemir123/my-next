import "../styles/global.css"
import "../styles/reset.css"
import {Inter} from "@next/font/google"
import Header from "../components/header"
import Footer from "../components/footer"
const InterFontFamily = Inter({subsets: ""})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={InterFontFamily.className}>
      <head />
      <body className="container">
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
