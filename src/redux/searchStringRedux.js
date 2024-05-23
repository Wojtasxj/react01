
export const updateSearchString = (searchString) => ({
  type: 'UPDATE_SEARCHSTRING',
  payload: searchString
});

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case 'UPDATE_SEARCHSTRING':
        return action.payload
      default:
        return statePart;
    }
  }

export default searchStringReducer;