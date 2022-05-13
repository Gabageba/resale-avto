import React, {useEffect, useState} from 'react';
import {setSelectedFileAC} from '../../redux/carSpecReducer';
import {useDispatch, useSelector} from 'react-redux';
import style from './FileLoadInput.module.css'

const FileLoadInput = () => {
  const [isLoad, setIsLoad] = useState(false)
  const [loadFile, setLoadFile] = useState('')
  const dispatch = useDispatch()


  const selectedFile = useSelector(state => state.specifications.selectedFile)

  const specErrorSearch = useSelector(state => state.specifications.specErrorSearch)

  const labelCondition = () => {
    if (isLoad) {
      return style.labelActive
    } else if (specErrorSearch && selectedFile === '') {
      return style.labelError
    } else {
      return style.label
    }
  }

  useEffect(() => {
    if (selectedFile === '') {
      setIsLoad(false)
      setLoadFile('')
    }
  }, [selectedFile])

  return (
    <div className={style.fileLoadInput}>
      <div className={style.formGroup}>
        <label className={labelCondition()}>
          <i className={"material-icons"} >{isLoad ? 'done' : 'attach_file'}</i>
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