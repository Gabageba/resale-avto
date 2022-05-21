import React from 'react';
import style from './Modal.module.css'
import {useDispatch} from 'react-redux';
import {setSpecAddErrorSearch} from '../../../redux/carSpecReducer';

const Modal = ({active, setActive, children, size, modalName}) => {

  let modalContentActive = style.bigModalContentActive
  let modalContent = style.bigModalContent
  const dispatch = useDispatch()



  if (size === 'small') {
    modalContentActive = style.smallModalContentActive
    modalContent = style.smallModalContent
  }

  return (
    <div className={active ? style.modalActive : style.modal}>
      <div className={active ? modalContentActive : modalContent} onClick={e => e.stopPropagation()}>
        <div className={style.head}>
          <h2 className={style.header}>{modalName}</h2>
          <div className={style.close} onClick={() => {
            setActive(false)
            dispatch(setSpecAddErrorSearch(false))
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;