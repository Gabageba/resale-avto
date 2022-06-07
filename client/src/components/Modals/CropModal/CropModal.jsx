import React, {useEffect, useState} from 'react';
import Modal from '../Modal/Modal';
import ReactCrop from "react-image-crop";
import style from './CropModal.module.css'
import {useIntl} from 'react-intl';
import {useSelector} from 'react-redux';

const CropModal = ({active, setActive, src, setImage, crop, setCrop, getCroppedImg, inputType}) => {

  const [modalName, setModalName] = useState('')
  const [buttonName, setButtonName] = useState('')
  const locale = useSelector(state => state.userData.locale)
  const intl = useIntl()

  useEffect(() => {
    if (inputType === 'imageLoad') {
      setModalName(intl.formatMessage({id: 'crop_add_img_head'}))
      setButtonName(intl.formatMessage({id: 'crop_add_img_button'}))
    } else if (inputType === 'avatarChange') {
      setModalName(intl.formatMessage({id: 'crop_add_avatar_head'}))
      setButtonName(intl.formatMessage({id: 'crop_add_avatar_button'}))
    } else {
      setModalName(intl.formatMessage({id: 'crop_add_crop_head'}))
      setButtonName(intl.formatMessage({id: 'crop_add_crop_button'}))
    }
  }, [locale])


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