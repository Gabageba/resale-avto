import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createColor} from '../../../http/carAPI';
import {setColorsAC, setSpecAddErrorSearch} from '../../../redux/carSpecReducer';
import {useDispatch, useSelector} from 'react-redux';

const CreateColor = ({setActive}) => {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const specAddErrorSearch = useSelector(state => state.specifications.specAddErrorSearch)

  const addColor = () => {
    if (value) {
      createColor({name: value.toLowerCase()}).then(data => {
        dispatch(setColorsAC(data))
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
               placeholder={'Новый цвет'}
               className={specAddErrorSearch && value === '' ? style.addInputError : style.addInput}
               value={value}
               onChange={e => setValue(e.target.value)}/>
        <button className={style.addButton} onClick={addColor}>Добавить</button>
      </div>
    </div>
  );
};

export default CreateColor;