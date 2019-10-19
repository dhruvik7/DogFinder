import { action } from "satcheljs";

export let pickBreed = action("pickBreed", breed => ({ breed }));
export let updateList = action("updateList");
export let getDogs = action("getDogs");
export let addPic = action("addPic", url => ({ url }));
