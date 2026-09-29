import { CircleDot, Sun } from 'lucide-react'
import Image from 'next/image'
import { GitHubCalendar } from 'react-github-calendar'

export default function HeroSection() {
    return (
        <div className="h-full w-full overflow-hidden">

            <div className="relative h-36 w-full overflow-hidden border-x border-neutral-400/30">
                <Image
                    src="/light-background.png"
                    alt="Background"
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-radial from-transparent via-transparent to-white/20" />
            </div>

            <div className='bg-neutral-50 mx-px z-10 h-32 border-y border-dashed border-neutral-400 flex items-center justify-center gap-8'>
                <div className='flex items-center justify-center bg-neutral-200/40 h-24 w-24 p-1 rounded-lg border border-dashed border-neutral-400'>
                    <Image
                        src="/light-profile.png"
                        alt="profile"
                        width={96}
                        height={96}
                        className='object-cover rounded-md border border-dashed border-neutral-400'
                    />
                </div>
                <div className='h-24 w-3/5 grid grid-cols-2 items-center text-neutral-600'>
                    <span className='text-xs tracking-wide'><span className='text-neutral-800'>Name</span> - Rishav Raj</span>
                    <span className='text-xs tracking-wide'><span className='text-neutral-800'>Role</span> - Product Engineer</span>

                    <span className='text-xs tracking-wide'><span className='text-neutral-800'>Focus</span> - Exploration</span>
                    <span className='text-xs tracking-wide'><span className='text-neutral-800'>Profile Visits</span> - 928 views</span>

                    <span className='text-xs tracking-wide'><span className='text-neutral-800'>Location</span> - Patna, Bihar</span>
                    <span className='text-xs tracking-wide'><span className='text-neutral-800'>Interests</span> - Design, AI, Systems</span>

                    <span className='text-xs tracking-wide col-span-2'>19 y/o Polymath learning human things.</span>
                </div>
                <div className='h-24 w-12 flex justify-end items-start'>
                    <button className='top-0 left-0 h-6 w-6 flex items-center justify-center text-neutral-600 hover:cursor-pointer'>
                        <Sun size={16} />
                    </button>
                </div>
            </div>

            <div className='flex items-center justify-center bg-neutral-50 text-neutral-600 px-3 mx-px z-10 h-36 border-b border-dashed border-neutral-400'>
                <GitHubCalendar fontSize={11} blockRadius={1} colorScheme='light' blockMargin={2.2} blockSize={8.1} username='rishavvrajj' />
            </div>

            <div className='grid grid-cols-2 bg-neutral-50 text-neutral-600 p-3 mx-px z-10 h-52 border-b border-dashed border-neutral-400 gap-3'>
                <div className="flex h-full w-full flex-col rounded-sm border border-neutral-300 p-2">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-sm">
                        <img
                            src="/card-1.png"
                            alt="Profile"
                            className="object-cover h-full w-full rounded-md border border-neutral-300"
                        />
                    </div>

                    <h1 className="mt-2 flex w-full items-center justify-between px-0.5 text-xs">
                        <span>Leuk</span>
                        <span className='flex items-center justify-center gap-1'><CircleDot className='text-green-600' size={8} />live</span>
                    </h1>
                </div>
                <div className="flex h-full w-full flex-col rounded-sm border border-neutral-300 p-2">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-sm">
                        <img
                            src="/card-2.png"
                            alt="Profile"
                            className="object-cover h-full w-full rounded-md border border-neutral-300"
                        />
                    </div>

                    <h1 className="mt-2 flex w-full items-center justify-between px-0.5 text-xs">
                        <span>Comming Soon</span>
                        <span className='flex items-center justify-center gap-1'><CircleDot className='text-red-600' size={8} />Building</span>
                    </h1>
                </div>
            </div>

            <div className='flex gap-4 bg-neutral-50 text-neutral-600 p-3 mx-px z-10 h-38 border-b border-dashed border-neutral-400'>
                <div className='flex h-full w-full items-center justify-between'>
                    <div className='flex flex-col items-start justify-between h-full'>
                        <h1 className='text-start w-full text-sm'>
                            [ extra ]
                        </h1>
                        <p className='text-xs'>
                            @ rishavvrajj
                        </p>
                    </div>
                    <div className='w-4/5 h-full flex flex-col items-start justify-between text-sm'>
                        <p className='text-xs'>I use analysis, design, and engineering to build simple tools. Staying warm with coffee, chess, music, and sketching.</p>
                        <p className='space-x-2 text-end w-full underline'><span>x</span><span>github</span><span>linkedin</span></p>
                    </div>
                </div>
                <div className='flex items-end justify-end h-full w-fit'>
                    <div className='flex items-center justify-center h-32 w-32'>
                        <Image
                            src='/cta.png'
                            alt='profile'
                            width={256}
                            height={256}
                            className='object-cover'
                        />
                    </div>
                </div>
            </div>

            <div className='h-12'>

            </div>
        </div>
    )
}
