import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createDriveUnit} from '../../../http/carAPI';

const CreateDriveUnit = ({setActive}) => {

  const [value, setValue] = useState('')
  const addDriveUnit = () => {
    createDriveUnit({name: value.toLowerCase()}).then(data => {
      setValue('')
      setActive(false)
    })
  }

  return (
    <div>
      <h2 className={style.header}>Добавить привод</h2>
      <input type="text"
             placeholder={'Новый привод'}
             className={style.addInput}
             value={value}
             onChange={e => setValue(e.target.value)}/>
      <button className={style.addButton} onClick={addDriveUnit}>Добавить</button>
    </div>
  );
};

export default CreateDriveUnit;