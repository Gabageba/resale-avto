import React, {useState} from 'react';
import {setSelectedFileAC} from '../../redux/carSpecReducer';
import {useDispatch} from 'react-redux';
import style from './FileLoadInput.module.css'

const FileLoadInput = () => {
  const [isLoad, setIsLoad] = useState(false)
  const [loadFile, setLoadFile] = useState('')
  const dispatch = useDispatch()

  return (
    <div className={style.fileLoadInput}>
      <div className={style.formGroup}>
        <label className={isLoad ? style.labelActive : style.label}>
          <i className={"material-icons"}>{isLoad ? 'done' : 'attach_file'}</i>
          <span className={style.title}>{isLoad ? loadFile : 'Добавить файлы'}</span>
          <input type="file" onChange={(e) => {
            dispatch(setSelectedFileAC(e.target.files[0]))
            setLoadFile(e.target.files[0].name)
            setIsLoad(true)
          }}/>
        </label>
      </div>
    </div>
  );
}

export default FileLoadInput;