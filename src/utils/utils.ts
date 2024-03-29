import { TIngredientItem } from '../services/types';

const currentDate = (currentDate: string) => {
  const date = new Date(currentDate);
  const month = date.getMonth();
  const currentMonth = new Date().getMonth();
  let weekDay = '';

  if (month !== currentMonth) return 'В этом году';

  const day = date.getDay();
  const currentDay = new Date().getDay();
  const difference = currentDay - day;

  if (difference === 0) weekDay = 'Сегодня';
  else if (difference === 1) weekDay = 'Вчера';
  else if (difference === 2) weekDay = '2 дня назад';
  else if (difference >= 3 && difference <= 7) weekDay = 'На этой неделе';
  else return 'В этом месяце';

  const hours = date.getHours();
  const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  return `${weekDay}, ${hours}:${minutes}`;
};

const currentOrder = (
  ingredientIds: string[] | undefined,
  ingredients: TIngredientItem[]
) => {
  let currentIngredients: TIngredientItem[] = [];
  ingredientIds?.map((id) => {
    currentIngredients = [
      ...currentIngredients,
      ...ingredients.filter((item) => item._id === id),
    ];
  });
  return currentIngredients;
};

const getQuantityIngredients = (items: string[] | undefined) => {
  const ingredientsCount = {};
  items?.reduce((acc: { [key: string]: number }, el: string) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, ingredientsCount);
  return ingredientsCount;
};

export { currentDate, currentOrder, getQuantityIngredients };
