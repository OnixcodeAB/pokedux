export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring = (store) => (next) => (action) => {
  const featured = [{ name: "eddie" }, ...action.action.payload];
  const updateActionInfo = {
    ...action,
    action: { ...action.action, payload: featured },
  };
  next(updateActionInfo);
};

export const SortedNames = (store) => (next) => (action) => {
  const sortNames = action.action.payload.map((poke) => poke.name).sort();

  const namesUpdated = action.action.payload.map((poke, index) => ({
    ...poke,
    name: sortNames[index],
  }));

  const update = {
    ...action,
    action: {...action.action, payload: namesUpdated}
  }
  next(update);
};
