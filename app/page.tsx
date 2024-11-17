import AboutMe from "@/components/about-me";
import IntroPage from "@/components/Intro-page";
import ProjectCarousel from "@/components/project-carousel";
import SocialMedia from "@/components/social-media";
import TechStack from "@/components/tect-stack";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div className="w-full">
        <h1 className="text-xl font-bold mt-3 flex font-mono ml-2">Manish Kumar Sharma .....</h1>
      </div>
      <div className="md:m-12 md:p-5 m-8 p-3">
        <IntroPage/>
        <SocialMedia/>
        <ProjectCarousel/>
      </div>
      <div className="md:m-12 md:p-5 m-8 p-3">
      <AboutMe/>
      </div>
      <div className="md:m-12 md:p-5 m-8 p-3">
        <TechStack/>
      </div>
    </React.Fragment>
  );
}
