import 'aos/dist/aos.css';
import Aos from 'aos';
import Image from 'next/image'
import Card from '../components/card';
import logo from '../public/rotaractLogo.svg'



import { useEffect } from 'react';

export default function About(props)
{

     useEffect(() => {
        Aos.init()
      }, [])

      console.log(props.foo)
    
      
    return(
        <>
            
            <div className='d1 bg-slate-100 text-black min-h-[19rem] p-4 border-1  '> 
             <h1 className='rtr1 text-center {hover:tracking-widest duration-300}' data-aos="fade-up">  Rotaract Club  </h1>


              <div className='d2 flex justify-evenly m-5 gap-8'>

                  <img className='im1 max-h-[10rem] p-0  float-right' src='/rotaractFUllLogo.png' data-aos="fade-right"></img>
                  
                  <div className='d3  bg-slate-100 min-h-[12rem] min-w-[10rem] flex gap-5 items-center text-clip p-2' data-aos="fade-up">
                    <p className='max-h-[8rem]'>
                       Rotaract clubs bring together people ages 18 and older to exchange ideas with leaders in the community, develop leadership and professional skills, and have fun through service.In communities worldwide, Rotary and Rotaract members work side by side to take action through service. From big cities to rural villages, Rotaract is changing communities like yours.
                    </p>
                  </div>

              </div>
            
            
            </div>

            <div className='abt-1  bg-slate-100 min-h-[25rem] rounded-lg border-1 P-3'>
                <h2 className='abut text-center'>About</h2>
                <p data-aos="fade-up" className='abt text-center p-2'> Rotaract originally began as a Rotary International youth program in 1968 at Charlotte North Rotary Club in Charlotte, North Carolina, United States, and has grown into a major organization of over 10,904 clubs spread around the world and over 203,000 members in 189 countries. It is a service, leadership, professional and community service organization (often miscommunicated as a Social Service Club) for young men and women aged 18 and over.Rotaract focuses on the development of young adults as leaders in their communities and workplaces. Clubs around the world also take part in international service projects, in a global effort to bring peace and international understanding to the world."Rotaract" stands for "Rotary in Action", although the name originally comes from a combination of "Rotary" and "Interact" (International + Action), the high school level program created by Rotary International in 1962.</p>

            </div>

            <div className=' bg-slate-100 overflow-scroll snap-x snap-mandatory flex gap-32 p-8 px-32 place-items-center w-full'>

                <div className='flex justify-center gap-32 snap-center '>
                    <Card name="Aryan Raj" post="President" img={props.foo}/>
                    <Card name="Souvik Dey" post={"Joint-President"}/>
                    <Card name="Abhishek Pandey" post={"VP"}/>
                    <Card name="Sakshi" post={"VP"}/>

                </div>

                <div className='flex justify-center gap-32 snap-center '>
                    <Card name="Abheet Pandey" post={"District co-ordinator"}/>
                    <Card name="Abhishek Ranjan" post={"District co-ordinator"}/>
                    <Card name="Mihir Verma" post={"Director"}/>
                    <Card name="Pandey" post={"VP"}/>
                </div>

                <div className='flex justify-center gap-32 snap-center '>
                    <Card name="Pandey" post={"VP"}/>
                    <Card name="Pandey" post={"VP"}/>
                    <Card name="Pandey" post={"VP"}/>
                    <Card name="Pandey" post={"VP"}/>
                </div>
            
            

            </div>

            <div className='intro bg-slate-100 text-center min-h-[35rem] ' data-aos="fade-up"> <h4> Intro </h4>
            
            
            </div>

            <div>
                <div className='contact bg-slate-2  00 sm:min-h-[30rem] p-10 gap-5 '><h2 >GET IN TOUCH</h2> <div className=' float-left text-left min-h-[5rem] text-sm pl-2'> fyfi doie fgefwe fgfewfgw igf wiufg f uvb vod ud  dktou cvsui csdg cvsdu f hifh ioh  h ohgsfggogfsogf  ufdg  f ooghhvhidhvvihh   </div> 
                

                <form className='review  bg-slate-100 min-w-[30rem] float-right min-h-[28rem] space-y-5 mr-12 pr-8 pl-8 '>
                    <h2 className='text-center'>Write a Review</h2>
                    <input className='palceholder:text-slate-800 border-2 border-slate-800 w-[100%]' placeholder='Name'/>
                    <div className='email border-2  float-center border-slate-800'><input className='w-[100%] ' placeholder='Email'></input></div> 
                    <textarea className='w-[100%] 'placeholder='Write a reviews' rows={4} />
                    <div className='flex justify-center'><button className='w-[70%] border-2 h-[3rem] bg-gradient-to-r from-pink-500 to-pink-300  text-slate-100'>Button</button></div>
                </form>
                
                </div>
                <footer className='foorter bg-gradient-to-r from-pink-500 to-pink-300  min-h-[15rem]'></footer>
                
            
            </div>
            
            


             
            
            
            
        </>
    )
}


export async function getStaticProps(context) {
    return {
      props:
      {
        foo : logo
      }, // will be passed to the page component as props
    }
  }