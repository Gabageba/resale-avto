import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createBodyType} from '../../../http/carAPI';
import {setBodyTypesAC, setSpecAddErrorSearch} from '../../../redux/carSpecReducer';
import {useDispatch, useSelector} from 'react-redux';

const CreateBodyType = ({setActive}) => {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const specAddErrorSearch = useSelector(state => state.specifications.specAddErrorSearch)

  const addBodyType = () => {
    if (value) {
      createBodyType({name: value.toLowerCase()}).then(data => {
        dispatch(setBodyTypesAC(data))
        setValue('')
        setActive(false)
      })
    } else {
      dispatch(setSpecAddErrorSearch(true))
    }
  }

  return (
    <div>
      <div className={style.info}>
        <input type="text"
               placeholder={'Новый тип кузова'}
               className={specAddErrorSearch && value === '' ? style.addInputError : style.addInput}
               value={value}
               onChange={e => setValue(e.target.value)}/>
        <button className={style.addButton} onClick={addBodyType}>Добавить</button>
      </div>
    </div>
  );
};

export default CreateBodyType;