import Link from "next/link";
import Image from "next/image";

export default function footer() {
    return(
        <footer className="bg-beige inset-shadow-sm/30 flex justify-between ">
            <Link
             href="/"
            >
                <Image
                  src="/image/logo2.png"
                  alt="logo"
                  width="120"
                  height="120"
                  className="w-[60] h-auto my-5 mx-5 
                  sm:w-[130]
                  sm:h-[110]
                 sm:ml-10 sm:my-10"
                />
            </Link>
            <a
             href="https://www.linkedin.com/feed/"
             target="_blank"
             rel="noopener noreferrer"
             className="flex flex-col text-s text-marron/50  my-auto sm:ml-45 text-center sm:text-lg font-semibold"
            >
                <div>       Event registration system </div>
                <div className="text-center">        Kharcha aya ismahane © </div>
                
            </a>
            <div className=" flex flex-col sm:flex  gap-3 mt-4 mr-3 mb-3 sm:flex-row justify-between text-sm sm:text-xl sm:gap-15 sm:mr-10">
                <Link
                 href="/events"
                 className="text-marron font-bold sm:text-xl my-auto "
                >
                    Events
                </Link>
                <Link
                 href="/login"
                 className="text-marron font-bold sm:text-xl my-auto "
                >
                    Log in
                </Link>
                <Link
                 href="/register"
                 className="text-marron font-bold sm:text-xl my-auto "
                >
                    Join us
                </Link>
            </div>
          
        </footer>
    )

}