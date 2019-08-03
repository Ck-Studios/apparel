import {
  SEARCH_INPUT_OPENED,
  SEARCH_INPUT_CLOSED
} from "./Actions";

const initialState = {
  isOpenSearchInput: false,
};

export function HeaderReducer(state=initialState, action) {
  switch(action.type) {
    case SEARCH_INPUT_OPENED:
      return {...state, isOpenSearchInput: true};
    case SEARCH_INPUT_CLOSED:
      return {...state, isOpenSearchInput: false};
    default:
      return {...state};
  }
}
