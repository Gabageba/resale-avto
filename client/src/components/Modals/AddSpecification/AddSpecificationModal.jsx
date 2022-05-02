import React from 'react';
import Modal from '../Modal/Modal';
import style from './AddSpecificationModal.module.css'

const content = (chosenSpec) => {
  let content = <div>Что-то не то</div>

  switch (chosenSpec) {
    case 'Марка':
      content = (
        <div>
          <h2>Добавить марку</h2>
          <input type="text" placeholder={'Новая марка'} className={style.addInput}/>
          <button className={style.addButton}>Добавить</button>
        </div>
      )
      return content
    case 'Модель':
      content = (
        <div>
          <h2>Добавить модель</h2>
          <input type="text" placeholder={'Выберите марку'} className={style.addInput}/>
          <input type="text" placeholder={'Новая модель'} className={style.addInput}/>
          <button className={style.addButton}>Добавить</button>
        </div>
      )
      return content
    case 'Тип кузова':
      content = (
        <div>
          <h2>Добавить тип кузова</h2>
          <input type="text" placeholder={'Новый тип кузова'} className={style.addInput}/>
          <button className={style.addButton}>Добавить</button>
        </div>
      )
      return content
    case 'Привод':
      content = (
        <div>
          <h2>Добавить привод</h2>
          <input type="text" placeholder={'Новый вид привода'} className={style.addInput}/>
          <button className={style.addButton}>Добавить</button>
        </div>
      )
      return content
    case 'Цвет':
      content = (
        <div>
          <h2>Добавить цвет</h2>
          <input type="text" placeholder={'Новый цвет'} className={style.addInput}/>
          <button className={style.addButton}>Добавить</button>
        </div>
      )
      return content
    case 'Руль':
      content = (
        <div>
          <h2>Добавить расположение руля</h2>
          <input type="text" placeholder={'Новое расположение руля'} className={style.addInput}/>
          <button className={style.addButton}>Добавить</button>
        </div>
      )
      return content
    default:
      return content
  }
}

const AddSpecificationModal = ({active, setActive, chosenSpec}) => {

  return (
    <Modal active={active} setActive={setActive} size={'small'}>
      <div>
        {content(chosenSpec)}
      </div>
    </Modal>
  );
};

export default AddSpecificationModal;