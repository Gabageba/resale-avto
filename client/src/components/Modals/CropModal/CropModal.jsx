import React, {useEffect, useState} from 'react';
import Modal from '../Modal/Modal';
import ReactCrop from "react-image-crop";
import style from './CropModal.module.css'

const CropModal = ({active, setActive, src, setImage, crop, setCrop, getCroppedImg, inputType}) => {

  const [modalName, setModalName] = useState('')
  const [buttonName, setButtonName] = useState('')

  useEffect(() => {
    if (inputType === 'imageLoad') {
      setModalName('Добавление изображения')
      setButtonName('Добавить')
    } else if (inputType === 'avatarChange') {
      setModalName('Изменение изображения профиля')
      setButtonName('Изменить')
    } else {
      setModalName('Кадрирование изображения')
      setButtonName('Кадрировать')
    }
  }, [])


  return (
    <Modal modalName={modalName} setActive={setActive} active={active}>
      <div className={style.cropWindow}>
        <ReactCrop
          className={style.crop}
          src={src}
          onImageLoaded={setImage}
          crop={crop}
          onChange={setCrop}
          style={{border: '2px dashed #494949'}}
        />
      </div>
        <button onClick={getCroppedImg} className={style.addButton}>{buttonName}</button>
    </Modal>
  );
};

export default CropModal;