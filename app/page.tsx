import Image from "next/image";
import { Typewriter } from 'nextjs-simple-typewriter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-950 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:dark:bg-zinc-800/30">
        Callum
        <Typewriter words={[ 'Folio', '\'s Portfolio']}/> 
        </p>
      </div>
      <div className="mb-80 rounded-md lg:max-w-6xl min-h-12 bg-zinc-950 w-full h-full ">
        <h1 className="text-[50px] mt-8 ml-5">
          Hi, I&apos;m Callum
        </h1>
        <p className="mb-5 ml-5">
          I&apos;m an aspiring dev studying out of Sydney, Australia.
        </p>
      </div>
    </main>
    );
}
