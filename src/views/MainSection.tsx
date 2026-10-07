'use client'

import HeaderSection from '@/components/sections/HeaderSection'
import ProfileCard from '@/components/sections/ProfileCard'
import GitHubActivity from '@/components/sections/GitHubActivity'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import ExtraSection from '@/components/sections/ExtraSection'
import ProjectSection from '@/components/sections/ProjectSection'

export default function MainSection() {
  const [visitors, setVisitors] = useState<number | null>(null)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => setVisitors(Number(data.visitors)))
      .catch(() => setVisitors(null));
  }, [])

  const { resolvedTheme } = useTheme();
  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <div className="h-full w-full">
      <HeaderSection mounted={mounted} isDark={isDark} />
      <ProfileCard mounted={mounted} isDark={isDark} visitors={visitors} />
      <GitHubActivity />
      <ProjectSection />
      <ExtraSection mounted={mounted} isDark={isDark} />
      <div className='h-12'></div>
    </div>
  )
}