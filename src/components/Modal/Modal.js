import React from 'react';
import PropTypes from 'prop-types';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { createPortal } from 'react-dom';

const Modal = ({ title, children, isOpen, closePopup }) => {
  return createPortal(
    <ModalOverlay>

    </ModalOverlay>
  );
};

export default Modal;

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};
