import { GitHubCalendar } from 'react-github-calendar'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function GitHubActivity() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
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
  )
}