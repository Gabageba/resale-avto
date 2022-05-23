import React from 'react';
import Modal from '../Modal/Modal';
import ReactCrop from "react-image-crop";
import style from './CropModal.module.css'

const CropModal = ({active, setActive, src, setImage, crop, setCrop, getCroppedImg, inputType}) => {

  return (
    <Modal modalName={inputType === 'imageLoad' ? 'Добавление изображения' :'Кадрирование изображения'} setActive={setActive} active={active}>
      <div className={style.cropWindow}>
        <ReactCrop
          maxHeight={800}
          src={src}
          onImageLoaded={setImage}
          crop={crop}
          onChange={setCrop}
          style={{border: '2px dashed #494949'}}
        />
      </div>
        <button onClick={getCroppedImg} className={style.addButton}>{inputType === 'imageLoad' ? 'Добавить' :'Кадрировать'}</button>
    </Modal>
  );
};

export default CropModal;