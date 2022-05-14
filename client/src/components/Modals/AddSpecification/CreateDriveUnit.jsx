import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createDriveUnit} from '../../../http/carAPI';
import {setDriveUnitsAC, setSpecAddErrorSearch} from '../../../redux/carSpecReducer';
import {useDispatch, useSelector} from 'react-redux';

const CreateDriveUnit = ({setActive}) => {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const specAddErrorSearch = useSelector(state => state.specifications.specAddErrorSearch)

  const addDriveUnit = () => {
    if (value) {
      createDriveUnit({name: value.toLowerCase()}).then(data => {
        dispatch(setDriveUnitsAC(data))
        setActive(false)
        setValue('')
      })
    }else {
      dispatch(setSpecAddErrorSearch(true))
    }
  }

  return (
    <div>
      <div className={style.info}>
        <input type="text"
               placeholder={'Новый привод'}
               className={specAddErrorSearch && value === '' ? style.addInputError : style.addInput}
               value={value}
               onChange={e => setValue(e.target.value)}/>
        <button className={style.addButton} onClick={addDriveUnit}>Добавить</button>
      </div>
    </div>
  );
};

export default CreateDriveUnit;