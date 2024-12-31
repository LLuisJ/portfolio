import { AppHero } from "@/components/app-hero";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import UntilNow from "@/components/until-now";

export default function Home() {
    return (
        <>
            <AppHero />
            <UntilNow />
            <Projects />
            <Contact />
        </>
    );
}
