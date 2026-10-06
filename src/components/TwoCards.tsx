import { CircleDot } from 'lucide-react'

export default function TwoCards() {
  return (
    <div className='grid grid-cols-2 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 p-3 h-full sm:h-52 border border-dashed border-neutral-400 dark:border-neutral-700 gap-3'>
      <a href="https://leuk-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
        <div className="group flex h-full w-full flex-col rounded-sm border border-neutral-300 dark:border-neutral-700 p-2 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors duration-200 cursor-pointer">
          <div className="aspect-video w-full overflow-hidden rounded-sm">
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
      </a>
      <div className="group flex h-full w-full flex-col rounded-sm border border-neutral-300 dark:border-neutral-700 p-2 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors duration-200 cursor-pointer">
        <div className="aspect-video w-full overflow-hidden rounded-sm">
          <img
            src="/card-2.png"
            alt="Profile"
            className="object-cover group-hover:scale-[1.05] transition-transform duration-300 h-full w-full rounded-md border border-neutral-300 dark:border-neutral-700"
          />
        </div>

        <h1 className="px-0.5 mt-2 flex w-full items-center justify-between text-xs text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-200">
          <span>Coming Soon</span>
          <span className='flex items-center justify-center gap-1'><CircleDot className='text-red-600' size={8} />Building</span>
        </h1>
      </div>
    </div>
  )
}