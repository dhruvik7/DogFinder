import React from "react";
import DogImage from "./DogImage";
import "./gallery.css";
import getStore from "../store/store";
import "../store/orchestrators";
import { getDogs } from "../store/actions";
import { observer } from "mobx-react";
import InfiniteScroll from "react-infinite-scroller";

class DogGallery extends React.Component {
  async componentDidMount() {
    await getDogs();
  }

  render() {
    const content = getStore().curr.map(url => (
      <li>
        <DogImage src={url} />
      </li>
    ));
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={getDogs}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <ul className="gallery">{content}</ul>
      </InfiniteScroll>
    );
  }
}

export default observer(DogGallery);
