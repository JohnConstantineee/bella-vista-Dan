const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];
const clientBase = clients1.concat(clients2)
const processedBase = [...new Set(clientBase)];
// const processedBase = Array.from(new Set(clientBase));
console.log(processedBase);