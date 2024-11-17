import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import IconButton from "./icon-button";

const IntroPage = () => {
    return ( 
        <div className="flex flex-wrap py-5 ">
            <div className="md:order-1 order-1  md:w-2/3 flex items-center  flex justify-start items-center">
                <h2 className="lg:text-9xl md:text-8xl text-[45px] font-mono font-extrabold">
                    Full-Stack
                </h2>
            </div>
            <div className="flex md:order-2 order-4 md:w-1/3 justify-start items-center md:mt-0 mt-10">
            <Button
                size="lg"
                className="font-thin text-xl md:w-60 md:h-16 w-40 rounded-full  bg-white  text-black hover:bg-white "
                >
                    <i>Projects</i>
            </Button>
            <IconButton
                icon={<MoveRight className="md:h-12 md:w-12 h-7 w-7" />}
                className="ml-4 bg-white  text-black"
            />
      </div>
      <div className="flex md:order-3 order-3 md:w-1/3 justify-start items-center pl-2   md:mt-6 mt-10">
        <h2 className="md:text-2xl text-lg font-sans "> 
          My goal is to write <i><b>maintainable,clean</b></i> <br />
          and <i><b>understandble code</b></i> to process <br />
          development was enjoyable.
        </h2>
      </div>
            <div className="md:order-4 order-2  md:w-2/3 w-full flex items-center md:justify-center justify-end md:mt-10 mt-5">
                <h2 className="lg:text-9xl md:text-8xl text-[45px] font-mono font-extrabold ">
                    Developer
                </h2>
            </div>
            
        </div>
     );
}
 
export default IntroPage;