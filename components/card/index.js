import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

export default function Card({name, post, img = "#"}) 
{
    useEffect(() => {
        Aos.init()
      }, [])
      
    return(
        <>
            <div className='card-1 min-h-[25rem] rounded-md bg-purple-100 max-w-[20rem] basis-1/3 drop-shadow-2xl'  data-aos="fade-up">
            <img src={img} className={post} alt="descriptive photo"></img> <h4 className='p1 text-center'>{post}</h4><h5 className="text-center">{name}</h5></div>
        </>
    )
}