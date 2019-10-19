import { pickBreed } from "./actions";
import { createStore } from "satcheljs";

let getStore = createStore("dogStore", {
  pics: new Set(),
  curr: [],
  breed: "All"
});

export default getStore;
