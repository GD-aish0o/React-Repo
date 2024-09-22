export default function Card() {
  return (
    <div >
        <div 
        style={{ backgroundImage: `url('https://images.pexels.com/photos/927505/pexels-photo-927505.jpeg?auto=compress&cs=tinysrgb&w=300')` }} // Background image for the main div
        className="relative bg-gradient-to-t from-cyan-500 to-transparent w-60 border border-slate-300 dark:border-orange-500 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md bg-cover bg-center" 
        >
            <div className="bg-gradient-to-tr from-teal-400 to-transparent dark:bg-gradient-to-tr dark:from-amber-600 dark:to-transparent">

        {/* Content section positioned at the bottom-left corner */}
            <div className=" text-left p-2 ">
                {/*  dark:bg-orange-300 */}
                
                {/* Heading */}
                <h1 className="text-lg font-semibold text-white  dark:bg-zinc-800 p-1 rounded-md dark:text-orange-500 inline-block">
                Island Gateway
                </h1>

                {/* Paragraph text */}
                <p className="mt-2 text-sm font-semibold text-white dark:text-black ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, illum. Eaque velit recusandae ipsum accusamus optio sunt, magnam enim voluptatibus, minima officia tenetur adipisci, alias obcaecati. Officiis voluptatem temporibus possimus!
                </p>

                {/* Button for 'View Profile' */}
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-teal-700 dark:bg-orange-500 dark:text-black">
                View Profile
                </button>
            </div>

        </div>
        </div>

    </div>
  );
}
