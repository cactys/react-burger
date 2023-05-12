import { FC } from 'react';
import { IModal } from '../../services/interfaces';

import modalOverlayStyle from './ModalOverlay.module.css';

const ModalOverlay: FC<IModal> = ({ onClose }) => {
  const toggleClose = (e: any) => {
    if (e.target.classList.contains(modalOverlayStyle.overlay)) {
      onClose();
    }
  };

  return <div className={modalOverlayStyle.overlay} onClick={toggleClose} />;
};

export { ModalOverlay };
