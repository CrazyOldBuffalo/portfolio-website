import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GitHubLink from "./githublink";
import ProfileImage from "./profileimg";
import LinkedInLink from './linkedinlink';

export default function Heading() {
    return (
        <div className="flex flex-row w-full bg-[#34324a] rounded-b-lg p-2 drop-shadow-lg items-center">
            <div className="left">
                <ProfileImage/>
            </div>

            <div className="right-0">
                <GitHubLink/>
            </div>
            <div>
                <LinkedInLink/>
            </div>
        </div>
    )
}