import shortid from "shortid";
import strContains from "../utils/strContains";

// selectors

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getFavoriteCards = ({ cards }) => cards.filter(card => card.isFavorite);

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

// action creators
export const addCard = payload => ({
  type: ADD_CARD,
  payload: { ...payload, isFavorite: false },
});
export const toggleCardFavorite = (id) => ({
  type: TOGGLE_CARD_FAVORITE,
  payload: id,
});
export const removeCard = id => ({
    type: REMOVE_CARD,
    payload: id,
});
const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid() }];
      case REMOVE_CARD:
        return statePart.filter(card => card.id !== action.payload);
      case TOGGLE_CARD_FAVORITE:
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      default:
        return statePart;
    }
  }

export default cardsReducer;