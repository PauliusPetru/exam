import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  StyledOverlay,
  StyledModalWrapper,
  SyledCloseButtonContainer,
  StyledModal,
} from './styles';
import ICONS from '../../../shared/icons';

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const closeModalOnEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', closeModalOnEscape);

    return () => {
      document.removeEventListener('keydown', closeModalOnEscape);
    };
  }, [onClose]);

  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === 'modalWrapper') onClose();
    return;
  };

  return createPortal(
    <>
      <StyledOverlay></StyledOverlay>
      <StyledModalWrapper onClick={closeOnOverlay} data-id='modalWrapper'>
        <SyledCloseButtonContainer>
          <span onClick={onClose}>{ICONS.xmark}</span>
        </SyledCloseButtonContainer>
        <StyledModal>{children}</StyledModal>
      </StyledModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
