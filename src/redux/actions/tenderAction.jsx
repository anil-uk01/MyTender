export const ADD_TENDER = 'ADD_TENDER';
export const REMOVE_TENDER = 'REMOVE_TENDER';

export const addTender = tender => ({
  type: ADD_TENDER,
  payload: tender,
});

export const removeTender = id => ({
  type: REMOVE_TENDER,
  payload: id,
});
