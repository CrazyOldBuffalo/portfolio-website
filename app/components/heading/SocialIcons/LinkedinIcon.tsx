import { ImLinkedin2 } from "react-icons/im";

export default function LinkedInIcon() {
    return (
        <a href="https://www.linkedin.com/in/tomboberek/">
            <div className="p-2 border-2 border-accent rounded-2xl shadow-lg bg-transparent">
                <ImLinkedin2 className="text-2xl text-accent" />
            </div>
        </a>
    )
}
