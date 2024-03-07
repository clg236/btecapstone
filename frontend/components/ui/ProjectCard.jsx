'use client'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function ProjectCard( {cover, name, project, description, year} ) {
    return (
        <Card isFooterBlurred className="col-span-1 h-[300px] bg-base-100" isPressable onPress={() => console.log("item pressed")}>
        <CardHeader className="relative z-10 flex justify-between items-start p-4">
          <div className="text-left">
            <p className="text-tiny text-pink/100 bg-black uppercase font-bold">{name}</p>
            <h4 className="text-white font-medium text-large">{project}</h4>
            <p className="text-tiny text-white/100">{description}</p>
          </div>
          <p className="p-1 m-4">{year}</p>
        </CardHeader>
        <CardBody className="overflow-visible p-0">
          <Image
            removeWrapper
            alt="Intelligent Content Summarizer"
            className="z-0 w-full h-full object-cover"
            src={cover}
          />
        </CardBody>
      </Card>
    )
}