import PropTypes from 'prop-types';
import modalOverlayStyle from './ModalOverlay.module.css';

const ModalOverlay = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${modalOverlayStyle.overlay} ${
        isOpen && modalOverlayStyle.popup_opened
      }`}
      onClick={onClose}
    />
  );
};

export default ModalOverlay;

ModalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
