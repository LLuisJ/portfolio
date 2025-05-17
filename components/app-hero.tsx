"use client";
import React from "react";
import { StarsBackground } from "@/components/ui/stars-background";
export function AppHero() {
    return (
        <div className="h-[40rem] rounded-md bg-neutral-950 flex flex-col items-center justify-center relative w-full">
            <h2 className="relative flex-col z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
                <span>No idea what to do with this site...And you?</span>
                <div className="text-lg">
                    My name is Luis, I&apos;m 28 and <p />
                    from Germany. <p />I work as a software engineer.
                </div>
            </h2>
            <StarsBackground />
        </div>
    );
}
