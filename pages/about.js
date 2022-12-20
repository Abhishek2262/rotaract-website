import "aos/dist/aos.css";
import Aos from "aos";
import Image from "next/image";
import Card from "../components/card";
import logo from "../public/rotaractLogo.svg";
import { BsFillArrowLeftCircleFill, BsLock } from "react-icons/bs";
import { FaFacebook,FaInstagram,FaRegEnvelope,FaPhoneAlt,FaLocationArrow,FaLinkedinIn,FaArrowCircleLeft,FaArrowCircleRight } from "react-icons/fa";
import { useEffect } from "react";


export default function About(props) {
  useEffect(() => {
    Aos.init();
  }, []);

  console.log(props.foo);

  return (
    <>
      <div className="bg-slate-100  text-slate-900 sm:min-h-[19rem] sm:p-4 border-1 ">
        <h1
          className="rtr1 text-center  {hover:tracking-widest duration-300}"
          data-aos="fade-up"
        >
          Rotary
        </h1>

        <div className=" sm:m-5 ">
        <p className=" sm:min-h-[12rem] sm:min-w-[10rem] p-3 text-center text-sm sm:text-lg md:text-lg"  data-aos="fade-up">
              Rotaract clubs bring together people ages 18 and older to exchange
              ideas with leaders in the community, develop leadership and
              professional skills, and have fun through service.In communities
              worldwide, Rotary and Rotaract members work side by side to take
              action through service. From big cities to rural villages,
              Rotaract is changing communities like yours.
              
            </p>
         
        </div>
      </div>

      <div className="abt-1  bg-slate-100 sm:min-h-[25rem] rounded-lg border-1 P-1 bg-gradient-to-r from-pink-500 to-purple-500 ">
        <h2 className=" text-center sm:text-xlg text-white">About</h2>
        <p data-aos="fade-up" className=" text-white text-center p-2 text-sm sm:text-lg bg-gradient-to-r from-pink-500 to-purple-500 ">
          {" "}
          Rotaract originally began as a Rotary International youth program in
          1968 at Charlotte North Rotary Club in Charlotte, North Carolina,
          United States, and has grown into a major organization of over 10,904
          clubs spread around the world and over 203,000 members in 189
          countries. It is a service, leadership, professional and community
          service organization (often miscommunicated as a Social Service Club)
          for young men and women aged 18 and over.Rotaract focuses on the
          development of young adults as leaders in their communities and
          workplaces. Clubs around the world also take part in international
          service projects, in a global effort to bring peace and international
          understanding to the world."Rotaract" stands for "Rotary in Action",
          although the name originally comes from a combination of "Rotary" and
          "Interact" (International + Action), the high school level program
          created by Rotary International in 1962.
        </p>
      </div>
      <div className="min-h-[25rem] bg-pink-500 max-w-full rounded-xl ">
        <h2 className="text-center text-white">Faculty Adviser</h2>
        

      </div>
      

      <div className="bg-white  overflow-scroll  snap-x sm:flex gap-40 p-8 px-36 place-items-center w-full" data-bs-ride="carousel">
                 
        
        <div className="flex justify-center gap-32 snap-center  " >
        
          <Card name="Aryan Raj" post="President" img={props.foo} />
          <Card name="Souvik Dey" post={"Joint-President"} />
          <Card name="Abhishek Pandey" post={"Vice-President"} />
          <Card name="Sakshi" post={"Vice-President"} />
          
        </div>

        <div className="flex justify-center gap-32 snap-center ">
          <Card name="Abheet Pandey" post={"District co-ordinator"} />
          <Card name="Abhishek Ranjan" post={"District co-ordinator"} />
          <Card name="Mihir Verma" post={"Director"} />
          <Card name="Pandey" post={"VP"} />
        </div>

        <div className="flex justify-center gap-32 snap-center ">
          <Card name="Pandey" post={"VP"} />
          <Card name="Pandey" post={"VP"} />
          <Card name="Pandey" post={"VP"} />
          <Card name="Pandey" post={"VP"} />
        </div>
      </div>

      <div
        className="intro bg-slate-100 text-center bg-gradient-to-r from-pink-500 to-purple-500 min-h-[35rem] p-8"
        data-aos="fade-up"
      >
        {" "}
        <h2 className="text-white"> Introduction </h2>
        <div className="font-medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


        </div>


      </div>

      <div style={{display: 'flex', justifyContent: 'space-around'}}>

      <div className="bg-white min-h min-h-[20rem] rounded-xl shadow-md flex-col max-w-[18rem] pt-7 pl-7 pr-7">
      <div  style={{backgroundColor: '#F27BB8', minWidth: '200px', minHeight: '200px', borderRadius: '50%'}} >
        <div className="">
              <h4 className="text-center text-md">Web-developers</h4>
              <h5 className="text-center text-sm">Abhishek Pandey</h5>
        </div>
     
      </div>
      </div>
      <div className="bg-white min-h min-h-[20rem] rounded-xl shadow-md  max-w-[18rem] pt-7 pl-7 pr-7">
      <div  style={{backgroundColor: '#F27BB8', minWidth: '200px', minHeight: '200px', borderRadius: '50%'}} >
        <div>
        <h4 className="text-center text-md">Web-developers</h4>
        <h5 className="text-center text-sm">Anirban Halder</h5>
        </div>
      
      </div>
      </div>
       <div className="bg-white min-h min-h-[20rem] rounded-xl shadow-md  max-w-[18rem] pt-7 pl-7 pr-7">
       <div  style={{backgroundColor: '#F27BB8', minWidth: '200px', minHeight: '200px', borderRadius: '50%'}} >
        <div>
            <h4 className="text-center text-md">Designer</h4>
            <h5 className="text-center text-sm">Prerna Verma</h5>
        </div>
       
       </div>
       </div>

      </div>
   

                  

      <div className=""data-aos="fade-up">
        <div className="contact bg-white sm:min-h-[30rem] text-pink-500 p-10 gap-5 ">
          <h2 className="" data-aos="fade-right">GET IN TOUCH</h2>{" "}
          <div data-aos="fade-right" className=" sm:float-left sm:text-left sm:min-h-[5rem] text-sm sm:text-md pl-2 sm:w-[25rem] text-slate-800">
            {" "}
            fyfi doie fgefwe fgfewfgw igf wiufg f uvb vod ud dktou cvsui csdg
            cvsdu f hifh ioh h ohgsfggogfsogf ufdg f ooghhvhidhvvihh
            <div 
              style={{
               
                paddingLeft: "24px",
                paddingTop: "24px",
                display: "flex",
              }}

              
            >
              <div style={{width: "10%", fontSize: "20px", color: "#ec4899"}}>
                <FaPhoneAlt />
              </div>
              <div style={{width: "90%", paddingTop: "0px", paddingLeft: "0px", fontSize: "16px"}}>

              <a href="tel:+916203321160">+91 - 6203321160</a>
              </div>
            </div>
                  <div
                    style={{
                     
                      paddingLeft: "24px",
                      paddingTop: "24px",
                      display: "flex",
                    }}
                  >
                    <div style={{width: "10%", fontSize: "20px", color: "#ec4899"}}>
                      <FaRegEnvelope />
                    </div>
      
                    <div style={{width: "90%", paddingTop: "0px", paddingLeft: "0px", fontSize: "16px"}}>
                    <a href="mailto:rotaract@bitmesra.ac.in">rotaract@bitmesra.ac.in</a>
                    </div>
                  </div>

            <div
              style={{
               
                paddingLeft: "24px",
                paddingTop: "24px",
                display: "flex",
              }}
            >
              <div style={{width: "10%", fontSize: "20px", color: "#ec4899"}}>
                <FaLocationArrow />
              </div>
              <div style={{width: "90%", paddingTop: "0px", paddingLeft: "0px", fontSize: "16px"}}>

              <a href="https://www.google.com/maps/place/BIT+Mesra+Rd,+Mesra,+Jharkhand/@23.4283494,85.4205196,17z/data=!3m1!4b1!4m5!3m4!1s0x39f4e4bc0609e77d:0x3ee20fae80dbb4b!8m2!3d23.4283445!4d85.4227136">BIT Mesra Campus, Ranchi, JH - 835215</a>
              </div>
            </div>




          </div>
          <form data-aos="fade-down" className="review  bg-white sm:min-w-[30rem] min-w-[28rem]  min-h-[15rem] sm:object-bottom  md:float-right sm:min-h-[28rem]  space-y-7 drop-shadow-2xl  pr-8 pl-8 ">
            <h2 className=" sm:text-center  text-pink-500">Write a Review</h2>
            <input
              className="palceholder:text-slate-800 border-2 border-pink-500 sm:w-[100%] text-sm pt-1 pb-1 pl-1 "
              placeholder="Name"
            />
            <div className="email  sm:float-center border-pink-500">
              <input
                className="text-sm w-[100%] pt-1 pb-1 pl-1 border-2 border-pink-500 "
                placeholder="Email"
              ></input>
            </div>
            <textarea
              className="sm:w-[100%] border-2 border-pink-500 text-sm  pt-1 pb-1 pl-1 resize"
              placeholder="Write a reviews"
              rows={4}
            />
            <div className="sm:flex justify-center ">
              <button className="sm:w-[70%] border-2  hover:text-slate-800 hover:cursor-pointer sm:h-[3rem] bg-pink-500 text-slate-100">
                Button
              </button>
            </div>
          </form>
        </div>

        <footer className=" sm:bg-pink-500 p-10  sm:min-h-[15rem]">
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
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      foo: logo,
    }, // will be passed to the page component as props
  };
}
