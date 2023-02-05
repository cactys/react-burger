import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import burgerIngredientsStyle from './BurgerIngredients.module.css';

export const BurgerIngredients = () => {
  const [current, setCurrent] = useState('one');

  return (
    <section className={burgerIngredientsStyle.container}>
      <h1 className='text text_type_main-large pt-10 pb-5'>Соберите бургер</h1>
      <nav className={burgerIngredientsStyle.navigation}>
        <Tab value='one' active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value='two' active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value='three' active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>
      <div className={`${burgerIngredientsStyle.burgerIngredients} mt-10`}>
        ## Burger Joint Welcome to Burger Joint - the tastiest burgers in town! We
        are proud to offer a selection of some of the most mouth-watering burgers
        around. With a variety of toppings and sauces, you are sure to find something
        to satisfy your cravings. Our burgers are made with the freshest ingredients
        and our buns are baked fresh daily. ### Menu - **Classic Cheeseburger**: 100%
        beef patty topped with melted American cheese, crispy lettuce, red onion,
        pickles, and our signature burger sauce. - **Bacon Cheeseburger**: 100% beef
        patty topped with melted American cheese, bacon, crispy lettuce, red onion,
        and our signature burger sauce. - **Mega Burger**: Two 100% beef patties
        topped with melted American cheese, bacon, crispy lettuce, red onion,
        pickles, and our signature burger sauce. - **Veggie Burger**: Vegetarian
        patty topped with melted Swiss cheese, crispy lettuce, red onion, pickles,
        and our signature burger sauce. ### Specials We offer a variety of daily
        specials, so check back often to see what's new! ### Contact Us If you have
        any questions or comments, please reach out! Email: info@burgerjoint.com
        Phone: +1 123 456 7890 ## Burger Joint Welcome to Burger Joint - the tastiest
        burgers in town! We are proud to offer a selection of some of the most
        mouth-watering burgers around. With a variety of toppings and sauces, you are
        sure to find something to satisfy your cravings. Our burgers are made with
        the freshest ingredients and our buns are baked fresh daily. ### Menu -
        **Classic Cheeseburger**: 100% beef patty topped with melted American cheese,
        crispy lettuce, red onion, pickles, and our signature burger sauce. - **Bacon
        Cheeseburger**: 100% beef patty topped with melted American cheese, bacon,
        crispy lettuce, red onion, and our signature burger sauce. - **Mega Burger**:
        Two 100% beef patties topped with melted American cheese, bacon, crispy
        lettuce, red onion, pickles, and our signature burger sauce. - **Veggie
        Burger**: Vegetarian patty topped with melted Swiss cheese, crispy lettuce,
        red onion, pickles, and our signature burger sauce. ### Specials We offer a
        variety of daily specials, so check back often to see what's new! ### Contact
        Us If you have any questions or comments, please reach out! Email:
        info@burgerjoint.com Phone: +1 123 456 7890 ## Burger Joint Welcome to Burger
        Joint - the tastiest burgers in town! We are proud to offer a selection of
        some of the most mouth-watering burgers around. With a variety of toppings
        and sauces, you are sure to find something to satisfy your cravings. Our
        burgers are made with the freshest ingredients and our buns are baked fresh
        daily. ### Menu - **Classic Cheeseburger**: 100% beef patty topped with
        melted American cheese, crispy lettuce, red onion, pickles, and our signature
        burger sauce. - **Bacon Cheeseburger**: 100% beef patty topped with melted
        American cheese, bacon, crispy lettuce, red onion, and our signature burger
        sauce. - **Mega Burger**: Two 100% beef patties topped with melted American
        cheese, bacon, crispy lettuce, red onion, pickles, and our signature burger
        sauce. - **Veggie Burger**: Vegetarian patty topped with melted Swiss cheese,
        crispy lettuce, red onion, pickles, and our signature burger sauce. ###
        Specials We offer a variety of daily specials, so check back often to see
        what's new! ### Contact Us If you have any questions or comments, please
        reach out! Email: info@burgerjoint.com Phone: +1 123 456 7890
      </div>
    </section>
  );
};
