import React from 'react';
import style from './Modal.module.css'

const Modal = ({active, setActive, children, size}) => {

  let modalContentActive = style.bigModalContentActive
  let modalContent = style.bigModalContent



  if (size === 'small') {
    modalContentActive = style.smallModalContentActive
    modalContent = style.smallModalContent
  }

  return (
    <div className={active ? style.modalActive : style.modal} onClick={() => setActive(false)}>
      <div className={active ? modalContentActive : modalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;