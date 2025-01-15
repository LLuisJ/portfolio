"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

interface Project {
    title: string;
    description: string;
    link: string;
}

interface ProjectsObject {
    [key: string]: Array<Project>
}

export default function Projects() {
    const projects: ProjectsObject = {
        "Go": [
            {
                title: "ch",
                description: "A small tool for creating/checking hashes",
                link: "https://github.com/LLuisJ/ch",
            },
        ],
        "Odin": [
            {
                title: "OBF",
                description: "A Brainfuck compiler written in Odin",
                link: "https://github.com/LLuisJ/OBF",
            },
        ],
        "Web": [
            {
                title: "Portfolio",
                description: "This website here",
                link: "https://github.com/LLuisJ/portfolio"
            }
        ]
    };

    return (
        <div id="projects" className="py-10 w-full">
            <div className="ml-5 text-3xl mb-10">
                My Projects so far on Github
            </div>
            <Tabs defaultValue="go" className="w-[300px] sm:w-[500px] mx-auto">
                <TabsList className="grid w-full grid-cols-3">
                    {Object.keys(projects).map((key) => (
                        <TabsTrigger value={key}>{key}</TabsTrigger>
                    ))}
                </TabsList>
                {Object.keys(projects).map((key) => (
                    <TabsContent value={key}>
                        <Carousel className="w-full max-w">
                            <CarouselContent>
                                {projects[key].map((item, k) => (
                                    <CarouselItem key={k}>
                                        <div className="p-1">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>
                                                        {item.title}
                                                    </CardTitle>
                                                    <CardDescription>
                                                        {item.description}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <Button
                                                        variant="outline"
                                                        onClick={() =>
                                                            window.open(
                                                                item.link,
                                                                "_blank"
                                                            )
                                                        }
                                                    >
                                                        <SquareArrowOutUpRight />
                                                        {item.link}
                                                    </Button>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
