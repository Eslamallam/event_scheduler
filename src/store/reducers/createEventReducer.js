import * as actions from "../actions/actionTypes";

const initialState = {
  response: null,
  error: null,
  isLoading: false,
};

export const createEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TRIGGER_CREATE_EVENT:
      return {
        ...state,
        isLoading: true,
        response: null,
        error: null,
      };
    case actions.CREATE_EVENT:
      return {
        ...state,
        isLoading: false,
        response: action.event,
        error: null,
      };
    case actions.CREATE_EVENT_FAIL:
      return {
        ...state,
        isLoading: false,
        response: null,
        error: action.error,
      };
    default:
      return { ...state };
  }
};
