import Image from 'next/image'

import derp from "~/public/derp.webp";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] bg-zinc-50 dark:bg-zinc-950 flex-col items-center justify-center p-24">
      <Image src={derp} alt="A picture of me" priority />
    </main>
  );
}
