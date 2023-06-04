import { ImGithub } from "react-icons/im"

export default function GitHubIcon() {
    return (
        <a href='https://github.com/crazyoldbuffalo'>
            <div className='p-2 border-2 border-accent rounded-2xl shadow-lg bg-transparent'>
                <ImGithub className='text-2xl text-accent'/>
            </div>
        </a>
    )
}