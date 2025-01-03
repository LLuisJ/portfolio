"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { ChartNoAxesGantt } from "lucide-react";

export default function Header() {
    const navigationItems = [
        {
            title: "Home",
            href: "#",
            description: "",
        },
        {
            title: "Until Now",
            href: "#untilnow",
            description: "",
        },
        {
            title: "Projects",
            href: "#projects",
            description: "",
        },
        {
            title: "Contact",
            href: "#contact",
            description: "",
        },
    ];

    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-zinc-950">
            <div className="container relative min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center justify-between">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row hidden sm:block">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink href={item.href}>
                                        <Button variant="ghost">
                                            {item.title}
                                        </Button>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="block sm:hidden ml-5">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                <ChartNoAxesGantt />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="ml-5">
                            <DropdownMenuLabel>Links</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                {navigationItems.map((item, k) => (
                                    <>
                                        <DropdownMenuItem key={k}>
                                            <Link href={item.href}>
                                                {item.title}
                                            </Link>
                                        </DropdownMenuItem>
                                    </>
                                ))}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
