"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "./ui/badge";

interface Project {
    title: string;
    description: string;
    link: string;
    linktext: string;
    badges: string[];
}

interface ProjectsObject {
    projectsArr: Array<Project>
}

export default function Projects() {
    const projects: ProjectsObject = {
        projectsArr: [
            {
                title: "ch",
                description: "A small tool for creating/checking hashes",
                link: "https://github.com/LLuisJ/ch",
                linktext: "LLuisJ/ch",
                badges: ["Go", "CLI"],
            },
            {
                title: "OBF",
                description: "A Brainfuck compiler written in Odin",
                link: "https://github.com/LLuisJ/OBF",
                linktext: "LLuisJ/OBF",
                badges: ["Odin", "Compiler"],
            },
            {
                title: "microserve",
                description: "A python http library inspired by go's gin framework",
                link: "https://github.com/LLuisJ/microserve",
                linktext: "LLuisJ/microserve",
                badges: ["Python", "HTTP"],
            },
            {
                title: "Portfolio",
                description: "This website here",
                link: "https://github.com/LLuisJ/portfolio",
                linktext: "LLuisJ/portfolio",
                badges: ["Nextjs", "Web"],
            }
        ]
    };

    return (
        <div id="projects" className="py-20 w-full z-40">
            <div className="ml-5 text-3xl mb-10">
                My Projects so far on Github
            </div>
            <div className="ml-5 mr-5 flex flex-wrap">
                {projects.projectsArr.map((item, k) => (
                    <div key={k} className="p-1 w-full md:w-1/2 lg:w-1/4 hover:scale-105 transition-transform duration-300">
                        <Card>
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    variant="outline"
                                    onClick={() =>
                                        window.open(item.link, "_blank")
                                    }
                                >
                                    <SquareArrowOutUpRight />
                                    {item.linktext}
                                </Button>
                            </CardContent>
                            <CardFooter>
                                {item.badges.map((badge, k) => (
                                    <Badge key={k} variant="outline" className="mr-2 text-sky-300">{badge}</Badge>
                                ))}
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
