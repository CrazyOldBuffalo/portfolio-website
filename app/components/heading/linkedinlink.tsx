import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function LinkedInLink() {
    return(
        <div className='p-0.5 outline outline-[#A6ACCD] outline-2 rounded-lg'>
            <a href='https://www.linkedin.com/in/tomboberek/'><FontAwesomeIcon className="text-[#c3e88d] text-3xl p-1" icon={faLinkedin}/></a>
        </div>
    )
}