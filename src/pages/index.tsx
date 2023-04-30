import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

import users from '../../data.json'

export default function Home() {

  return (
    <main
      className={`flex min-h-screen flex-col justify-center items-center px-10 py-24 ${inter.className} max-w-5xl`}
    >
      <b className="text-yellow-500 font-semibold text-5xl">Maio</b>
      <h1 className="font-semibold text-3xl pt-6 pb-8">🎧 Escala do louvor 🥁</h1>
      <p className="font-medium">Selecione o seu perfil <span className="px-3">|</span> <Link href="/fullScale">Escala completa</Link></p>
      <div className="flex flex-wrap items-center justify-center gap-5 pt-10 md:gap-10">
        {users.map((user) => (
          <button key={user.id} className="flex flex-col items-center gap-2">
            <Link href={`musician/${user.id}`}>
              <Image
                src={user.photo}
                alt="Lucas Lima"
                width={95}
                height={95}
                className="md:w-44"
              />
              <p className="text-zinc-400 pt-4">{user.name}</p>
            </Link>
          </button>
        ))}
      </div>
    </main>
  );
}
