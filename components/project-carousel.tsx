"use client";
import CardComponent from "./card";
import ReadMoreButtons from "@/components/button";
import { type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { MoveLeft, MoveRight } from "lucide-react";
import IconButton from "./icon-button";

const ProjectCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div className="relative">
      <div className="md:h-[300px]">
        <div>
        <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <CardComponent
                        imageUrl="https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"
                        title="Card 1"
                        description="Description"
                        ButtonComponent={ReadMoreButtons}
                    />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <CardComponent
                        imageUrl="https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"
                        title="Card 1"
                        description="Description"
                        ButtonComponent={ReadMoreButtons}
                    />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <CardComponent
                        imageUrl="https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"
                        title="Card 1"
                        description="Description"
                        ButtonComponent={ReadMoreButtons}
                    />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <CardComponent
                        imageUrl="https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"
                        title="Card 1"
                        description="Description"
                        ButtonComponent={ReadMoreButtons}
                    />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <CardComponent
                        imageUrl="https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"
                        title="Card 1"
                        description="Description"
                        ButtonComponent={ReadMoreButtons}
                    />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
        </div>
      </div>
      <div className="md:absolute  md:h-full w-full md:top-14  top-16 pt-6 left-0  flex  md:justify-between justify-center">
        <div className="md:w-[450px] md:h-full m-0 bg-custom-gradient bg-blend-hard-light shadow-custom-shadow flex justify-center items-center"
        >
          <IconButton icon={<MoveLeft />} className="md:w-20 md:h-20 w-15 h-15 bg-transparent border border-white text-white mr-2" 
          onClick={() => api?.scrollTo(current - 1)}
          />

        </div>
        <div className="md:w-[450px] md:h-full bg-mirrored-gradient bg-blend-hard-light shadow-custom-shadow flex justify-center items-center  " >
           <IconButton icon={<MoveRight />} className="md:w-20 md:h-20 w-15 h-15 bg-transparent border border-white text-white mr-2"
           onClick={() => api?.scrollTo(current + 1)}
            />
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
