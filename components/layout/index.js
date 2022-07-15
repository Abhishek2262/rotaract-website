import { useEffect, useState } from "react"
import Navbar from "../navbar"
import Script from 'next/script'
import Head from "next/head"

export default function Layout({ children }) {
  const [browser, setbrowser] = useState(false)

  useEffect(() => {
    setbrowser(true)
  }, [])
    

    return (
      <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Tiro+Kannada&display=swap" rel="stylesheet"/>
          </Head>

          <Navbar/>
          <div className='min-h-[200vh] py-24 p-8 text-[#d83780] border-[0.5rem] border-[#d83780] flex justify-center'>
            <div className='w-full md:w-[70%] text-2xl flex flex-col gap-10 '> 
              {children}
            </div>
          </div>
          
      </>
    )
  
}