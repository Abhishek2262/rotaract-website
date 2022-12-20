import EventsCard from "../components/eventcard";
import EventsCardRight from "../components/eventcardright";
import { FaFacebook,FaInstagram,FaRegEnvelope,FaPhoneAlt,FaLocationArrow,FaLinkedinIn,FaArrowCircleLeft,FaArrowCircleRight } from "react-icons/fa";



export default function Events(){
 

  return(
    <>
 
    <div className=" min-h-[53rem]  min-w-[30rem]  bg-[url('../public/_MG_0041.jpg')] bg-no-repeat bg-cover " >
      <h2 className="text-white text-center text-5xl " >OUR EVENTS</h2>

      
    </div>
    <div className="flex flex-col gap-10 ">
      <EventsCard name="Holi Mahotsav"/>
      <EventsCardRight name="Gokul Ashtami"/>
      <EventsCard name="Fresher Night"/>
      <EventsCardRight name="Bamboozeld"/>
      <EventsCard name=""/>
      <EventsCardRight name=""/>
      <EventsCard name="Bharat Darshan"/>
    </div>

    <footer className=" sm:bg-pink-500 p-10  sm:min-h-[20rem]">
            <h5 className="text-white  xl:w-[20rem] sm:text-md  text-center hover:text-slate-800 hover:cursor-pointer"> Rotaract Club Of BIT Mesra</h5>
            <div className="text-sm text-white  xl:w-[17rem] text-left pl-3 hover:text-slate-800 hover:cursor-pointer">Abh igwh csc yhucs klkajshbfgfsvbc ttdsvcsatfsa sasathgvcsatxsavc cshgsacvschsafsafcas uycfsacsacsafs vcsufccsacfucuyc</div>

            <div className="flex flex-row gap-3 p-3 sm:w-[8rem] w-[8rem] text-white ">
            <FaFacebook className="hover:text-slate-800 hover:cursor-pointer"/>
            <FaInstagram className="hover:text-slate-800 hover:cursor-pointer"/>
            <FaLinkedinIn className="hover:text-slate-800 hover:cursor-pointer"/> 
            </div>
            <div className="flex justify-center  gap-20  ">
                <div className="text-sm text-white hover:text-slate-800 hover:cursor-pointer"> <a href="./" id="homebut"></a>Home </div>
                <div className="text-sm text-white hover:text-slate-800 hover:cursor-pointer"><a href="./about" id="aboutbut"></a>About</div>
                <div className="text-sm text-white hover:text-slate-800 hover:cursor-pointer"><a href="./events" id="eventsbut"></a>Event</div>
                <div className="text-sm text-white hover:text-slate-800 hover:cursor-pointer"><a href="#" id="contbut"></a>Contact</div>
            </div>
             
        </footer>
   
    
   
    </>
  )
}