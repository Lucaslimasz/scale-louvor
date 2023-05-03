import { getTitlePositionScale } from "@/utils/get-title-position-scale";
import { getDayWeek } from "@/utils/get-week-day";
import Link from "next/link";

export default function FullScale() {
  const data = [
    {
      id: "1",
      date: "04/05/2023",
      scale: {
        minister: "Leticia",
        support: "Augusto",
        guitar: "Lucas",
        guitarEletric: "Jhon",
        down: "Isaque",
        drum: "Caique",
        soundEngineer: "Carlos",
      },
    },
    {
      id: "2",
      date: "06/05/2023",
      scale: {
        minister: "Augusto",
        support: "Rebeca",
        guitar: "Elizandra",
        down: "Isaque",
        drum: "Caique",
      },
    },
    {
      id: "3",
      date: "07/05/2023",
      scale: {
        minister: "Menesteu",
        support: "Rayane",
        guitar: "Elizandra",
        guitarEletric: "Jhon",
        down: "Isaque",
        drum: "Caique",
        soundEngineer: "Jhonne",
      },
    },
    {
      id: "4",
      date: "11/05/2023",
      scale: {
        minister: "Pra. Mayne",
        support: "Lucas",
        guitar: "Lucas",
        guitarEletric: "Jhon",
        down: "Isaque",
        drum: "Caique",
        soundEngineer: "Carlos",
      },
    },
    {
      id: "5",
      date: "13/05/2023",
      scale: {
        minister: "Rayane",
        support: "Augusto",
        guitar: "Elizandra",
        down: "Isaque",
        drum: "Caique",
      },
    },
    {
      id: "6",
      date: "14/05/2023",
      scale: {
        minister: "Menesteu",
        support: "Rebeca",
        guitar: "Lucas",
        guitarEletric: "Jhon",
        down: "Isaque",
        drum: "Caique",
        soundEngineer: "Jhonne",
      },
    },
    {
      id: "7",
      date: "18/05/2023",
      scale: {
        minister: "Leticia",
        support: "Augusto",
        guitar: "Lucas",
        guitarEletric: "Jhon",
        down: "Isaque",
        drum: "Caique",
        soundEngineer: "Carlos",
      },
    },
    {
      id: "8",
      date: "20/05/2023",
      scale: {
        minister: "Rebeca",
        support: "Augusto",
        guitar: "Elizandra",
        down: "Isaque",
        drum: "Caique",
      },
    },
    {
      id: "9",
      date: "21/05/2023",
      scale: {
        minister: "Pra. Mayne",
        support: "Menesteu",
        guitar: "Lucas",
        guitarEletric: "Jhon",
        down: "Isaque",
        drum: "Caique",
        soundEngineer: "Jhonne",
      },
    },
    {
      id: "10",
      date: "25/05/2023",
      scale: {
        minister: "Lucas",
        support: "Rebeca",
        guitar: "Lucas",
        guitarEletric: "Jhon",
        down: "Isaque",
        drum: "Caique",
        soundEngineer: "Jhonne",
      },
    },
    {
      id: "11",
      date: "27/05/2023",
      scale: {
        minister: "Rebeca",
        support: "Augusto",
        guitar: "Elizandra",
        down: "Isaque",
        drum: "Caique",
      },
    },
    {
      id: "11",
      date: "28/05/2023",
      scale: {
        minister: "Menesteu",
        support: "Rayane",
        guitar: "Elizandra",
        guitarEletric: "Jhon",
        down: "Isaque",
        drum: "Caique",
        soundEngineer: "Jhonne",
      },
    },
  ];

  return (
    <main className="min-h-screen max-w-5xl pt-16 pb-28 px-4">
      <Link
        href="/"
        className="bg-gradient-to-r from-orange-600 to-blue-600 py-2 px-8 text-lg font-semibold"
      >
        Voltar
      </Link>
      <div className="grid md:grid-cols-3 mt-10  gap-8">
        {data.map((item) => (
          <div key={item.id} className="border-2 w-full">
            <h1 className="bg-orange-600 py-3 px-4 font-bold flex items-center justify-between">
              <b className="text-xl">{getDayWeek(item.date)}</b>
              <p>{item.date}</p>
            </h1>
            {Object.entries(item.scale).map(([key, obj]: any) => (
              <p
                key={key}
                className="bg-violet-700 border-b-2 py-2 px-4 text-lg"
              >
                {getTitlePositionScale(key)} | <b>{obj}</b>
              </p>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
