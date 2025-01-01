import Link from "next/link";

export default function Footer() {
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
        <div className="w-full py-10 lg:py-20 bg-background text-foreground">
            <div className="container ml-5">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="flex gap-8 flex-col items-start">
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-xl md:text-2xl tracking-tighter max-w-xl font-regular text-left">
                                Luis Jäger ™, 2024
                            </h2>
                            <p className="text-l max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left">
                                Let&apos;s see how this goes...
                            </p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-10 items-start">
                        {navigationItems.map((item) => (
                            <div
                                key={item.title}
                                className="flex text-base gap-1 flex-col items-start"
                            >
                                <div className="flex flex-col gap-2">
                                    <Link
                                        href={item.href}
                                        className="flex justify-between items-center"
                                    >
                                        <span className="text-l">
                                            {item.title}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
