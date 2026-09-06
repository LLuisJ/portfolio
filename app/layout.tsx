import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/app-header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/app-footer";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Luis Jäger",
    description: "My Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="overflow-x-hidden">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Header />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </div>
            </body>
        </html>
    );
}
