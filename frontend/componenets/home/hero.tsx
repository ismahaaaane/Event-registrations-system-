import { TbSparkles2Filled } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link"



export default function Hero() {
    return(
        <section className=" flex flex-col sm:bg-beige shadow-md/20 md:w-full flex-col">
        {/*Small badge */}

            <div className="bg-kaki/51 font-semibold  text-s text-marron mt-20 w-70 text-center mx-auto py-3 rounded-4xl  inset-shadow-sm/40 mb-10 "> New event added every day !</div>

        {/*Main title */}

            <div className="text-kaki font-bold text-4xl text-center [word-spacing:8px] tracking-wide mb-3">Find   Events that</div>
            <div className="text-marron font-bold text-4xl text-center [word-spacing:8px] tracking-wide ">     sparks Joy </div>
            <TbSparkles2Filled  className=" ml-79 -mt-9 text-6xl sm:ml-200 sm:text-7xl sm:-mt-10 text-marron "/>
        
        {/*Description*/}

        <div className="  text-kaki text-center font-semibold text-sm mt-2">Concerts, workshops, hackathons, coffee chats — discover
        </div>
        <div className="text-kaki text-center font-semibold text-sm mt-2 mb-15">and create events that bring people together.</div>

    {/*Search */}
        <Link
         href="/login"
         className="flex gap-4 justify-start rounded-4xl bg-kaki/35 px-2 py-3 sm:w-120 mx-auto items-center mb-10 inset-shadow-sm/15">
            <IoSearchSharp className="text-3xl my-auto ml-2 text-marron"/>
            <input
            
                type="text"
                placeholder="Search for any event..."
                className="placeholder:font-semibold text-marron text-lg outline-none focus:outline-none "
            />
            
        </Link>

        </section>
    )

}
