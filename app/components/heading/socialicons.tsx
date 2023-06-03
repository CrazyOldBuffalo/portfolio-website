import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function SocialIcons() {
    return (
        <div className='container p-1 '> 
                <a href="https://github.com/crazyoldbuffalo">
                    <FontAwesomeIcon className="text-accent text-3xl p-1" icon={faGithub}/>
                </a>
                <a href='https://www.linkedin.com/in/tomboberek/'>
                    <FontAwesomeIcon className="text-accent text-3xl p-1" icon={faLinkedin}/>
                </a>
        </div>
    )
}
