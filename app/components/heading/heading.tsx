import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GitHubLink from "./githublink";
import ProfileImage from "./profileimg";
import LinkedInLink from './linkedinlink';
import SiteName from './sitename';

export default function Heading() {
    return (
        <div className="flex w-full bg-background rounded-b-2xl p-4 drop-shadow-lg items-center">
            <div className="">
                <ProfileImage/>
            </div>
            <div>
                <SiteName/>
            </div>
            <div className="">
                <GitHubLink/>
            </div>
            <div className=''>
                <LinkedInLink/>
            </div>
        </div>
    )
}