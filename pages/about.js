import "aos/dist/aos.css";
import Aos from "aos";
import Image from "next/image";
import Card from "../components/card";
import logo from "../public/rotaractLogo.svg";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FaFacebook,FaInstagram,FaRegEnvelope,FaPhoneAlt,FaLocationArrow,FaLinkedinIn } from "react-icons/fa";

import { useEffect } from "react";

export default function About(props) {
  useEffect(() => {
    Aos.init();
  }, []);

  console.log(props.foo);

  return (
    <>
      <div className="bg-slate-100  text-slate-900 sm:min-h-[19rem] sm:p-4 border-1  ">
        <h1
          className="rtr1 sm:text-center md:text-center {hover:tracking-widest duration-300}"
          data-aos="fade-up"
        >
          {" "}
          Rotary
        </h1>

        <div className=" sm:m-5 ">
          <div
            className="  bg-slate-100 sm:min-h-[12rem] sm:min-w-[10rem] sm:flex  items-center sm:text-clip "
            data-aos="fade-up"
          >
            <p className="sm:max-h-[8rem] text-center text-sm sm:text-lg md:text-lg">
              Rotaract clubs bring together people ages 18 and older to exchange
              ideas with leaders in the community, develop leadership and
              professional skills, and have fun through service.In communities
              worldwide, Rotary and Rotaract members work side by side to take
              action through service. From big cities to rural villages,
              Rotaract is changing communities like yours.
            </p>
          </div>
        </div>
      </div>

      <div className="abt-1  bg-slate-100 sm:min-h-[25rem] rounded-lg border-1 P-1">
        <h2 className=" text-center sm:text-xlg ">About</h2>
        <p data-aos="fade-up" className=" text-center p-2 text-sm sm:text-lg">
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

      <div className="bg-slate-100  overflow-scroll snap-x snap-mandatory sm:flex gap-40 p-8 px-36 place-items-center w-full">
        <div className="flex justify-center gap-32 snap-center ">
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
        className="intro bg-slate-100 text-center min-h-[35rem] p-8"
        data-aos="fade-up"
      >
        {" "}
        <h2 className=""> Introduction </h2>
      </div>

      <div>
        <div className="contact bg-white sm:min-h-[30rem] text-pink-500 p-10 gap-5 ">
          <h2>GET IN TOUCH</h2>{" "}
          <div className=" sm:float-left sm:text-left sm:min-h-[5rem] text-sm sm:text-md pl-2 sm:w-[25rem] text-slate-800">
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
          <form className="review  bg-white sm:min-w-[28rem] sm:float-right sm:min-h-[27rem] space-y-7 drop-shadow-2xl  pr-8 pl-8 ">
            <h2 className=" sm:text-center text-pink-500">Write a Review</h2>
            <input
              className="palceholder:text-slate-800 border-2 border-pink-500 sm:w-[100%] text-sm pt-1 pb-1 pl-1 "
              placeholder="Name"
            />
            <div className="email border-2  sm:float-center border-pink-500">
              <input
                className=" sm:w-[100%] text-sm  pt-1 pb-1 pl-1 border-pink-500"
                placeholder="Email"
              ></input>
            </div>
            <textarea
              className="sm:w-[100%] border-2 border-pink-500 text-sm  pt-1 pb-1 pl-1"
              placeholder="Write a reviews"
              rows={4}
            />
            <div className="sm:flex justify-center">
              <button className="sm:w-[70%] border-2 sm:h-[3rem] bg-pink-500 text-slate-100">
                Button
              </button>
            </div>
          </form>
        </div>
        <footer className="foorter sm:bg-pink-500 p-10 sm:min-h-[15rem]">
            <h5 className="text-white w-[20rem] text-center"> Rotaract Club Of BIT Mesra</h5>
            <div className="text-sm text-white w-[17rem] text-left pl-3">Abh igwh csc yhucs klkajshbfgfsvbc ttdsvcsatfsa sasathgvcsatxsavc cshgsacvschsafsafcas uycfsacsacsafs vcsufccsacfucuyc</div>

            <div className="flex flex-row gap-3 p-3 w-[8rem]">
            <FaFacebook/>
            <FaInstagram/>
            <FaLinkedinIn/> 
            </div>
            <div className="flex justify-center gap-20  ">
                <div className="text-sm text-white">Home</div>
                <div className="text-sm text-white">About</div>
                <div className="text-sm text-white">Event</div>
                <div className="text-sm text-white">Contact</div>
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
