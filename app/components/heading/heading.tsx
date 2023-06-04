import {ImGithub, ImLinkedin2} from 'react-icons/im'
import LinkedInIcon from './SocialIcons/LinkedinIcon'
import GitHubIcon from './SocialIcons/GithubIcon'
import ProfileImage from './profileimg'
import SiteName from './sitename'

export default function Heading() {
    return (
        <header className='bg-background backdrop-blur-sm opacity-95 sticky top-0 m-auto'>
            <div className='xl:container xl:m-auto flex flex-col items-center sm:flex-row sm:justify-between py-1'>
                <div className='md:flex-none w-60 order-1 sm:order-1 flex justify-center sm:py-0'>
                    <ProfileImage/>
                </div>
                <div className='w-80 flex order-2 sm:order-2 justify-center align-center'>
                    <SiteName/>
                </div>
                <div className='w-80 order-3 flex justify-center left-8'>
                    <div className='flex gap-6'>
                        <GitHubIcon/>
                        <LinkedInIcon/>
                    </div>
                </div>
            </div>
        </header>
    )
}