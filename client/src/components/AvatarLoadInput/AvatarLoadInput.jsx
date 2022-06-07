import React, {useState} from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import style from './AvatarLoadInput.module.css';
import CropModal from '../Modals/CropModal/CropModal';
import {useDispatch} from 'react-redux';
import {setSelectedFileAC} from '../../redux/carSpecReducer';
import {deleteAvatar, updateAvatar} from '../../http/userAPI';
import {setUserAC} from '../../redux/userReducer';
import {FormattedMessage} from 'react-intl';

const AvatarLoadInput = ({userId, editAvatar}) => {

  const [src, selectFile] = useState(null);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({aspect: 1 / 1});
  const [modalActive, setModalActive] = useState(false)

  const dispatch = useDispatch()

  const handleFileChange = (e) => {
    dispatch(setSelectedFileAC(''))
    selectFile(URL.createObjectURL(e.target.files[0]));
    setModalActive(true)
  };

  const dataURLtoFile = (dataUrl, filename) => {
    let arr = dataUrl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type: mime});
  }

  const deleteImg = () => {
    deleteAvatar(userId).then(data => {
      dispatch(setUserAC(data))
    })
  }

  const getCroppedImg = () => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Image = canvas.toDataURL('image/jpeg');
    const fileImage = dataURLtoFile(base64Image)
    const formData = new FormData()
    formData.append('img', fileImage)
    formData.append('id', userId)
    updateAvatar(formData).then(data => {
      dispatch(setUserAC(data))
    })
    setModalActive(false)
  }

  return (
    <div>
      <CropModal active={modalActive} setActive={setModalActive} crop={crop} setCrop={setCrop} setImage={setImage}
                 src={src} getCroppedImg={getCroppedImg} inputType={'avatarChange'}/>
      <div className={editAvatar ? style.editAvatarActive : style.editAvatar}>
        <div className={editAvatar ? style.editTextActive : style.editText}>
          <label>
            <div className={style.update}><FormattedMessage id='avatar_load' /></div>
            <input type="file" accept="image/" onChange={handleFileChange} className={style.input}/>
          </label>
          <div className={style.delete} onClick={deleteImg}><FormattedMessage id='avatar_delete' /></div>
        </div>

      </div>
    </div>
  );
};

export default AvatarLoadInput;
