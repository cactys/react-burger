import PropTypes from 'prop-types';
import modalOverlayStyle from './ModalOverlay.module.css';

const ModalOverlay = ({ children, isOpen, onClose }) => {
  return (
    <div
      className={`${modalOverlayStyle.overlay} ${
        isOpen && modalOverlayStyle.popup_opened
      }`}
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
