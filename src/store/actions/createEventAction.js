import * as actions from "./actionTypes";

export const triggerCreateEvent = () => ({
  type: actions.TRIGGER_CREATE_EVENT,
});

export const createEvent = (data) => ({
  type: actions.CREATE_EVENT,
  event: data,
});

export const createEventFail = (error) => ({
  type: actions.CREATE_EVENT_FAIL,
  error,
});

export const doCreateEvent = (data) => {
  return (dispatch) => {
    dispatch(triggerCreateEvent());
    try {
      //here we can do some API call e.g. axios.post('url', data)
      dispatch(createEvent(data));
    } catch (error) {
      console.log("Error: ", error);
      dispatch(createEventFail(error));
    }
  };
};
