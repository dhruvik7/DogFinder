import { orchestrator } from "satcheljs";
import Axios from "axios";
import { getDogs, addPic, updateList } from "./actions";
import "./mutators";

async function callApi() {
  const response = await Axios.get(
    "https://dog.ceo/api/breeds/image/random/10"
  );
  const urls = response.data.message;
  console.log(urls);
  urls.forEach(function(url) {
    addPic(url);
  });
  updateList();
}

orchestrator(getDogs, () => {
  callApi();
});
