import React, {useEffect, useState} from 'react';
import Modal from '../Modal/Modal';
import {
  createCar,
  fetchBodyTypes,
  fetchBrands,
  fetchColors,
  fetchDriveUnits,
  fetchModels,
  fetchSteeringWheels, fetchTransmission
} from '../../../http/carAPI';
import AutoCompleteDropDown from '../../AutoCompleteDropDown/AutoCompleteDropDown';
import Spinner from '../../Spinner/Spinner';
import style from './AddCarModal.module.css'


const AddCarModal = ({active, setActive , choseSpecAdd}) => {

  const [bodyTypes, setBodyTypes] = useState([])
  const [brands, setBrands] = useState([])
  const [models, setModels] = useState([])
  const [driveUnits, setDriveUnits] = useState([])
  const [transmission, setTransmission] = useState([])
  const [steeringWheels, setSteeringWheels] = useState([])
  const [colors, setColors] = useState([])
  const [loading, setLoading] = useState(true)

  const [choseBrand, setChoseBrand] = useState('')
  const [choseModel, setChoseModel] = useState('')
  const [choseBodyType, setChoseBodyType] = useState('')
  const [choseYear, setChoseYear] = useState('')
  const [choseMillage, setChoseMillage] = useState('')
  const [chosePower, setChosePower] = useState([])
  const [choseDriveUnit, setChoseDriveUnit] = useState('')
  const [choseColor, setChoseColor] = useState([])
  const [choseSteeringWheel, setChoseSteeringWheel] = useState('')
  const [choseTransmission, setChoseTransmission] = useState('')
  const [chosePrice, setChosePrice] = useState('')
  const [choseOwners, setChoseOwners] = useState('')
  const [choseImage, setChoseImage] = useState('')
  const [choseDescription, setChoseDescription] = useState('')

  useEffect(() => {
    fetchBrands().then(data => setBrands(data))
    fetchModels().then(data => setModels(data))
    fetchDriveUnits().then(data => setDriveUnits(data))
    fetchTransmission().then(data => setTransmission(data))
    fetchSteeringWheels().then(data => setSteeringWheels(data))
    fetchColors().then(data => setColors(data))
    fetchBodyTypes().then(data => setBodyTypes(data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }

  const addCar = () => {
    const formData = new FormData()
    formData.append('price', `${chosePrice}`)
    formData.append('year', `${choseYear}`)
    formData.append('millage', `${choseMillage}`)
    formData.append('power', `${chosePower}`)
    formData.append('img', choseImage)
    formData.append('owners', `${choseOwners}`)
    formData.append('description', choseDescription)
    formData.append('brandId', choseBrand)
    formData.append('transmissionId', choseTransmission)
    formData.append('modelId', choseModel)
    formData.append('steeringWheelId', choseSteeringWheel)
    formData.append('colorId', choseColor)
    formData.append('driveUnitId', choseDriveUnit)
    formData.append('bodyTypeId', choseBodyType)
    // console.log(formData.get('transmissionId'))
    // console.log(chosePrice.type)
    createCar(formData).then(data => {
      setActive(false)
    })
  }


  return (
    <Modal active={active} setActive={setActive}>
      <div className={style.addCarModal}>
        <h2>???????????????? ????????????????????</h2>
        <div className={style.contentBlock}>
          <AutoCompleteDropDown dropDownName={'??????????'} optionsData={brands} isAdd={true} choseSpecAdd={choseSpecAdd} setChosen={setChoseBrand}/>
          <AutoCompleteDropDown dropDownName={'????????????'} optionsData={models} isAdd={true} choseSpecAdd={choseSpecAdd} setChosen={setChoseModel}/>
          <AutoCompleteDropDown dropDownName={'?????? ????????????'} optionsData={bodyTypes} isAdd={true} choseSpecAdd={choseSpecAdd} setChosen={setChoseBodyType}/>
          <input type="number" placeholder='?????? ??????????????' value={choseYear} className={style.textInput} onChange={e => setChoseYear(e.target.value)}/>
          <input type="number" placeholder='????????????' value={choseMillage} className={style.textInput} onChange={e => setChoseMillage(e.target.value)}/>
          <input type="number" placeholder='????????????????' value={chosePower} className={style.textInput} onChange={e => setChosePower(e.target.value)}/>
          <AutoCompleteDropDown dropDownName={'????????????'} optionsData={driveUnits} isAdd={true} choseSpecAdd={choseSpecAdd} setChosen={setChoseDriveUnit}/>
          <AutoCompleteDropDown dropDownName={'????????'} optionsData={colors} isAdd={true} choseSpecAdd={choseSpecAdd} setChosen={setChoseColor}/>
          <AutoCompleteDropDown dropDownName={'????????'} optionsData={steeringWheels} isAdd={true} choseSpecAdd={choseSpecAdd} setChosen={setChoseSteeringWheel}/>
          <AutoCompleteDropDown dropDownName={'??????'} optionsData={transmission} isAdd={true} choseSpecAdd={choseSpecAdd} setChosen={setChoseTransmission}/>
          <input type="number" placeholder='????????' value={chosePrice} className={style.textInput} onChange={e => setChosePrice(e.target.value)}/>
          <input type="number" placeholder='????????????????????' value={choseOwners} className={style.textInput} onChange={e => setChoseOwners(e.target.value)}/>
          <input type="file" className={style.fileInput} onChange={e => setChoseImage(e.target.value)}/>
          <input type="text" placeholder='????????????????' value={choseDescription} className={style.textInput} onChange={e => setChoseDescription(e.target.value)}/>
        </div>

        <button onClick={addCar}>????????????????</button>
      </div>
    </Modal>
  );
};


export default AddCarModal;