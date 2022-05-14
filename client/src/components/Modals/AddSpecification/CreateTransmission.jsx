import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createTransmission} from '../../../http/carAPI';
import {useDispatch, useSelector} from 'react-redux';
import {setSpecAddErrorSearch, setTransmissionsAC} from '../../../redux/carSpecReducer';

const CreateTransmission = ({setActive}) => {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const specAddErrorSearch = useSelector(state => state.specifications.specAddErrorSearch)

  const addTransmission = () => {
    if (value) {
      createTransmission({name: value.toLowerCase()}).then(data => {
        dispatch(setTransmissionsAC(data))
        setActive(false)
        setValue('')
      })
    } else {
      dispatch(setSpecAddErrorSearch(true))
    }
  }

  return (
    <div>
      <div className={style.info}>
        <input type="text"
               placeholder={'Новая трансмиссия'}
               className={specAddErrorSearch && value === '' ? style.addInputError : style.addInput}
               value={value}
               onChange={e => setValue(e.target.value)}/>
        <button className={style.addButton} onClick={addTransmission}>Добавить</button>
      </div>
    </div>
  );
};

export default CreateTransmission;