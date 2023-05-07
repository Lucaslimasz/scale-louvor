import { getTitlePositionScale } from "@/utils/get-title-position-scale";
import { getDayWeek } from "@/utils/get-week-day";
import Link from "next/link";

import dataJson from "../../data.json";
import { useEffect, useState } from "react";

interface IData {
  date: String;
  scales: { name: String; position: String }[];
}

export default function FullScale() {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    const map = new Map();

    for (const item of dataJson) {
      for (const scales in item.scales) {
        const id = item.id;
        const scale = item.scales[scales];
        const { position, date } = scale;
        const name = item.name;
        if (map.has(date)) {
          const value = map.get(date);
          map.set(date, [...value, { name, position }]);
        } else {
          map.set(date, [{ name, position }]);
        }
      }
    }

    const newArray = Array.from(map).map(([keys, items]) => ({
      date: keys,
      scales: items,
    }));

    setData(newArray);
  }, []);

  const order = data.sort((a, b) => {
    return Number(a.date.split('/')[1]) - Number(b.date.split('/')[1]);
  })

  return (
    <main className="min-h-screen max-w-5xl pt-16 pb-28 px-4">
      <Link
        href="/"
        className="bg-gradient-to-r from-orange-600 to-blue-600 py-2 px-8 text-lg font-semibold"
      >
        Voltar
      </Link>
      <div className="grid md:grid-cols-3 mt-10  gap-8">
        {order.map((item) => (
          <div key={Math.random()} className="border-2 w-full">
            <h1 className="bg-orange-600 py-3 px-4 font-bold flex items-center justify-between">
              <b className="text-xl">{getDayWeek(item.date)}</b>
              <p>Dia {item.date.split("/")[1]}</p>
            </h1>
            {item.scales.map((obj) => (
              <p
                key={Math.random()}
                className="bg-violet-700 border-b-2 py-2 px-4 text-lg"
              >
                {obj.position} | <b>{obj.name}</b>
              </p>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
