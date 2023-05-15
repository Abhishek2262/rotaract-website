import "aos/dist/aos.css";
import Aos from "aos";
import logo from "../public/rotaractLogo.svg";
import Footer from "../components/footer/footer";
import { useEffect } from "react";
import SimpleSlider from "./SliderPath"; //For carousel
import Slider2 from "./SliderPath2"; //For carousel

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
          <p
            className=" sm:min-h-[12rem] sm:min-w-[10rem] p-3 text-center text-sm sm:text-lg md:text-lg"
            data-aos="fade-up"
          >
            Rotaract clubs bring together people ages 18 and older to exchange
            ideas with leaders in the community, develop leadership and
            professional skills, and have fun through service.In communities
            worldwide, Rotary and Rotaract members work side by side to take
            action through service. From big cities to rural villages, Rotaract
            is changing communities like yours.
          </p>
        </div>
      </div>

      <div className="abt-1  bg-slate-100 sm:min-h-[25rem] rounded-lg border-1 P-1 bg-gradient-to-r from-pink-500 to-purple-500 ">
        <h2 className=" text-center sm:text-xlg text-white">About</h2>
        <p
          data-aos="fade-up"
          className=" text-white text-center p-2 text-sm sm:text-lg bg-gradient-to-r from-pink-500 to-purple-500 "
        >
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
      <div className="min-h-[25rem] bg-pink-300 max-w-full rounded-xl ">

        <h2 className="text-center text-white">Faculty Adviser</h2>

        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          <div style={{
            borderRadius: '50%',
            backgroundColor: '#F27BB8',
            height: '18rem',
            width: '18rem',
            zIndex: '1'
          }}>

            {/* FacAd ka image  */}
          </div>
          <textarea style={{ resize: 'none', padding: '1rem', border: 'none', outline: 'none' }}
           className="rounded-lg bg-gradient-to-r from-pink-600 to-pink-300" rows="6" cols="70">

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popular in the 1960s with the release of Letraset sheets 
          </textarea>

        </div>
      </div>




      <Slider2 />


      <div
        className="intro bg-slate-100 text-center bg-gradient-to-r from-pink-500 to-purple-500 min-h-[35rem] p-8"
        data-aos="fade-up"
      >
        {" "}
        <h2 className="text-white"> Introduction </h2>
        <div className="font-medium">
        Rotaract is a vibrant community of passionate young professionals and students committed to making a difference in the world by improving local and global communities. Together we uphold the principles of fellowship, leadership, and service. We are an ethnically and culturally diverse community of people who share the desire to change the world for the better.
        Rotaract invites you to join our community of like-minded people whether you are a student looking for leadership opportunities, a young    professional looking to give back to your community, or someone who is enthusiastic about making a difference. You may learn more about    our organization, our activities, and how to get involved on this page. 

        </div>
      </div>

      <SimpleSlider />

      <Footer />


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
