import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from './../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = state => state.columns;

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId)
export const getColumnsByList = (state, listId) => {
  return state.columns.filter(column => column.listId === listId);
};

export const getAllLists = (state) => state.lists;

// action creators
export const addColumn = ({ title, icon, listId }) => ({ type: 'ADD_COLUMN', payload: { title, icon, listId } });
export const addCard = payload => ({ type: 'ADD_CARD', payload: { ...payload, isFavorite: false }});
export const updateSearchString = (searchString) => ({
  type: 'UPDATE_SEARCHSTRING',
  payload: searchString
});
export const addList = ({ title, description }) => ({
  type: 'ADD_LIST',
  payload: { title, description }
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_COLUMN':
        return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
      case 'ADD_CARD':
        return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
      case 'UPDATE_SEARCHSTRING':
        return { ...state, searchString: action.payload };
      case 'ADD_LIST':
        return { ...state, lists: [...state.lists, { id: shortid(), ...action.payload }]};
      case 'TOGGLE_CARD_FAVORITE':
        return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
      default:
        return state;
    }
  };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;