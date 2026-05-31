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
                description: "A small hashing utility",
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
                description: "A gin inspired python http library",
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
        <div id="projects" className="py-20 w-full">
            <div className="ml-5 mr-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {projects.projectsArr.map((item, k) => (
                    <div key={k} className="p-1 hover:scale-105 transition-transform duration-300">
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
