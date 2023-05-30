import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IModal } from '../../services/interfaces';

import { ModalOverlay } from '../ModalOverlay/ModalOverlay';

import modalStyle from './Modal.module.css';

const Modal: FC<IModal> = ({ title, children, onClose }) => {
  const modalRoot = document.getElementById('react-modals') as HTMLElement;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div
        className={`pt-10 pl-10 pb-15 pr-10 ${modalStyle.modal}`}
        onClick={(evt) => evt.stopPropagation()}
      >
        <h2 className={`text text_type_main-large ${modalStyle.title}`}>
          {title}
        </h2>
        <div
          onClick={onClose}
          className={modalStyle.closeIcon}
          data-testid="button-close"
        >
          <CloseIcon type="primary" />
        </div>
        {children}
      </div>
    </>,
    modalRoot
  );
};

export { Modal };
