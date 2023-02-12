import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { createPortal } from 'react-dom';
import modalStyle from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';

const Modal = ({ title, children, isOpen, closePopup }) => {
  const modalRoot = document.getElementById('react-modals');

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', closePopup);
      return () => {
        document.removeEventListener('keydown', closePopup);
      };
    }
  }, [closePopup, isOpen]);

  return createPortal(
    <ModalOverlay isOpen={isOpen} onClose={closePopup}>
      <div
        className={`pt-10 pl-10 pb-15 pr-10 ${modalStyle.modal}`}
        onClick={(evt) => evt.stopPropagation()}
      >
        <h2 className={`text text_type_main-large ${modalStyle.title}`}>
          {title}
        </h2>
        <div onClick={closePopup} className={modalStyle.closeIcon}>
          <CloseIcon />
        </div>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};
