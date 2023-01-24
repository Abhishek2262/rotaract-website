import EventsCard from "../components/eventcard";
import EventsCardRight from "../components/eventcardright";
import { FaFacebook,FaInstagram,FaRegEnvelope,FaPhoneAlt,FaLocationArrow,FaLinkedinIn,FaArrowCircleLeft,FaArrowCircleRight } from "react-icons/fa";
import Footer from "../components/footer/footer";



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

    <Footer/>
   
    
   
    </>
  )
}