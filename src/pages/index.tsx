import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

import users from '../../data.json'

export default function Home() {

  return (
    <main
      className={`flex min-h-screen flex-col justify-center items-center px-10 ${inter.className} `}
    >
      <h1 className="font-semibold text-3xl">Seja bem vindo</h1>
      <p className="font-medium pt-2">Escolha o seu perfil</p>
      <div className="flex flex-wrap items-center justify-center gap-5 pt-10 md:gap-10">
        {users.map((user) => (
          <button key={user.id} className="flex flex-col items-center gap-2">
            <Link href={`musician/${user.id}`}>
              <Image
                src={user.photo}
                alt="Lucas Lima"
                width={120}
                height={120}
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
