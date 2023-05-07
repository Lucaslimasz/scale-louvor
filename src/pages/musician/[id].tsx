import Image from "next/image";
import Link from "next/link";

import data from "../../../data.json";
import { GetServerSideProps } from "next";

interface IUser {
  user: {
    id: String;
    name: String;
    photo: String;
    scales: {
      id: String;
      date: String;
      position: String;
    }[];
  };
}

export default function Musician({ user }: IUser) {
  const date = new Date();

  const validateDate = (dateNow: Date, dateScale: string) => {
    const scaleDate = new Date(dateScale);
    const isPastDate = scaleDate > dateNow;
    const isSameDate = scaleDate.getDate() === dateNow.getDate();

    if (isSameDate) {
      return "bg-yellow-500";
    }

    return isPastDate ? "bg-lime-600" : "bg-red-700";
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-20 max-w-5xl">
      <Image
        src={String(user.photo)}
        alt="Lucas Lima"
        width={120}
        height={120}
        className="mb-5 border-4 rounded-full border-orange-500	 md:w-44"
      />
      <h1 className="font-semibold text-3xl">{user.name}</h1>
      <div className="grid mt-10 w-full px-5 gap-1 md:grid-cols-2 md:px-10 md:gap-2">
        {user.scales.map((info) => {
          return (
            <div key={info.id.toString()} className="flex min-w-full">
              <p
                className={`text-xl p-4 ${validateDate(
                  date,
                  String(info.date)
                )} w-20 flex items-center justify-center`}
              >
                {info.date.split("/")[1]}
              </p>
              <b className="text-xl bg-stone-300 p-4 w-full text-black">
                {info.position}
              </b>
            </div>
          );
        })}
      </div>

      <Link
        href="/"
        className="mt-20 mb-10 bg-gradient-to-r from-orange-600 to-blue-600 py-2 px-8 text-lg font-semibold"
      >
        Voltar
      </Link>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  const [user] = data.filter((item) => item.id === id);

  return {
    props: {
      user,
    },
  };
};
