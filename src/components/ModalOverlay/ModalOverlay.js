import PropTypes from 'prop-types';
import modalOverlayStyle from './ModalOverlay.module.css';

const ModalOverlay = ({ isOpen, onClose }) => {
  const toggleClose = (evt) => {
    if (evt.target.classList.contains(modalOverlayStyle.overlay)) {
      onClose();
    }
  };

  return (
    <div
      // className={`${modalOverlayStyle.overlay} ${
      //   isOpen && modalOverlayStyle.popup_opened
      // }`}
      className={modalOverlayStyle.overlay}
      onClick={toggleClose}
    />
  );
};

export default ModalOverlay;

ModalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
