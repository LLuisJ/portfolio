import { AppHero } from "@/components/app-hero";
import Projects from "@/components/projects";
import UntilNow from "@/components/until-now";

export default function Home() {
    return (
        <>
            <AppHero />
            <UntilNow />
            <Projects />
        </>
    );
}
