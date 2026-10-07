import Image from 'next/image'
import { Card } from '@/components/ui/Card'

export default function ExtraSection({
  mounted,
  isDark
}: {
  mounted: boolean
  isDark: boolean
}) {
  return (
    <Card className='flex gap-4 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 p-3 h-24 sm:h-38 border-x border-b border-dashed border-neutral-400 dark:border-neutral-700'>
      <Card.Content className='flex h-full w-full items-center justify-between'>
        <div className='flex flex-col items-start justify-between h-full'>
          <h1 className='text-start w-full text-[8px] sm:text-sm'>
            [ extra ]
          </h1>
          <p className='text-[8px] sm:text-xs'>
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
      </Card.Content>
      <Card.Media className='flex items-end justify-end h-full w-fit'>
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
      </Card.Media>
    </Card>
  )
}