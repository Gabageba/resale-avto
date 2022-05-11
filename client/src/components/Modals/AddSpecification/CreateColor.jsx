import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createColor} from '../../../http/carAPI';

const CreateColor = ({setActive}) => {

  const [value, setValue] = useState('')
  const addColor = () => {
    createColor({name: value.toLowerCase()}).then(data => {
      setValue('')
      setActive(false)
    })

  }

  return (
    <div>
      <h2 className={style.header}>Добавить цвет</h2>
      <input type="text"
             placeholder={'Новый цвет'}
             className={style.addInput}
             value={value}
             onChange={e => setValue(e.target.value)}/>
      <button className={style.addButton} onClick={addColor}>Добавить</button>
    </div>
  );
};

export default CreateColor;