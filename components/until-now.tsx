import { Timeline } from "./ui/timeline";

export default function UntilNow() {
    const data = [
        {
            title: "1997-2016",
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
            title: "2016-2019",
            content: (
                <div>
                    <div className="text-3xl">Apprenticeship</div>
                    <div>
                        I started my Apprenticeship at PowerCloud in Offenburg
                        <p />
                        and successfully finished it at Mytrix in Stuttgart.
                    </div>
                </div>
            ),
        },
        {
            title: "2019-2023",
            content: (
                <div>
                    <div className="text-3xl">
                        Software Engineer Mytrix GmbH
                    </div>
                    <div>
                        I worked at Mytrix for 4 years and mainly worked with
                        <p />
                        Java, HTML, CSS, JS and PL/SQL.
                    </div>
                </div>
            ),
        },
        {
            title: "2023-",
            content: (
                <div>
                    <div className="text-3xl">
                        Software Engineer Bausparkasse Schwäbisch Hall AG
                    </div>
                    <div>
                        Since 2023 I work at Bausparkasse Schwäbisch Hall AG as
                        a software engineer.<p/>
                        I mainly work with Java, Python, Oracle and some Bash.
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div id="untilnow" className="w-full py-10 bg-zinc-950">
            <div className="ml-5 text-3xl bg-zinc-950">My life so far</div>
            <Timeline data={data} />
        </div>
    );
}
