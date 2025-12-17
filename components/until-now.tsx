import { Timeline } from "./ui/timeline";

export default function UntilNow() {
    const data = [
        {
            title: "April 1997 - August 2016",
            content: (
                <div>
                    <div className="text-3xl">Kindergarden & School</div>
                    <div>
                        Like everyone else I went to kindergarden and school. <p />I went to the
                        Gymnasium and left school in 11th grade.
                    </div>
                </div>
            ),
        },
        {
            title: "September 2016 - July 2019",
            content: (
                <div>
                    <div className="text-3xl">Apprenticeship</div>
                    <div>
                        I started my apprenticeship at PowerCloud in Offenburg
                        <p />
                        and successfully finished it at Mytrix in Stuttgart.
                    </div>
                </div>
            ),
        },
        {
            title: "August 2019 - January 2023",
            content: (
                <div>
                    <div className="text-3xl">
                        Software Engineer Mytrix GmbH
                    </div>
                    <div>
                        I worked with Java, HTML, CSS and JavaScript, building and creating solutions for clients and using proprietary software where needed.
                    </div>
                </div>
            ),
        },
        {
            title: "February 2023 - November 2025",
            content: (
                <div>
                    <div className="text-3xl">
                        Software Engineer Bausparkasse Schwäbisch Hall AG
                    </div>
                    <div>
                        I worked with Java and Python/Jython on enterprise systems, focusing on implementation, bug fixes, maintenance, and integrating external enterprise systems into out own platform,
                    </div>
                </div>
            ),
        },
        {
            title: "December 2025 - Now",
            content: (
                <div>
                    <div className="text-3xl">
                        Senior Software Engineer Bausparkasse Schwäbisch Hall AG
                    </div>
                    <div>
                        After my promotion, I took responsibility for features, planned stories, and delegated tasks, while continuing hands-on development with Java and Python/Jython.
                    </div>
                </div>
            )
        }
    ];

    return (
        <div id="untilnow" className="w-full py-10 bg-zinc-950">
            <div className="ml-5 text-3xl bg-zinc-950">My life so far</div>
            <Timeline data={data} />
        </div>
    );
}
