import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyle from './BurgerConstructor.module.css';
import { useMemo, useState } from 'react';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { useDispatch, useSelector } from 'react-redux';
import ConstructorContainer from '../ConstructorContainer/ConstructorContainer';
import { useDrop } from '../../../node_modules/react-dnd/dist/index';
import { addBurgerIngredient } from '../../services/action/BurgerConstructor';
import EmptyContainer from '../EmptyContainer/EmptyContainer';
import { Reorder, motion } from 'framer-motion';
import { RESET_ORDER_INFO } from '../../services/action/OrderDetails';

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
    dispatch(addBurgerIngredient(item));
  };

  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop(item) {
      onDropHandler(item);
    },
  });

  const totalPrice = useMemo(() => {
    return (
      (bun ? bun.price * 2 : 0) +
      ingredients.reduce((sum, item) => sum + item.price, 0)
    );
  }, [bun, ingredients]);

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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pl-8"
              style={{ height: 80 }}
            >
              {bun !== null && bun.length !== 0 && (
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={`${bun.name} (верх)`}
                  price={bun.price}
                  thumbnail={bun.image}
                />
              )}
            </motion.div>
            <Reorder.Group
              axis="y"
              values={ingredients}
              className={burgerConstructorStyle.constructorList}
            >
              {ingredients.length === 0
                ? ''
                : ingredients.map((ingredient, index) => (
                    <ConstructorContainer
                      key={ingredient.uuid}
                      ingredient={ingredient}
                      index={index}
                    />
                  ))}
            </Reorder.Group>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pl-8"
              style={{ height: 80 }}
            >
              {bun !== null && bun.length !== 0 && (
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${bun.name} (низ)`}
                  price={bun.price}
                  thumbnail={bun.image}
                />
              )}
            </motion.div>
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
