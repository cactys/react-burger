import { useCallback, useMemo, useRef, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredientItem, TIngredients } from '../../services/types';
import { useDispatch, useSelector } from '../../services/hooks';
import { ingredientAddInfo } from '../../services/constants';

import { IngredientsGroup } from '../IngredientsGroup/IngredientsGroup';

import burgerIngredientsStyle from './BurgerIngredients.module.css';

const BurgerIngredients = () => {
  const [current, setCurrent] = useState('bun');

  const dispatch = useDispatch();

  const ingredients = useSelector(
    (state: TIngredients) => state.ingredients.ingredients
  );

  const scrollRef = useRef<HTMLOListElement>(null);
  const bunRef = useRef<HTMLLIElement>(null);
  const sauceRef = useRef<HTMLLIElement>(null);
  const mainRef = useRef<HTMLLIElement>(null);

  const bun = useMemo(
    () => ingredients.filter((i) => i.type === 'bun'),
    [ingredients]
  );
  const sauce = useMemo(
    () => ingredients.filter((i) => i.type === 'sauce'),
    [ingredients]
  );
  const main = useMemo(
    () => ingredients.filter((i) => i.type === 'main'),
    [ingredients]
  );

  const handleClickTab = useCallback((value: string) => {
    switch (value) {
      case 'bun': {
        bunRef.current?.scrollIntoView({ behavior: 'smooth' });
        setCurrent(value);
        break;
      }
      case 'sauce': {
        sauceRef.current?.scrollIntoView({ behavior: 'smooth' });
        setCurrent(value);
        break;
      }
      case 'main': {
        mainRef.current?.scrollIntoView({ behavior: 'smooth' });
        setCurrent(value);
        break;
      }
      default:
        break;
    }
  }, []);

  const onScroll = () => {
    const scrollY = scrollRef.current?.getBoundingClientRect().y || 0;
    const bunOffsetY = Math.abs(
      (bunRef.current?.getBoundingClientRect().y || 0) - scrollY
    );
    const sauceOffsetY = Math.abs(
      (sauceRef.current?.getBoundingClientRect().y || 0) - scrollY
    );
    const mainOffsetY = Math.abs(
      (mainRef.current?.getBoundingClientRect().y || 0) - scrollY
    );

    if (bunOffsetY < sauceOffsetY && bunOffsetY < mainOffsetY)
      return setCurrent('bun');
    if (sauceOffsetY < bunOffsetY && sauceOffsetY < mainOffsetY)
      return setCurrent('sauce');
    if (mainOffsetY < bunOffsetY && mainOffsetY < sauceOffsetY)
      return setCurrent('main');
  };

  const handleIngredientClick = (selectIngredient: TIngredientItem) => {
    return dispatch(ingredientAddInfo(selectIngredient));
  };

  return (
    <section className={burgerIngredientsStyle.container}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <nav className={burgerIngredientsStyle.navigation}>
        <Tab value="bun" active={current === 'bun'} onClick={handleClickTab}>
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === 'sauce'}
          onClick={handleClickTab}
        >
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={handleClickTab}>
          Начинки
        </Tab>
      </nav>
      <ol
        ref={scrollRef}
        onScroll={onScroll}
        className={`${burgerIngredientsStyle.ingredients} mt-10`}
      >
        <li className="mb-10" ref={bunRef}>
          <h2 className="text text_type_main-medium mb-6">Булки</h2>
          <ol className={burgerIngredientsStyle.ingredientsType}>
            <IngredientsGroup
              onIngredientClick={handleIngredientClick}
              data={bun}
            />
          </ol>
        </li>
        <li className="mb-10" ref={sauceRef}>
          <h2 className="text text_type_main-medium mb-6">Соусы</h2>
          <ol className={burgerIngredientsStyle.ingredientsType}>
            <IngredientsGroup
              onIngredientClick={handleIngredientClick}
              data={sauce}
            />
          </ol>
        </li>
        <li className="mb-10" ref={mainRef}>
          <h2 className="text text_type_main-medium mb-6">Начинка</h2>
          <ol className={burgerIngredientsStyle.ingredientsType}>
            <IngredientsGroup
              onIngredientClick={handleIngredientClick}
              data={main}
            />
          </ol>
        </li>
      </ol>
    </section>
  );
};

export { BurgerIngredients };
