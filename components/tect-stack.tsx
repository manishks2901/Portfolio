import { cn } from "@/lib/utils";
import IconButton from "./icon-button";
import { MoveUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Image from "next/image";

const TechStack = () => {
    return ( 
        <div className="w-full flex flex-wrap">
            <div className="md:w-3/5 w-full md:order-1 order-2">
                <Paragraph 
                    title="Front-end"
                    description="Typescript / React / Recoil / NextJs / Shadcn /"
                    className="bg-white font-mono font-thin text-black"
                />
                <div className="flex justify-between">
                <Paragraph 
                    title="Styles"
                    description="Tailwind / CSS"
                    className=" font-mono font-thin text-white w-1/2 border-2 border-gray-700"
                />
                <div className="flex w-1/2 justify-center items-center">
                    <IconButton icon={<SiGithub size={40}/>} className="bg-black text-white border-2 border-white"/>
                    <IconButton icon={<MoveUpRight size={40}/>} className="bg-white text-black -ml-4"/>
                </div>

                </div>
                <Paragraph 
                    title="Styles"
                    description="Tailwind / CSS"
                    className=" font-mono font-thin  border-2 border-gray-700"
                />
                <div className="flex justify-between">
                <Paragraph 
                title=""
                description="Some of my favourite technologies technolies,or tools that I worked with "
                className="w-2/5"
                />

                <Paragraph 
                    title="Devops"
                    description="Tailwind / CSS"
                    className=" font-mono font-thin text-white w-3/5 border-2 border-gray-700"
                />

                </div>
        </div>
            <div className="md:w-2/5 w-full h-[400px] md:order-2 order-1 flex justify-center items-center mt-3">
                <div className="relative w-[400px] h-[400px] flex justify-center items-center rounded-full  text-black">
                    <div className="absolute -top-11">
                    <Image 
                    src="https://res.cloudinary.com/dsax8ghd0/image/upload/v1731831187/IMG_3639-removebg-preview_b8e211.png"
                    alt="Manish"
                    width={400}
                    height={400}
                    className="rounded-full border-2 border-black bg-white"
                    />
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default TechStack;


interface ParagraphProps {
    title:string
    description:string
    className: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ title,description, className }) => {

    return <div className={
        cn(
            "rounded-3xl md:h-[150px] h-[200px] flex flex-col justify-center md:mt-4  m-3"
            ,className
        )
        }>
        <h2 className="text-2xl ml-3 mt-0">
            {title}
        </h2>
        <p className="text-lg ml-3"> 
            {description}
        </p>
        </div>;
};

export { Paragraph };