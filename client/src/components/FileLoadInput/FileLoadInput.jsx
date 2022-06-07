import React, {useEffect, useState} from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import style from './FileLoadInput.module.css';
import CropModal from '../Modals/CropModal/CropModal';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedFileAC} from '../../redux/carSpecReducer';
import {addImage} from '../../http/carAPI';
import {useIntl} from 'react-intl';

const FileLoadInput = ({inputType, carId, setImg}) => {

  const [src, selectFile] = useState(null);
  const [isLoad, setIsLoad] = useState(false)
  const [loadFile, setLoadFile] = useState('')
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({aspect: 170 / 111});
  const [modalActive, setModalActive] = useState(false)

  const selectedFile = useSelector(state => state.specifications.selectedFile)
  const specErrorSearch = useSelector(state => state.specifications.specErrorSearch)
  const dispatch = useDispatch()
  const intl = useIntl()

  useEffect(() => {
    if (selectedFile === '') {
      setIsLoad(false)
      setLoadFile('')
    }
  }, [selectedFile])

  const handleFileChange = (e) => {
    setIsLoad(false)
    dispatch(setSelectedFileAC(''))
    setLoadFile(e.target.files[0].name)
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

  const labelCondition = () => {
    if (isLoad) {
      return style.labelActive
    } else if (specErrorSearch && selectedFile === '') {
      return style.labelError
    } else {
      return style.label
    }
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

    if (inputType === 'imageLoad') {
      const formData = new FormData()
      formData.append('img', fileImage)
      formData.append('carId', carId)
      addImage(formData).then(data => setImg(data))
    } else {
      dispatch(setSelectedFileAC(fileImage))
      setIsLoad(true)
    }
    setModalActive(false)
  }

  return (
    <div>
      <CropModal active={modalActive} setActive={setModalActive} crop={crop} setCrop={setCrop} setImage={setImage}
                 src={src} getCroppedImg={getCroppedImg} inputType={inputType}/>
      <div className={style.fileLoadInput}>
        <div className={style.formGroup}>
          {inputType === 'imageLoad' ?
            <label className={style.imageLoadLabel}>
              <span className={'material-icons-outlined'}>add_photo_alternate</span>
              <input type="file" accept="image/" onChange={handleFileChange}/>
            </label> :
            <label className={labelCondition()}>
              <i className={'material-icons'}>{isLoad ? 'done' : 'attach_file'}</i>
              <span className={style.title}>{isLoad ? loadFile : intl.formatMessage({id: 'img_load'})}</span>
              <input type="file" accept="image/" onChange={handleFileChange}/>
            </label>
          }

        </div>
      </div>
    </div>
  );
};

export default FileLoadInput;
