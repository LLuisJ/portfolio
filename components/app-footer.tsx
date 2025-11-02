
export default function Footer() {
    return (
        <div className="w-full py-10 lg:py-20 bg-background text-foreground">
            <div className="w-full flex justify-center">
                <div className="flex flex-col gap-4 items-center text-center">
                    <h2 className="text-xl md:text-2xl tracking-tighter font-regular">
                        Luis Jäger, 2025
                    </h2>
                    <p className="text-l max-w-lg leading-relaxed tracking-tight text-foreground/75">
                        Let&apos;s see how this goes...
                    </p>
                </div>
            </div>
        </div>
    );
}
