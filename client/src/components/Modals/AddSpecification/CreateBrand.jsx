import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createBrand} from '../../../http/carAPI';

const CreateBrand = ({setActive}) => {

  const [value, setValue] = useState('')
  const addBrand = () => {
    createBrand({name: value.toLowerCase()}).then(data => {
      setValue('')
      setActive(false)
    })

  }

  return (
    <div>
      <h2 className={style.header}>Добавить марку</h2>
      <input type="text"
             placeholder={'Новая марка'}
             className={style.addInput}
             value={value}
             onChange={e => setValue(e.target.value)}/>
      <button className={style.addButton} onClick={addBrand}>Добавить</button>
    </div>
  );
};

export default CreateBrand;