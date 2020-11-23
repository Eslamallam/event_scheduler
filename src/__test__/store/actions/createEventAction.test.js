import {
  triggerCreateEvent,
  createEvent,
  createEventFail,
} from "../../../store/actions/createEventAction";

test("should trigger create event", () => {
  const action = triggerCreateEvent();

  expect(action).toEqual({
    type: "TRIGGER_CREATE_EVENT",
  });
});

test("should create event with provided data", () => {
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

  const action = createEvent(data);

  expect(action).toEqual({
    type: "CREATE_EVENT",
    event: data,
  });
});

test("should return error if create event failed", () => {
  const error = "exception happened";

  const action = createEventFail(error);

  expect(action).toEqual({
    type: "CREATE_EVENT_FAIL",
    error: error,
  });
});
