import Image from "next/image"
export default function Cards(){
    return(
        <div className="bg-kaki inset-shadow-sm/30">
            <div className="bg-beige mx-auto my-auto mt-20 sm:mt-20 sm:ml-15 w-80 sm:w-120 flex flex-col justify-between gap-4 py-5 px-7 shadow-lg/60 mb-10 text-marron">
                <div className="font-bold text-2xl mb-2">📅 Discover & Join Events</div>
                <div className="text-lg font-bold
                sm:font-semibold sm:px-7 mb-4">Explore a variety of upcoming events 
                in one place. Search by title, filter by
                date or location, and browse detailed 
                information to find the event that 
                matches your interests.</div>
                <Image
                  src="/image/discover.png"
                  alt=""
                  width="990"
                  height="200"

                  className="mx-auto"

                />
            </div>

            <div className="bg-beige sm:ml-200 mx-auto my-auto sm:-mt-40 w-80 sm:w-120 flex flex-col justify-between gap-4 py-5 px-7 shadow-lg/60 mb-10 text-marron">
                <div className="font-bold text-2xl mb-2">📝 How to Register
                </div>
                <ul className="text-lg font-bold ml-10 mb-5 sm:font-semibold sm:ml-14  sm:mb-4 list-disc ml-4 space-y-6 sm:mb-30">
                    <li>Create an account .</li>
                    <li>Choose the event you'd like to attend .</li>
                    <li>Complete your registration with a single click. </li>
                    <li>Your registered events are saved in your
                    personal dashboard for easy access
                    anytime.</li>
                </ul>
            </div>

            <div className="bg-beige mt-20 w-80  mx-auto my-auto sm:ml-15 sm:w-120 flex flex-col justify-between gap-4 py-5 px-7 shadow-lg/60 mb-10 text-marron">
                <div className="font-bold text-2xl mb-2">🎫 Event Preview
                </div>
                <div className="text-xl font-bold mb-10 sm:font-semibold sm:px-7 sm:mb-30">Each event includes a complete summary
                with its title,
                description, date, time, location, 
                available capacity,
                and registration status, giving you
                all the information 
                you need before reserving your spot
                </div>

            </div>

            <Image
                src="/image/prototype.png"
                alt="Event Details prototype"
                width={520}
                height={600}
                className="sm:ml-200 h-auto ml-2 mb-20 w-200 sm:w-[520] sm:mb-30"
            />
        </div>

    )
}