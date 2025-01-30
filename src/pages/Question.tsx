import line from "../assets/hiasan/line.png";
import lineBlack from "../assets/hiasan/line-black.png";

function Question(){
    return(
        <div className="container w-full bg-gray-900 dark:bg-white items-center justify-center  mx-auto lg:px-40 relative flex md:flex-row flex-col gap-14 md:gap-36 md:py-24 py-16 px-4">
            <img src={line} className="w-full dark:hidden absolute top-0 md:px-40 px-4" alt="" />
            <img src={lineBlack} className="w-full hidden dark:flex absolute top-0 md:px-40 px-4" alt="" />
            <div className="text flex flex-col items-start text-start max-w-[400px] gap-4">
                <h1 className="font-semibold text-4xl dark:text-black text-white">Ada yang ingin kamu tanyakan?</h1>
                <p className="font-medium dark:text-black text-white text-lg">Jangan sungkan untuk bertanya dengan kami! Kami senantiasa menunggu pertanyaan darimu!</p>
            </div>
            <div className="form flex">
                <form action="" className="flex flex-col items-start gap-3 border-2 rounded-lg p-5 border-gray-400 dark:border-black">
                    <p className="text-3xl font-semibold my-4 w-full text-center dark:text-black text-white">Fill This Form</p>
                    <div className="username flex flex-col items-start w-80 gap-1">
                        <label htmlFor="username" className="font-medium text-sm dark:text-black text-white">
                            Name :
                        </label>
                        <input type="text" placeholder="Input your name" name="username" id="username" className="w-full bg-transparent p-2 px-3 rounded-md outline-none border placeholder:text-gray-400 text-sm duration-200 transition-all border-gray-400 focus:border-blue-500" />
                    </div>
                    <div className="email flex flex-col items-start w-80 gap-1">
                        <label htmlFor="email" className="font-medium text-sm dark:text-black text-white">
                            Email :
                        </label>
                        <input type="email" placeholder="example@gmail.com" name="email" id="email" className="w-full bg-transparent p-2 px-3 rounded-md outline-none border placeholder:text-gray-400 text-sm duration-200 transition-all border-gray-400 focus:border-blue-500" />
                    </div>
                    <div className="email flex flex-col items-start w-80 gap-1">
                        <label htmlFor="question" className="font-medium text-sm dark:text-black text-white">
                            Email :
                        </label>
                        <textarea  placeholder="I want ask..." name="question" id="question" className="w-full bg-transparent p-2 px-3 rounded-md outline-none border placeholder:text-gray-400 text-sm duration-200 transition-all border-gray-400 focus:border-blue-500" />
                    </div>
                    <button type="submit" className="w-full bg-gray-950 dark:bg-black text-white  text-sm py-3 rounded-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}export default Question