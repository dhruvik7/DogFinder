import { mutator } from "satcheljs";
import { pickBreed, updateList, addPic } from "./actions";
import getStore from "./store";

mutator(pickBreed, actionMessage => {
  getStore().breed = actionMessage.breed;
});

mutator(updateList, () => {
  getStore().curr = Array.from(getStore().pics).filter(
    pic =>
      pic.slice(30, 30 + getStore().breed.length) === getStore().breed ||
      getStore().breed === "All"
  );
});

mutator(addPic, actionMessage => {
  getStore().pics.add(actionMessage.url);
});
