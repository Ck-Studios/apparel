export const SEARCH_INPUT_OPENED = 'SEARCH_INPUT_OPENED';
export const SEARCH_INPUT_CLOSED = 'SEARCH_INPUT_CLOSED';

export function openSearchInput() {
  return {
    type: SEARCH_INPUT_OPENED,
  }
}

export function closeSearchInput() {
  return {
    type: SEARCH_INPUT_CLOSED,
  }
}
