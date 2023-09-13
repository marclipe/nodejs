import { getArea } from "./service.js";

async function main() {
  try {
    const { data } = await getArea("");
    const cup = Object.values(data.competitions);

    const cups = cup.filter(function (value) {

      return value.type = "CUP";
    });

    console.log(cups);
  } catch(error) {
    console.error("ERROR BRO", error)
  }
}
main()