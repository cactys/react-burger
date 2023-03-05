export const isContainRoute = (state, route) =>
  state.some(({ url }) => url === route);

export const removeRemainingCrumbs = (state, url) => {
  const index = state.findIndex(({ url: route }) => route === url);
  return state.slice(0, index);
};
