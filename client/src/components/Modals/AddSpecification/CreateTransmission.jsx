import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createTransmission} from '../../../http/carAPI';

const CreateTransmission = ({setActive}) => {

  const [value, setValue] = useState('')
  const addColor = () => {
    createTransmission({name: value}).then(data => {
      setValue('')
      setActive(false)
    })

  }

  return (
    <div>
      <h2 className={style.header}>Добавить КПП</h2>
      <input type="text"
             placeholder={'Новая трансмиссия'}
             className={style.addInput}
             value={value}
             onChange={e => setValue(e.target.value)}/>
      <button className={style.addButton} onClick={addColor}>Добавить</button>
    </div>
  );
};

export default CreateTransmission;