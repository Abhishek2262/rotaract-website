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
          <Navbar/>
          <div className='min-h-[200vh] py-20 p-28 text-[#121212] border-[0.5rem] bor|der-[#d83780] flex justify-center'>
            <div className='w-full md:w-[100%] text-2xl flex flex-col gap-10 '> 
              {children}
            </div>
          </div>
          
      </>
    )
  
}