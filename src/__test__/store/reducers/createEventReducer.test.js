import { createEventReducer } from "../../../store/reducers/createEventReducer";
import {
  TRIGGER_CREATE_EVENT,
  CREATE_EVENT,
  CREATE_EVENT_FAIL,
} from "../../../store/actions/actionTypes";

const testState = {
  response: null,
  error: null,
  isLoading: false,
};

test("should return default state", () => {
  const action = {
    type: TRIGGER_CREATE_EVENT,
  };

  const state = createEventReducer(testState, action);

  expect(state).toEqual({
    response: null,
    error: null,
    isLoading: true,
  });
});

test("should return state with the payload", () => {
  const data = {
    title: "test",
    description: "test desc.",
    category_id: 1,
    paid_event: true,
    event_fee: 100,
    reward: 200,
    date: "2020-11-21T20:15",
    duration: 2,
    coordinator: {
      email: "test@test.com",
      id: "1",
    },
  };

  const action = {
    type: CREATE_EVENT,
    event: data,
  };

  const state = createEventReducer(testState, action);

  expect(state).toEqual({
    response: action.event,
    isLoading: false,
    error: null,
  });
});

test("should return error state", () => {
  const error = "some error";

  const action = {
    type: CREATE_EVENT_FAIL,
    error,
  };

  const state = createEventReducer(testState, action);

  expect(state).toEqual({
    response: null,
    error: action.error,
    isLoading: false,
  });
});
