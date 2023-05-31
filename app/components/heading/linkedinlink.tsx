import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function LinkedInLink() {
    return(
        <div>
            <a href='https://www.linkedin.com/in/tomboberek/'><FontAwesomeIcon icon={faLinkedin}/></a>
        </div>
    )
}