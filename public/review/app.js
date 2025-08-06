import person from "./person";
import { baseData, clean } from "./utility";

console.log(person);
console.log(baseData);
clean();

window.clean = clean;
