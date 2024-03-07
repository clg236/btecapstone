'use client'
import Header from "@/components/ui/Header";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function CapstonePage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen mt-10">
            <Header />
            <div className="text-center my-8" >
                <h1 className="text-4xl font-semibold italic">PROJECT TITLE</h1>
                <h4 className="mt-2 text-white font-medium text-tiny">Christian Grewell, Class of 2024</h4>
                <div className="mx-auto max-w-4xl mt-5" >

                <Image
                      className="justify-center m-10 mx-auto"
                      width="100%"
                      height="auto"
                      alt="NextUI hero Image with delay"
                      src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                  />
                  </div>
                  <div className="mx-auto max-w-4xl">
                    <Card className="p-5 mt-5">
                        <p>This project, titled "Trees are Wonderful," is a captivating exploration of the beauty and significance of trees, showcased through an interactive web experience. It is designed as a capstone project by Christian Grewell, Class of 2024, demonstrating a fusion of technology, design, and environmental awareness.
                        The project is built using a modern web development stack, including React for the frontend, with the use of Next UI for the UI components, ensuring a sleek, responsive design. The main page is structured to provide a user-friendly interface, with a focus on aesthetic appeal and educational content.</p>
                    </Card>
                </div>
                
            </div>
        </div>
    )
}