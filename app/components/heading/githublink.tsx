import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function GitHubLink() {
    return(
        <div className='p-3'> 
            <a href="https://github.com/crazyoldbuffalo">
                <FontAwesomeIcon className="text-[#c3e88d] text-3xl" icon={faGithub}/>
            </a>
        </div>
    )
}