import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function SocialIcons() {
    return (
        <div className='' >
            <div className='outline outline-[#A6ACCD] outline-2 rounded-lg '> 
                <a href="https://github.com/crazyoldbuffalo">
                    <FontAwesomeIcon className="text-[#c3e88d] text-3xl p-1" icon={faGithub}/>
                </a>
            </div>
            <div className='outline outline-[#A6ACCD] outline-2 rounded-lg '>
                <a href='https://www.linkedin.com/in/tomboberek/'>
                    <FontAwesomeIcon className="text-[#c3e88d] text-3xl p-1" icon={faLinkedin}/>
                </a>
            </div>
        </div>
    )
}