import {ADD_TENDER, REMOVE_TENDER} from '../actions/tenderAction';
const initialState = {
  tenders: [],
};

const tenderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TENDER:
      return {...state, tenders: [...state.tenders, action.payload]};

    case REMOVE_TENDER:
      return {
        ...state,
        tenders: state.tenders.filter(tender => tender.id !== action.payload),
      };

    default:
      return state;
  }
};

export default tenderReducer;
