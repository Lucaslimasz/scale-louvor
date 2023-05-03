export const getTitlePositionScale = (type: String) => {
  const typesPosition = {
    minister: "🎙️ MINISTRANTE",
    support: "🎙️ APOIO",
    guitar: "🎸 VIOLÃO",
    guitarEletric: "🎸 GUITARRA",
    down: "🎸 BAIXO",
    drum: "🥁 BATERIA",
    soundEngineer: "🎛️ SONOPLASTA",
  };

  return typesPosition[type];
};
