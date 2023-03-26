import { FC } from 'react';
import PropTypes from 'prop-types';
import modalOverlayStyle from './ModalOverlay.module.css';
import { IModal } from '../../services/interfaces';

const ModalOverlay: FC<IModal> = ({ onClose }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleClose = (evt: any) => {
    if (evt.target.classList.contains(modalOverlayStyle.overlay)) {
      onClose();
    }
  };

  return <div className={modalOverlayStyle.overlay} onClick={toggleClose} />;
};

export default ModalOverlay;

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};
