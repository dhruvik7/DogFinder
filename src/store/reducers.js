const initialState = {
  pics: new Set(),
  breed: "All"
};

function dogGallery(state = initialState, action) {
  switch (action.type) {
    case "PICK_BREED":
      return Object.assign({}, state, { breed: action.breed });
    default:
      return state;
  }
}

export default dogGallery;
