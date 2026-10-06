import Image from "next/image";

export default function HeaderSection({
  mounted,
  isDark
}: {
  mounted: boolean
  isDark: boolean
}) {
  return (
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
  )
}