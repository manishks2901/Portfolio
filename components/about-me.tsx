const AboutMe = () => {
    return ( 
        <div className="w-full  flex flex-wrap py-5 ">
            <div className="md:order-1 order-1  md:w-1/3 flex items-center  flex justify-start items-center ">
                <p className="md:text-3xl text-xl font-mono font-semibold">
                   ../ About Me ...
                </p>
            </div>
            <div className="md:order-1 order-2  md:w-2/3 w-full flex items-center md:mt-60 mt-4  flex justify-end items-center ">
                <p className="md:text-2xl text-lg font-bold font-mono">
                    Hello!I&apos;m Manish,I&apos;m a <br />
                    Full-Stack developer <br />
                    With having a year of developing expreience.
                </p>
            </div>
        </div>
     );
}
 
export default AboutMe;