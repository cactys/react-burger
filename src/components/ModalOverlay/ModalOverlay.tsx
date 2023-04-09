import { FC } from 'react';
import modalOverlayStyle from './ModalOverlay.module.css';
import { IModal } from '../../services/interfaces';

const ModalOverlay: FC<IModal> = ({ onClose }) => {
  const toggleClose = (evt: any) => {
    if (evt.target.classList.contains(modalOverlayStyle.overlay)) {
      onClose();
    }
  };

  return <div className={modalOverlayStyle.overlay} onClick={toggleClose} />;
};

export default ModalOverlay;
