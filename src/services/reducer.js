export const ingredientInitialState = { ingredient: [] };

export const reducer = (state, action) => {
  switch (action.type) {
    case 'bun':
      return { ingredients: action.payload };
    case 'main':
      return { ingredient: action.payload };
    case 'sauce':
      return { ingredient: action.payload };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
};
