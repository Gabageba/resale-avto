import React, {useEffect, useState} from 'react';
import Modal from '../Modal/Modal';
import {
  fetchBodyTypes,
  fetchBrands,
  fetchColors,
  fetchDriveUnits,
  fetchModels,
  fetchSteeringWheels
} from '../../../http/carAPI';
import AutoCompleteDropDown from '../../AutoCompleteDropDown/AutoCompleteDropDown';
import Spinner from '../../Spinner/Spinner';
import style from './AddCarModal.module.css'
import AddSpecificationModal from '../AddSpecification/AddSpecificationModal';


const AddCarModal = ({active, setActive}) => {

  const [bodyTypes, setBodyTypes] = useState([])
  const [brands, setBrands] = useState([])
  const [models, setModels] = useState([])
  const [driveUnits, setDriveUnits] = useState([])
  const [steeringWheels, setSteeringWheels] = useState([])
  const [colors, setColors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBrands().then(data => setBrands(data))
    fetchModels().then(data => setModels(data))
    fetchDriveUnits().then(data => setDriveUnits(data))
    fetchSteeringWheels().then(data => setSteeringWheels(data))
    fetchColors().then(data => setColors(data))
    fetchBodyTypes().then(data => setBodyTypes(data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }


  return (
    <Modal active={active} setActive={setActive}>
      <div className={style.addCarModal}>
        <h2>Добавить автомобиль</h2>
        <div className={style.contentBlock}>
          <AutoCompleteDropDown dropDownName={'Марка'} optionsData={brands} isAdd={true}/>
          <AutoCompleteDropDown dropDownName={'Модель'} optionsData={models} isAdd={true}/>
          <AutoCompleteDropDown dropDownName={'Тип кузова'} optionsData={bodyTypes} isAdd={true}/>
          <input type="text" placeholder='Пробег' className={style.textInput}/>
          <input type="text" placeholder='Мощность' className={style.textInput}/>
          <AutoCompleteDropDown dropDownName={'Привод'} optionsData={driveUnits} isAdd={true}/>
          <AutoCompleteDropDown dropDownName={'Цвет'} optionsData={colors} isAdd={true}/>
          <AutoCompleteDropDown dropDownName={'Руль'} optionsData={steeringWheels} isAdd={true}/>
          <input type="text" placeholder='Год' className={style.textInput}/>
          <input type="text" placeholder='Цена' className={style.textInput}/>
          <input type="text" placeholder='Владельцев' className={style.textInput}/>
          <input type="text" placeholder='Изображение' className={style.textInput}/>
          <input type="text" placeholder='Описание' className={style.textInput}/>
        </div>

        <button>Добавить</button>
      </div>
    </Modal>
  );
};

export default AddCarModal;