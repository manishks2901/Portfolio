"use client"
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTelegram } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri"
import { SiInstagram } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";





const SocialMedia = () => {
    const router = useRouter()
    return ( 
        <div className="mt-20 pt-4 flex md:justify-center items-center">
            <div className="">
                <Button onClick={() => router.push("https://github.com/manishks2901")
                } className="md:h-12 md:w-36  rounded-full md:mr-2 mr-1 mt-4 text-lg font-bold"><SiGithub/>Github</Button>
                <Button 
                onClick={() => router.push("https://www.linkedin.com/in/manish-kumar-sharma-ba601630b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app")}
                className="md:h-12 md:w-36  rounded-full md:mr-2 mr-1 mt-4 text-lg font-bold"><SiLinkedin/>LinkedIn</Button>
                <Button 
                className="md:h-12 md:w-36  rounded-full md:mr-2 mr-1 mt-4 text-lg font-bold"><SiTelegram/>Telegram</Button>
                <Button
                onClick={() => router.push("https://x.com/ManishK97940081")}
                 className="md:h-12 md:w-36  rounded-full md:mr-2 mr-1 mt-4 text-lg font-bold"><RiTwitterXLine/>Twitter</Button>
                <Button className="md:h-12 md:w-36  rounded-full md:mr-2 mr-1 mt-4 text-lg font-bold"><SiInstagram/>Instagram</Button>
            </div>
        </div>
     );
}
 
export default SocialMedia;