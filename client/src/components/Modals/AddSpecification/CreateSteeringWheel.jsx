import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createSteeringWheel} from '../../../http/carAPI';

const CreateSteeringWheel = ({setActive}) => {

  const [value, setValue] = useState('')
  const addSteeringWheel = () => {
    createSteeringWheel({name: value.toLowerCase()}).then(data => {
      setValue('')
      setActive(false)
    })

  }

  return (
    <div>
      <h2 className={style.header}>Добавить вид руля</h2>
      <input type="text"
             placeholder={'Новое расположение'}
             className={style.addInput}
             value={value}
             onChange={e => setValue(e.target.value)}/>
      <button className={style.addButton} onClick={addSteeringWheel}>Добавить</button>
    </div>
  );
};

export default CreateSteeringWheel;