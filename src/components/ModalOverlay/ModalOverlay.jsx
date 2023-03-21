import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import modalOverlayStyle from './ModalOverlay.module.css';

const ModalOverlay = ({ onClose }) => {
  const { orderRequest } = useSelector((store) => store.orderDetails);
  const toggleClose = (evt) => {
    if (evt.target.classList.contains(modalOverlayStyle.overlay)) {
      onClose();
    }
  };

  return (
    <>
      {orderRequest && <Preloader />}
      <div className={modalOverlayStyle.overlay} onClick={toggleClose} />
    </>
  );
};

export default ModalOverlay;

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};
