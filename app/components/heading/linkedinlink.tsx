import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function LinkedInLink() {
    return(
        <div className='p-3'>
            <a href='https://www.linkedin.com/in/tomboberek/'><FontAwesomeIcon className="text-[#c3e88d] text-3xl" icon={faLinkedin}/></a>
        </div>
    )
}