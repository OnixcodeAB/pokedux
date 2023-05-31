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
  if (Array.isArray(action.payload)) {
    const sortNames = action.payload; // Crea una copia del array para evitar mutaciones
    sortNames.sort((a, b) => a.name.localeCompare(b.name));
    const update = {
      ...action,
    };
    //console.log(sortNames);
    next(update);
  } else {
    next(action);
  }
};
