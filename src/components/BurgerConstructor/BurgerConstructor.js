import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyle from './BurgerConstructor.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { useDispatch, useSelector } from 'react-redux';
import ConstructorContainer from '../ConstructorContainer/ConstructorContainer';
import { useDrop } from '../../../node_modules/react-dnd/dist/index';
import { v4 as uuid } from 'uuid';
import {
  addBurgerBun,
  addBurgerIngredient,
} from '../../services/action/BurgerConstructor';
import { RESET_ORDER_INFO } from '../../utils/constant';
import EmptyContainer from '../EmptyContainer/EmptyContainer';

const BurgerConstructor = () => {
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);
  const dispatch = useDispatch();
  const { bun, ingredients } = useSelector(
    (store) => store.constructorIngredient
  );

  const handleOrderButtonClick = () => {
    setIsOrderDetailsOpen(true);
  };

  const closePopups = () => {
    setIsOrderDetailsOpen(false);
    dispatch({
      type: RESET_ORDER_INFO,
    });
  };

  const onDropHandler = (item) => {
    if (item.type !== 'bun') {
      dispatch(addBurgerIngredient(item, uuid()));
    } else {
      dispatch(addBurgerBun(item, uuid()));
    }
  };

  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop(item) {
      onDropHandler(item);
    },
  });

  const ingredientPrice = ingredients.reduce(
    (sum, item) => sum + item.price,
    0
  );
  const bunPrice =
    bun !== null ? bun.reduce((sum, item) => sum + item.price, 0) * 2 : 0;

  const totalPrice = ingredientPrice + bunPrice;

  return (
    <section className={burgerConstructorStyle.container}>
      <div
        className={burgerConstructorStyle.constructorContainer}
        ref={dropRef}
      >
        {bun === null && ingredients.length === 0 ? (
          <EmptyContainer />
        ) : (
          <>
            <div className="pl-8" style={{ height: 80 }}>
              {bun !== null && bun.length !== 0 && (
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={`${bun[0].name} (верх)`}
                  price={bun[0].price}
                  thumbnail={bun[0].image}
                />
              )}
            </div>
            <ul className={burgerConstructorStyle.constructorList}>
              {ingredients.length === 0
                ? ''
                : ingredients.map((ingredient) => (
                    <ConstructorContainer
                      key={ingredient.uuid}
                      ingredient={ingredient}
                    />
                  ))}
            </ul>
            <div className="pl-8" style={{ height: 80 }}>
              {bun !== null && bun.length !== 0 && (
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${bun[0].name} (низ)`}
                  price={bun[0].price}
                  thumbnail={bun[0].image}
                />
              )}
            </div>
          </>
        )}
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
