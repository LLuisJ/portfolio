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

export default function Projects() {
    const projects = {
        go: [
            {
                title: "ch",
                description: "A small tool for creating/checking hashes",
                link: "https://github.com/LLuisJ/ch",
            },
        ],
        odin: [
            {
                title: "OBF",
                description: "A Brainfuck compiler written in Odin",
                link: "https://github.com/LLuisJ/OBF",
            },
        ],
    };

    return (
        <div id="projects" className="py-10 w-full">
            <div className="ml-5 text-3xl mb-10">
                My Projects so far on Github
            </div>
            <Tabs defaultValue="go" className="w-[300px] sm:w-[500px] mx-auto">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="go">Go</TabsTrigger>
                    <TabsTrigger value="odin">Odin</TabsTrigger>
                </TabsList>
                <TabsContent value="go">
                    <Carousel className="w-full max-w">
                        <CarouselContent>
                            {projects.go.map((item, k) => (
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
                <TabsContent value="odin">
                    <Carousel className="w-full max-w">
                        <CarouselContent>
                            {projects.odin.map((item, k) => (
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
            </Tabs>
        </div>
    );
}
