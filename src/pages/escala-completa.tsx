import { getDayWeek } from "@/utils/get-week-day";
import Link from "next/link";

export default function FulllScale() {
  const data = [
    {
      id: "1",
      date: "04/05/2023",
      scale: {
        "🎙️ MINISTRANTE": "Leticia",
        "🎙️ APOIO": "Augusto",
        "🎸 VIOLÃO": "Lucas",
        "🎸 GUITARRA": "Jhon",
        "🎸 BAIXO": "Isaque",
        "🥁 BATERIA": "Caique",
        "🎛️ SONOPLASTA": "Carlos",
      },
    },
    {
      id: "2",
      date: "06/05/2023",
      scale: {
        "🎙️ MINISTRANTE": "Augusto",
        "🎙️ APOIO": "Rebeca",
        "🎸 VIOLÃO": "Elizandra",
        "🎸 BAIXO": "Isaque",
        "🥁 BATERIA": "Caique",
      },
    },
    {
      id: "3",
      date: "07/05/2023",
      scale: {
        "🎙️ MINISTRANTE": "Menesteu",
        "🎙️ APOIO": "Rayane",
        "🎸 VIOLÃO": "Elizandra",
        "🎸 GUITARRA": "Jhon",
        "🎸 BAIXO": "Isaque",
        "🥁 BATERIA": "Caique",
        "🎛️ SONOPLASTA": "Jhonne",
      },
    },
    {
      id: "4",
      date: "11/05/2023",
      scale: {
        "🎙️ MINISTRANTE": "Pra. Mayne",
        "🎙️ APOIO": "Lucas",
        "🎸 VIOLÃO": "Lucas",
        "🎸 GUITARRA": "Jhon",
        "🎸 BAIXO": "Isaque",
        "🥁 BATERIA": "Caique",
        "🎛️ SONOPLASTA": "Carlos",
      },
    },
    {
      id: "5",
      date: "13/05/2023",
      scale: {
        "🎙️ MINISTRANTE": "Rayane",
        "🎙️ APOIO": "Augusto",
        "🎸 VIOLÃO": "Elizandra",
        "🎸 BAIXO": "Isaque",
        "🥁 BATERIA": "Caique",
      },
    },
    {
      id: "6",
      date: "14/05/2023",
      scale: {
        "🎙️ MINISTRANTE": "Menesteu",
        "🎙️ APOIO": "Rebeca",
        "🎸 VIOLÃO": "Lucas",
        "🎸 GUITARRA": "Jhon",
        "🎸 BAIXO": "Isaque",
        "🥁 BATERIA": "Caique",
        "🎛️ SONOPLASTA": "Jhonne",
      },
    },
    {
      id: "7",
      date: "18/05/2023",
      scale: {
        "🎙️ MINISTRANTE": "Leticia",
        "🎙️ APOIO": "Augusto",
        "🎸 VIOLÃO": "Lucas",
        "🎸 GUITARRA": "Jhon",
        "🎸 BAIXO": "Isaque",
        "🥁 BATERIA": "Caique",
        "🎛️ SONOPLASTA": "Carlos",
      },
    },
    {
      id: "8",
      date: "20/05/2023",
      scale: {
        "🎙️ MINISTRANTE": "Rebeca",
        "🎙️ APOIO": "Augusto",
        "🎸 VIOLÃO": "Elizandra",
        "🎸 BAIXO": "Isaque",
        "🥁 BATERIA": "Caique",
      },
    },
    {
      id: "9",
      date: "21/05/2023",
      scale: {
        "🎙️ MINISTRANTE": "Pra. Mayne",
        "🎙️ APOIO": "Menesteu",
        "🎸 VIOLÃO": "Lucas",
        "🎸 GUITARRA": "Jhon",
        "🎸 BAIXO": "Isaque",
        "🥁 BATERIA": "Caique",
        "🎛️ SONOPLASTA": "Jhonne",
      },
    },
    {
      id: "10",
      date: "25/05/2023",
      scale: {
        "🎙️ MINISTRANTE": "Lucas",
        "🎙️ APOIO": "Rebeca",
        "🎸 VIOLÃO": "Lucas",
        "🎸 GUITARRA": "Jhon",
        "🎸 BAIXO": "Isaque",
        "🥁 BATERIA": "Caique",
        "🎛️ SONOPLASTA": "Jhonne",
      },
    },
    {
      id: "11",
      date: "27/05/2023",
      scale: {
        "🎙️ MINISTRANTE": "Rebeca",
        "🎙️ APOIO": "Augusto",
        "🎸 VIOLÃO": "Elizandra",
        "🎸 BAIXO": "Isaque",
        "🥁 BATERIA": "Caique",
      },
    },
    {
      id: "11",
      date: "28/05/2023",
      scale: {
        "🎙️ MINISTRANTE": "Menesteu",
        "🎙️ APOIO": "Rayane",
        "🎸 VIOLÃO": "Elizandra",
        "🎸 GUITARRA": "Jhon",
        "🎸 BAIXO": "Isaque",
        "🥁 BATERIA": "Caique",
        "🎛️ SONOPLASTA": "Jhonne",
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
            {Object.entries(item.scale).map(([key, obj]) => (
              <p
                key={key}
                className="bg-violet-700 border-b-2 py-2 px-4 text-lg"
              >
                {key} | <b>{obj}</b>
              </p>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
