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
    ];

    return (
        <header className="w-full flex justify-center z-50 fixed top-0 left-0">
            <div className="relative min-h-20 flex items-center justify-center">
                <div className="hidden md:flex items-center gap-6 px-6 py-2 rounded-full bg-[#16161a] border border-white/10 backdrop-blur">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-8">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink
                                        href={item.href}
                                        className="text-sm text-gray-300 hover:text-white transition font-medium"
                                    >
                                        {item.title}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="block sm:hidden ml-5 b">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="rounded-full">
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
