import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function GitHubLink() {
    return(
        <div className='align-center order-5 justify-center'> 
            <a href="https://github.com/crazyoldbuffalo">
                <FontAwesomeIcon className="text-[#c3e88d] justify-center" icon={faGithub}/>
            </a>
        </div>
    )
}