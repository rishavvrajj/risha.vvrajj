import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const SWITCH_THEME = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button onClick={SWITCH_THEME} className='top-0 left-0 h-4 w-4 relative items-center justify-center text-neutral-600 dark:text-neutral-400 hover:cursor-pointer hover:rotate-12 transition-transform duration-200'>
      <Sun size={16} className='absolute dark:scale-0 dark:rotate-45 inset-0 w-full h-full transition-all duration-300' />
      <Moon size={12} className='absolute scale-0 dark:scale-100 inset-0 w-full h-full transition-all duration-300' />
    </button>
  )
}