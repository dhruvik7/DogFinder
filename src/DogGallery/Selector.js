import React from "react";
import "./gallery.css";
import breeds from "./breeds";
import getStore from "../store/store";
import { pickBreed, updateList } from "../store/actions";
import { observer } from "mobx-react";
import "../store/mutators";

class Selector extends React.Component {
  render() {
    const content = breeds.map(breed => <option>{breed}</option>);
    console.log(getStore().breed);
    return (
      <select
        value={getStore().breed}
        onChange={event => {
          pickBreed(event.target.value);
          updateList();
        }}
      >
        {content}
      </select>
    );
  }
}

export default observer(Selector);
