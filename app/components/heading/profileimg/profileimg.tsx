import Image from 'next/image'
import profileImg from '../../../../public/profileImg.png'

export default function ProfileImage() {
    return (
        <div className='p-2'>
            <Image className='w-16 h-16 rounded-full ring-2 ring-offset-4 ring-[#c3e88d] ring-offset-[#34324a] ' src={profileImg} alt='Profile Image of website creator'></Image>
        </div>
    )
}