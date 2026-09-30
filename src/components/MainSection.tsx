'use client'

import { CircleDot, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'

export default function MainSection() {

    const [visitors, setVisitors] = useState<number | null>(null);

    useEffect(() => {
        fetch("/api/visitors")
            .then((res) => res.json())
            .then((data) => setVisitors(Number(data.visitors)))
            .catch(() => setVisitors(null));
    }, [])

    
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const SWITCH_THEME = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }

    const isDark = mounted && resolvedTheme === 'dark';

    return (
        <div className="h-full w-full">

            <div className="relative h-28 sm:h-36 w-full overflow-hidden border-x border-neutral-400/30 dark:border-neutral-700/30">
                {mounted && (
                    <Image src={isDark ? "/dark-background.png" : "/light-background.png"}
                        alt="Background"
                        fill
                        priority
                        quality={100}
                        sizes="(max-width: 576px) 100vw, 36rem"
                        className="object-cover"
                    />
                )}
                {!mounted && (
                    <Image src="/light-background.png"
                        alt="Background"
                        fill
                        priority
                        quality={100}
                        sizes="(max-width: 576px) 100vw, 36rem"
                        className="object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-radial from-transparent via-transparent to-white/20 dark:to-neutral-900/20" />
            </div>

            <div className='px-2 bg-neutral-50 dark:bg-neutral-900 h-26 sm:h-32 border border-dashed border-neutral-400 dark:border-neutral-700 flex items-center justify-center gap-4 sm:gap-8'>
                <div className='flex items-center justify-center bg-neutral-200/40 dark:bg-neutral-800/40 h-18 sm:h-24 w-18 sm:w-24 p-1 rounded-lg border border-dashed border-neutral-400 dark:border-neutral-700'>
                    {mounted && (
                        <Image
                            src={isDark ? "/dark-profile.png" : "/light-profile.png"}
                            alt="profile"
                            width={96}
                            height={96}
                            className='object-cover rounded-md border border-dashed border-neutral-400 dark:border-neutral-700 hover:opacity-90 transition-opacity duration-200 cursor-default'
                        />
                    )}
                    {!mounted && (
                        <Image
                            src="/light-profile.png"
                            alt="profile"
                            width={96}
                            height={96}
                            className='object-cover rounded-md border border-dashed border-neutral-400 dark:border-neutral-700'
                        />
                    )}
                </div>
                <div className='h-18 sm:h-24 w-4/6 sm:w-3/5 grid grid-cols-2 items-center text-neutral-600 dark:text-neutral-400'>
                    <span className='text-[8.4px] sm:text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Name</span> - Rishav Raj</span>
                    <span className='text-[8.4px] sm:text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Role</span> - Product Engineer</span>

                    <span className='text-[8.4px] sm:text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Focus</span> - Exploration</span>
                    <span className='text-[8.4px] sm:text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Profile Visits</span> - {visitors === null ? "loading..." : visitors} views</span>

                    <span className='text-[8.4px] sm:text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Location</span> - Patna, Bihar</span>
                    <span className='text-[8.4px] sm:text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Interests</span> - Design, AI, Systems</span>

                    <span className='text-[8.4px] sm:text-xs tracking-wide col-span-2'>19 y/o Polymath learning human things.</span>
                </div>
                <div className='h-18 sm:h-24 w-3 sm:w-12 flex justify-end items-start'>
                    <button onClick={SWITCH_THEME} className='top-0 left-0 h-4 w-4 relative items-center justify-center text-neutral-600 dark:text-neutral-400 hover:cursor-pointer hover:rotate-12 transition-transform duration-200'>
                        <Sun size={16} className='absolute dark:scale-0 dark:rotate-45 inset-0 w-full h-full transition-all duration-300' />
                        <Moon size={12} className='absolute scale-0 dark:scale-100 inset-0 w-full h-full transition-all duration-300' />
                    </button>
                </div>
            </div>

            <div className='flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 p-3 h-32 sm:h-36 border-x border-dashed border-neutral-400 dark:border-neutral-700'>
                {mounted ? (
                    <GitHubCalendar
                        fontSize={11}
                        blockRadius={1}
                        colorScheme={isDark ? 'dark' : 'light'}
                        blockMargin={2.2}
                        blockSize={8.1}
                        username='rishavvrajj'
                        theme={{
                            light: ["#f0f0f0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                            dark: ["#242424", "#0e4429", "#006d32", "#26a641", "#39d353"],
                        }}
                    />) : null
                }
            </div>

            <div className='grid grid-cols-2 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 p-3 h-full sm:h-52 border border-dashed border-neutral-400 dark:border-neutral-700 gap-3'>
                <div className="group flex h-full w-full flex-col rounded-sm border border-neutral-300 dark:border-neutral-700 p-2 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors duration-200 cursor-pointer">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-sm">
                        <img
                            src="/card-1.png"
                            alt="Profile"
                            className="object-cover group-hover:scale-[1.05] transition-transform duration-300 h-full w-full rounded-md border border-neutral-300 dark:border-neutral-700"
                        />
                    </div>

                    <h1 className="px-0.5 mt-2 flex w-full items-center justify-between text-xs text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-200">
                        <span>Leuk</span>
                        <span className='flex items-center justify-center gap-1'><CircleDot className='text-green-600' size={8} />live</span>
                    </h1>
                </div>
                <div className="group flex h-full w-full flex-col rounded-sm border border-neutral-300 dark:border-neutral-700 p-2 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors duration-200 cursor-pointer">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-sm">
                        <img
                            src="/card-2.png"
                            alt="Profile"
                            className="object-cover group-hover:scale-[1.05] transition-transform duration-300 h-full w-full rounded-md border border-neutral-300 dark:border-neutral-700"
                        />
                    </div>

                    <h1 className="px-0.5 mt-2 flex w-full items-center justify-between text-xs text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-200">
                        <span>Comming Soon</span>
                        <span className='flex items-center justify-center gap-1'><CircleDot className='text-red-600' size={8} />Building</span>
                    </h1>
                </div>
            </div>

            <div className='flex gap-4 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 p-3 h-24 sm:h-38 border-x border-b border-dashed border-neutral-400 dark:border-neutral-700'>
                <div className='flex h-full w-full items-center justify-between'>
                    <div className='flex flex-col items-start justify-between h-full'>
                        <h1 className='text-start w-full text-[8px] sm:text-sm'>
                            [ extra ]
                        </h1>
                        <p className='text-[8px] sm:text-xs leading-3'>
                            @ rishavvrajj
                        </p>
                    </div>
                    <div className='leading-3 w-4/5 h-full flex flex-col items-start justify-between  text-[8px] sm:text-sm'>
                        <p className='text-[8px] sm:text-xs'>I use analysis, design, and engineering to build simple tools. Staying warm with coffee, chess, music, and sketching.</p>
                        <p className='space-x-3 text-end w-full'>
                            <a href="https://x.com/rishavvrajj" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:underline hover:text-black dark:hover:text-white transition-all duration-150">x</a>
                            <a href="https://github.com/rishavvrajj" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:underline hover:text-black dark:hover:text-white transition-all duration-150">github</a>
                            <a href="https://www.linkedin.com/in/rishavv-rajj" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:underline hover:text-black dark:hover:text-white transition-all duration-150">linkedin</a>
                        </p>
                    </div>
                </div>
                <div className='flex items-end justify-end h-full w-fit'>
                    <div className='flex items-center justify-center h-18 w-18 sm:h-32 sm:w-32'>
                        {mounted && (
                            <Image
                                src={isDark ? "/dark-cta.png" : "/light-cta.png"}
                                alt='profile'
                                width={256}
                                height={256}
                                className='object-cover'
                            />
                        )}
                        {!mounted && (
                            <Image
                                src="/light-cta.png"
                                alt='profile'
                                width={256}
                                height={256}
                                className='object-cover'
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className='h-12'></div>
        </div>
    )
}