import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialIcons from './socialicons';
import ProfileImage from "./profileimg";
import SiteName from './sitename';

export default function Heading() {
    return (
        <div className="bg-background">
                <ProfileImage/>
                <SiteName/>
                <SocialIcons/>
        </div>
    )
}