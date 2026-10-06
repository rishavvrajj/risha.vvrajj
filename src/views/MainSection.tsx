'use client'

import HeaderSection from '@/components/HeaderSection'
import ProfileCard from '@/components/ProfileCard'
import GitHubActivity from '@/components/GitHubActivity'
import { CircleDot } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import TwoCards from '@/components/TwoCards'
import ExtraSection from '@/components/ExtraSection'

export default function MainSection() {
  const [visitors, setVisitors] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => setVisitors(Number(data.visitors)))
      .catch(() => setVisitors(null));
  }, [])

  useEffect(() => {
    setMounted(true);
  }, [])

  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <div className="h-full w-full">
      <HeaderSection mounted={mounted} isDark={isDark} />
      <ProfileCard mounted={mounted} isDark={isDark} visitors={visitors} />
      <GitHubActivity />
      <TwoCards />
      <ExtraSection mounted={mounted} isDark={isDark} />
      <div className='h-12'></div>
    </div>
  )
}