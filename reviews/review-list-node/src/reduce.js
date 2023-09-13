import { getArea } from "./service.js";

async function main() {
  try {
    const { data } = await getArea("");
    const names = Object.values(data);

    const total = names.reduce(function (accumulator, currentValue) {
      return currentValue;
    }, 0);
    console.log(total);
  } catch (error) {
    console.error("ERROR", error)
  }
}

main()