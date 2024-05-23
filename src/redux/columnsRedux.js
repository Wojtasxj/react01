import shortid from "shortid";

// selectors

export const getAllColumns = state => state.columns;
export const getColumnsByList = (state, listId) => {
  return state.columns.filter(column => column.listId === listId);
};

// actions
const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');


export const addColumn = ({ title, icon, listId }) => ({ type: ADD_COLUMN, payload: { title, icon, listId } });
const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_COLUMN':
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
  }

export default columnsReducer;