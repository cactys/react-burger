import orderDetailsStyle from './OrderDetails.module.css';
import done from '../../images/done.svg';
import PropTypes from 'prop-types';

const OrderDetails = ({ orderDetails }) => {
  return (
    <div className={`pb-15 ${orderDetailsStyle.container}`}>
      <h3
        className={`mt-4 text text_type_digits-large ${orderDetailsStyle.numberOrder}`}
      >
        {orderDetails.ORDER.NUMBER}
      </h3>
      <p className="mt-8 text text_type_main-medium">
        {orderDetails.ORDER.TITLE}
      </p>
      <img className="mt-15 mb-15" src={done} alt="Заказ готовится" />
      <p className="mb-2 text text_type_main-default">
        {orderDetails.SUBTITLE}
      </p>
      <span
        className={` text text_type_main-default ${orderDetailsStyle.spanColor}`}
      >
        {orderDetails.COMMENT}
      </span>
    </div>
  );
};

export default OrderDetails;

OrderDetails.propTypes = {
  orderDetails: PropTypes.object.isRequired,
};
