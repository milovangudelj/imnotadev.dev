import { GithubLogo } from "~/components/GithubLogo";
import Image from "next/image";

import derp from "~/public/derp.webp";

export default function Home() {
  return (
    <main className="flex font-sans relative min-h-[100dvh] bg-zinc-50 text-zinc-950 dark:text-zinc-50 dark:bg-zinc-950 flex-col items-center justify-center p-24">
      <Image src={derp} alt="A picture of me" priority />
      <a
        href="https://github.com/milovangudelj"
        rel="noreferrer noopener"
        target="_blank"
        className="absolute bottom-4 right-4 inline-flex items-center gap-2 text-zinc-950 dark:text-zinc-50 opacity-40 hover:opacity-100"
      >
        <span>But he is →</span>
        <span>
          <GithubLogo size={16} />
        </span>
      </a>
    </main>
  );
}
