'use client'

import { CircleDot, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'

export default function MainSection() {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const SWITCH_THEME = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const isDark = mounted && theme === 'dark';

    return (
        <div className="h-full w-full">

            <div className="relative h-36 w-full overflow-hidden border-x border-neutral-400/30 dark:border-neutral-700/30">
                {mounted && (
                    <Image src={isDark ? "/dark-background.png" : "/light-background.png"}
                        alt="Background"
                        fill
                        priority
                        quality={100}
                        sizes="100vw"
                        className="object-cover"
                    />
                )}
                {!mounted && (
                    <Image src="/light-background.png"
                        alt="Background"
                        fill
                        priority
                        quality={100}
                        sizes="100vw"
                        className="object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-radial from-transparent via-transparent to-white/20 dark:to-neutral-900/20" />
            </div>

            <div className='bg-neutral-50 dark:bg-neutral-900 h-32 border border-dashed border-neutral-400 dark:border-neutral-700 flex items-center justify-center gap-8'>
                <div className='flex items-center justify-center bg-neutral-200/40 dark:bg-neutral-800/40 h-24 w-24 p-1 rounded-lg border border-dashed border-neutral-400 dark:border-neutral-700'>
                    {mounted && (
                        <Image
                            src={isDark ? "/dark-profile.png" : "/light-profile.png"}
                            alt="profile"
                            width={96}
                            height={96}
                            className='object-cover rounded-md border border-dashed border-neutral-400 dark:border-neutral-700'
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
                <div className='h-24 w-3/5 grid grid-cols-2 items-center text-neutral-600 dark:text-neutral-400'>
                    <span className='text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Name</span> - Rishav Raj</span>
                    <span className='text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Role</span> - Product Engineer</span>

                    <span className='text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Focus</span> - Exploration</span>
                    <span className='text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Profile Visits</span> - 928 views</span>

                    <span className='text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Location</span> - Patna, Bihar</span>
                    <span className='text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Interests</span> - Design, AI, Systems</span>

                    <span className='text-xs tracking-wide col-span-2'>19 y/o Polymath learning human things.</span>
                </div>
                <div className='h-24 w-12 flex justify-end items-start'>
                    <button onClick={SWITCH_THEME} className='top-0 left-0 h-6 w-6 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:cursor-pointer'>
                        <Sun size={16} />
                    </button>
                </div>
            </div>

            <div className='flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 p-3 h-36 border-x border-dashed border-neutral-400 dark:border-neutral-700'>
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

            <div className='grid grid-cols-2 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 p-3 h-52 border border-dashed border-neutral-400 dark:border-neutral-700 gap-3'>
                <div className="flex h-full w-full flex-col rounded-sm border border-neutral-300 dark:border-neutral-700 p-2">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-sm">
                        <img
                            src="/card-1.png"
                            alt="Profile"
                            className="object-cover h-full w-full rounded-md border border-neutral-300 dark:border-neutral-700"
                        />
                    </div>

                    <h1 className="px-0.5 mt-2 flex w-full items-center justify-between px-0.5 text-xs">
                        <span>Leuk</span>
                        <span className='flex items-center justify-center gap-1'><CircleDot className='text-green-600' size={8} />live</span>
                    </h1>
                </div>
                <div className="flex h-full w-full flex-col rounded-sm border border-neutral-300 dark:border-neutral-700 p-2">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-sm">
                        <img
                            src="/card-2.png"
                            alt="Profile"
                            className="object-cover h-full w-full rounded-md border border-neutral-300 dark:border-neutral-700"
                        />
                    </div>

                    <h1 className="px-0.5 mt-2 flex w-full items-center justify-between px-0.5 text-xs">
                        <span>Comming Soon</span>
                        <span className='flex items-center justify-center gap-1'><CircleDot className='text-red-600' size={8} />Building</span>
                    </h1>
                </div>
            </div>

            <div className='flex gap-4 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 p-3 h-38 border-x border-b border-dashed border-neutral-400 dark:border-neutral-700'>
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
