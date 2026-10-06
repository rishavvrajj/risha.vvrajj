import Image from 'next/image'
import { Moon, Sun } from 'lucide-react'
import ThemeSwitcher from './ThemeSwitcher'

export default function ProfileCard({
  mounted,
  isDark,
  visitors
}: {
  mounted: boolean
  isDark: boolean
  visitors: number | null
}) {
  return (
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
        <span className='text-[8.4px] sm:text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Profile Visits</span> - {visitors === null ? "..." : visitors} views</span>

        <span className='text-[8.4px] sm:text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Location</span> - Patna, Bihar</span>
        <span className='text-[8.4px] sm:text-xs tracking-wide'><span className='text-neutral-800 dark:text-neutral-200'>Interests</span> - Design, AI, Systems</span>

        <span className='text-[8.4px] sm:text-xs tracking-wide col-span-2'>19 y/o Polymath learning human things.</span>

      </div>

      <div className='h-18 sm:h-24 w-3 sm:w-12 flex justify-end items-start'>
        <ThemeSwitcher />
      </div>
    </div>
  )
}