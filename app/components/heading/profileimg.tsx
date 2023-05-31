import Image from 'next/image'
import profileImg from '../../../public/profileImg.png'

export default function ProfileImage() {
    return (
        <div className='p-2'>
            <Image className='w-10 h-10 rounded-full ring-2 ring-offset-4 ring-[#c3e88d] ring-offset-[#34324a] blur-[0.5px] hover:blur-0' src={profileImg} alt='Profile Image of website creator'></Image>
        </div>
    )
}