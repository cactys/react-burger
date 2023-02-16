import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyle from './BurgerConstructor.module.css';
import { useContext, useMemo, useState } from 'react';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { DataContext, OrderContext } from '../../services/ingredientsContext';
import { api } from '../../utils/api';

const BurgerConstructor = () => {
  const { ingredients } = useContext(DataContext);
  const { setOrder } = useContext(OrderContext);
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);

  const filterBun = useMemo(
    () => ingredients.find((bun) => bun.type === 'bun'),
    [ingredients]
  );

  const filterIngredients = useMemo(
    () =>
      ingredients
        .filter((ingredient) => ingredient.type !== 'bun')
        .slice(5, 11),
    [ingredients]
  );

  const handleOrderButtonClick = () => {
    const ingredientId = [
      ...filterIngredients.map((ingredient) => ingredient._id),
      filterBun._id,
    ];

    api
      .addOrder(ingredientId)
      .then((order) => {
        setOrder(order.order.number);
      })
      .catch((err) => console.log(err));
    setIsOrderDetailsOpen(true);
  };

  const closePopups = () => {
    setIsOrderDetailsOpen(false);
  };

  const mainPrice = useMemo(
    () => filterIngredients.reduce((sum, item) => sum + item.price, 0),
    [filterIngredients]
  );

  const totalPrice = mainPrice + filterBun?.price * 2;

  return ingredients.length === 0 ? (
    ''
  ) : (
    <section className={burgerConstructorStyle.container}>
      <div className={burgerConstructorStyle.constructorContainer}>
        <div className="pl-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${filterBun.name} (верх)`}
            price={filterBun.price}
            thumbnail={filterBun.image}
          />
        </div>
        <ul className={burgerConstructorStyle.constructorList}>
          {filterIngredients.map((ingredient) => (
            <li
              className={burgerConstructorStyle.listElement}
              key={ingredient._id}
            >
              <DragIcon type="primary" />
              <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
              />
            </li>
          ))}
        </ul>
        <div className="pl-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${filterBun.name} (низ)`}
            price={filterBun.price}
            thumbnail={filterBun.image}
          />
        </div>
      </div>
      <div className={burgerConstructorStyle.containerOrder}>
        <div className={burgerConstructorStyle.containerPrice}>
          <span className="mr-2 text text_type_digits-medium">
            {totalPrice}
          </span>
          <div className={burgerConstructorStyle.icon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleOrderButtonClick}
        >
          Оформить заказ
        </Button>
      </div>
      {isOrderDetailsOpen && (
        <Modal isOpen={isOrderDetailsOpen} closePopup={closePopups}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
