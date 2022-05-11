import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createBodyType} from '../../../http/carAPI';

const CreateBodyType = ({setActive}) => {

  const [value, setValue] = useState('')
  const addBodyType = () => {
    createBodyType({name: value.toLowerCase()}).then(data => {
      setValue('')
      setActive(false)
    })
  }

  return (
    <div>
      <h2 className={style.header}>Добавить тип кузова</h2>
      <input type="text"
             placeholder={'Новый тип кузова'}
             className={style.addInput}
             value={value}
             onChange={e => setValue(e.target.value)}/>
      <button className={style.addButton} onClick={addBodyType}>Добавить</button>
    </div>
  );
};

export default CreateBodyType;