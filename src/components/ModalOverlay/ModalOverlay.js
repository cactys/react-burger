import React from 'react';
import PropTypes from 'prop-types';

const ModalOverlay = ({ isOpen, children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default ModalOverlay;

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
