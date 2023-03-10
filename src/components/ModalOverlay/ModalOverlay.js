import PropTypes from 'prop-types';
import modalOverlayStyle from './ModalOverlay.module.css';

const ModalOverlay = ({ onClose }) => {
  const toggleClose = (evt) => {
    if (evt.target.classList.contains(modalOverlayStyle.overlay)) {
      onClose();
    }
  };

  return (
    <div
      className={modalOverlayStyle.overlay}
      onClick={toggleClose}
    />
  );
};

export default ModalOverlay;

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};
