import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
 
} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className=" sm:bg-pink-500 p-10  sm:min-h-[20rem]">
      <h5 className="text-white  xl:w-[20rem] sm:text-md  text-center hover:text-slate-800 hover:cursor-pointer">
        {" "}
        Rotaract Club Of BIT Mesra
      </h5>
      <div className="text-sm text-white  xl:w-[17rem] text-left pl-3 hover:text-slate-800 hover:cursor-pointer">
      Join us right away to become a part of a global network of young leaders.
      Thank you for visiting our website, we hope to see you soon at our events!
      Looks like you’ve reached to the edges of earth! 
      Just Kidding, we’re not that old. But we promise, there’s a lot more to explore when we meet!

      </div>

      <div className="flex flex-row gap-3 p-3 sm:w-[8rem] w-[8rem] text-white ">
        <FaFacebook className="hover:text-slate-800 hover:cursor-pointer" />
        <FaInstagram className="hover:text-slate-800 hover:cursor-pointer" />
        <FaLinkedinIn className="hover:text-slate-800 hover:cursor-pointer" />
      </div>
      <div className="flex justify-center  gap-20  ">
        <div className="text-sm text-white hover:text-slate-800 hover:cursor-pointer">
          {" "}
          <a href="./" id="homebut">
            Home
          </a>{" "}
        </div>
        <div className="text-sm text-white hover:text-slate-800 hover:cursor-pointer">
          <a href="./events" id="eventsbut">
            Event
          </a>
        </div>
        <div className="text-sm text-white hover:text-slate-800 hover:cursor-pointer">
          <a href="./about" id="aboutbut">
            About
          </a>
        </div>

        <div className="text-sm text-white hover:text-slate-800 hover:cursor-pointer">
          <a href="./contact" id="contbut">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
