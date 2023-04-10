import { FC, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrop } from 'react-dnd';
import { Reorder, motion } from 'framer-motion';
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import ConstructorContainer from '../ConstructorContainer/ConstructorContainer';
import EmptyContainer from '../EmptyContainer/EmptyContainer';
import { orderDetail, addBurgerIngredient } from '../../services/action';
import burgerConstructorStyle from './BurgerConstructor.module.css';
import {
  TConstructorIngredients,
  TIngredientItem,
  TUser,
} from '../../services/types';
import { useDispatch, useSelector } from '../../services/hooks';
import { orderResetInfo } from '../../services/constants';

const BurgerConstructor: FC = () => {
  const { bun, ingredients } = useSelector(
    (store: TConstructorIngredients) => store.constructorIngredient
  );
  const { user } = useSelector((store: TUser) => store.user);
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState<boolean>();
  const [reorder, setReorder] = useState(ingredients);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrderButtonClick = () => {
    if (user) {
      setIsOrderDetailsOpen(true);
      const ingredientId = [
        bun?._id,
        ...ingredients.map((ingredient: TIngredientItem) => ingredient._id),
        bun?._id,
      ];

      dispatch(orderDetail(ingredientId));
    } else {
      navigate('/login');
    }
  };

  const handleModalClose = () => {
    setIsOrderDetailsOpen(false);
    dispatch(orderResetInfo());
  };

  const onDropHandler = (item: TIngredientItem) => {
    dispatch(addBurgerIngredient(item));
  };

  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop(item: TIngredientItem) {
      onDropHandler(item);
    },
  });

  const totalPrice = useMemo(() => {
    return (
      (bun ? bun.price * 2 : 0) +
      ingredients.reduce(
        (sum: number, item: TIngredientItem) => sum + item.price,
        0
      )
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
              {bun !== null && (
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
              values={reorder}
              onReorder={setReorder}
              className={burgerConstructorStyle.constructorList}
            >
              {ingredients.length === 0
                ? ''
                : ingredients.map((ingredient: TIngredientItem, index) => (
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
              {bun !== null && (
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
        <Modal isOpen={isOrderDetailsOpen} onClose={handleModalClose}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
