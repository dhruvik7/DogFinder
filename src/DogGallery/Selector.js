import React from "react";
import "./gallery.css";
import breeds from "./breeds";
import getStore from "../store/store";
import { pickBreed, updateList } from "../store/actions";
import { observer } from "mobx-react";
import "../store/mutators";
import { Dropdown } from "semantic-ui-react";

class Selector extends React.Component {
  render() {
    const content = breeds.map(breed => <option>{breed}</option>);
    const semanticContent = breeds.map(breed => ({ key: breed, text: breed }));
    console.log(getStore().breed);
    return (
      <div>
        <select
          value={getStore().breed}
          onChange={event => {
            pickBreed(event.target.value);
            updateList();
          }}
        >
          {content}
        </select>
        <Dropdown placeholder="All" options={semanticContent} />
      </div>
    );
  }
}

export default observer(Selector);
