const undoable = (reducer) => {
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: [],
  };

  return (state = initialState, action) => {
    const { past, present, future } = state;

    switch (action.type) {
      case "UNDO":
        if (past.length === 0) return state;
        const previous = past[past.length - 1];
        return {
          past: past.slice(0, past.length - 1),
          present: previous,
          future: [present, ...future],
        };

      case "REDO":
        if (future.length === 0) return state;
        const next = future[0];
        return {
          past: [...past, present],
          present: next,
          future: future.slice(1),
        };

      default:
        const newPresent = reducer(present, action);
        if (present === newPresent) return state;
        return {
          past: [...past, present],
          present: newPresent,
          future: [],
        };
    }
  };
};

export default undoable;
