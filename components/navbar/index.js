import Link from 'next/link';
import Script  from 'next/script';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';


export default function Navbar(props)
{   
    const router = useRouter()
    const [browser, setbrowser] = useState(false)

    useEffect(() => {
      setbrowser(true)
    }, [])

    if(browser)
    {
        if(router.route != "/")
        {
                setTimeout(() => {
                
                // console.log(router.route.slice(1,)+"button")
                document.getElementById(router.route.slice(1,)+"but").classList.add("text-pink-700")
                
                }, 0);
        }
        else{
                setTimeout(() => {

                document.getElementById("homebut").classList.add("text-pink-700")
                
                }, 0);
        }
        

        return(
            <>
                <Script>
                    {`
                        if(typeof window !== 'undefined'){
                            window.onscroll = function(e) {
                                
                                if(this.oldScroll > this.scrollY){
                                    var element = document.getElementById("navbar");
                                    element.classList.remove("hide");
                                }
                                else{
                                    var element = document.getElementById("navbar");
                                    element.classList.add("hide");
                                }
                                this.oldScroll = this.scrollY;
                                }
                        }
                    `}
                </Script>
                <div id="navbar" className="fixed bg-[#f2f2f2] text-[#121212] text-base w-full p|y-7 shadow-md p|x-5 duration-300 z-40 text-center">
                    <div className="w-[70%] px-10 h-20 ml-20  flex place-items-center gap-x-10">
                        
                        
                            <div className='flex basis-1/5 place-items-center hover:rotate-[10000deg] duration-700'><Image src={'/rotaractLogo.png'} height={50} width={50}></Image></div>
                        
                            <div className='basis-1/5'><a href="./" id="homebut" className='hover:font-bold duration-300 hover:tracking-wide'>Home</a></div>
                            <div className='basis-1/5'><a href="#" id="teambut" className='hover:font-bold duration-300 hover:tracking-wide'>Team</a></div>
                            <div className='basis-1/5'><a href="./about" id="aboutbut" className='hover:font-bold duration-300 hover:tracking-wide'>About</a></div>
                            <div className='basis-1/5'><a href="#" id="contbut" className='hover:font-bold duration-300 hover:tracking-wide'>Contact</a></div>
                        
                        {/* <div className="absolute overflow-clip bg-neutral-200  rounded-full w-16 h-16 shadow-2xl hover:rotate-[360deg] duration-500"><img src="/rotaractLogo.png" className='shadow-2xl' alt="Logo"></img></div>                 */}
                    </div>
                </div>
            </>
        )
    }
}