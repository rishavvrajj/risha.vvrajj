import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full">
      <div className="max-w-xl z-0 absolute h-full w-full">
        <div className="absolute h-full w-full border-x border-dashed border-neutral-400" />
      </div>
      <div className="absolute inset-0 z-0 w-full">
        <div className="absolute top-36 w-full border-t border-dashed border-neutral-400" />
        <div className="absolute bottom-12 w-full border-t border-dashed border-neutral-400" />
      </div>
      <Pattern />
      <Pattern2 />
      <Pattern3 />
      <div className="max-w-xl w-full h-full z-10">
        <HeroSection />
      </div>
    </div>
  );
}

const Pattern = () => {
  return (
    <div className="absolute z-0 inset-0 m-auto bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-60" />
  )
}

const Pattern2 = () => {
  return (
    <div className="absolute z-0 inset-0 m-auto bg-[repeating-linear-gradient(270deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-60" />
  )
}

const Pattern3 = () => {
  return (
    <div className="absolute z-0 inset-0 m-auto bg-[repeating-linear-gradient(225deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-60" />
  )
}