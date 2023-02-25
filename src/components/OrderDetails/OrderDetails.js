import orderDetailsStyle from './OrderDetails.module.css';
import done from '../../images/done.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { orderDetail } from '../../services/action/OrderDetails';

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { bun, ingredients } = useSelector(
    (store) => store.constructorIngredient
  );
  const { currentOrder, orderRequest, orderFailed } = useSelector(
    (store) => store.orderDerails
  );

  useEffect(() => {
    const ingredientId = [];
    ingredients.map((ingredient) => ingredientId.push(ingredient._id));
    bun.map((item) => ingredientId.push(item._id));

    dispatch(orderDetail(ingredientId));
  }, [dispatch, bun, ingredients]);

  return (
    <>
      {orderRequest && orderFailed ? (
        ''
      ) : (
        <div className={`pb-15 ${orderDetailsStyle.container}`}>
          <h3
            className={`mt-4 text text_type_digits-large ${orderDetailsStyle.numberOrder}`}
          >
            {currentOrder && currentOrder.number}
          </h3>
          <p className="mt-8 text text_type_main-medium">
            идентификатор заказа
          </p>
          <img className="mt-15 mb-15" src={done} alt="Заказ готовится" />
          <p className="mb-2 text text_type_main-default">
            Ваш заказ начали готовить
          </p>
          <span
            className={` text text_type_main-default ${orderDetailsStyle.spanColor}`}
          >
            Дождитесь готовности на орбитальной станции
          </span>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
