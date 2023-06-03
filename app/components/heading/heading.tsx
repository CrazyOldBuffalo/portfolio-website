import {ImGithub, ImLinkedin2} from 'react-icons/im'

export default function Heading() {
    return (
        <header className='bg-background backdrop-blur-sm opacity-95'>
            <div className='xl:container xl:m-auto flex flex-col items-center sm:flex-row sm:justify-between py-3'>
                <div className='w-96 order-3 flex justify-center'>
                    <div className='flex gap-6'>
                        <a href='https://github.com/crazyoldbuffalo'>
                            <div className='p-2 border-2 border-accent rounded-2xl shadow-lg bg-transparent'>
                                <ImGithub className='text-2xl text-accent'/>
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/in/tomboberek/'>
                            <div className='p-2 border-2 border-accent rounded-2xl shadow-lg bg-transparent'>
                                <ImLinkedin2 className='text-2xl text-accent' />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}