import React, {useEffect, useState} from 'react';
import style from './AddCar.module.css'
import AutoCompleteDropDown from '../../components/AutoCompleteDropDown/AutoCompleteDropDown';
import {
  createCar,
  fetchBodyTypes,
  fetchBrands, fetchColors,
  fetchDriveUnits,
  fetchModels,
  fetchSteeringWheels,
  fetchTransmission
} from '../../http/carAPI';
import {useDispatch, useSelector} from 'react-redux';
import {
  setBodyTypesAC,
  setBrandsAC,
  setColorsAC,
  setDriveUnitsAC,
  setModelsAC, setSelectedBodyTypeAC, setSelectedBrandAC, setSelectedColorAC,
  setSelectedDescriptionAC, setSelectedDriveUnitAC,
  setSelectedMillageAC, setSelectedModelsAC, setSelectedOwnersAC,
  setSelectedPowerAC,
  setSelectedPriceAC, setSelectedSteeringWheelAC, setSelectedTransmissionAC,
  setSelectedYearAC,
  setSteeringWheelsAC,
  setTransmissionsAC
} from '../../redux/carSpecReducer';
import Spinner from '../../components/Spinner/Spinner';
import AddSpecificationModal from '../../components/Modals/AddSpecification/AddSpecificationModal';
import FileLoadInput from '../../components/FileLoadInput/FileLoadInput';

const AddCar = () => {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [addSpecActive, setAddSpecActive] = useState(false)
  const [chosenSpec, setChosenSpec] = useState('')

  const choseSpecAdd = (name) => {
    setChosenSpec(name)
    setAddSpecActive(true)
  }

  const brands = useSelector(state => state.specifications.brands)
  const models = useSelector(state => state.specifications.models)
  const driveUnits = useSelector(state => state.specifications.driveUnits)
  const transmissions = useSelector(state => state.specifications.transmissions)
  const colors = useSelector(state => state.specifications.colors)
  const steeringWheels = useSelector(state => state.specifications.steeringWheels)
  const bodyTypes = useSelector(state => state.specifications.bodyTypes)

  const selectedPrice = useSelector(state => state.specifications.selectedPrice)
  const selectedYear = useSelector(state => state.specifications.selectedYear)
  const selectedMillage = useSelector(state => state.specifications.selectedMillage)
  const selectedPower = useSelector(state => state.specifications.selectedPower)
  const selectedOwners = useSelector(state => state.specifications.selectedOwners)
  const selectedFile = useSelector(state => state.specifications.selectedFile)
  const selectedDescription = useSelector(state => state.specifications.selectedDescription)
  const selectedBrand = useSelector(state => state.specifications.selectedBrand)
  const selectedTransmission = useSelector(state => state.specifications.selectedTransmission)
  const selectedModel = useSelector(state => state.specifications.selectedModel)
  const selectedSteeringWheel = useSelector(state => state.specifications.selectedSteeringWheel)
  const selectedColor = useSelector(state => state.specifications.selectedColor)
  const selectedDriveUnit = useSelector(state => state.specifications.selectedDriveUnit)
  const selectedBodyType = useSelector(state => state.specifications.selectedBodyType)


  useEffect(() => {
    fetchBrands().then(data => dispatch(setBrandsAC(data)))
    fetchModels().then(data => dispatch(setModelsAC(data)))
    fetchDriveUnits().then(data => dispatch(setDriveUnitsAC(data)))
    fetchTransmission().then(data => dispatch(setTransmissionsAC(data)))
    fetchColors().then(data => dispatch(setColorsAC(data)))
    fetchSteeringWheels().then(data => dispatch(setSteeringWheelsAC(data)))
    fetchBodyTypes().then(data => dispatch(setBodyTypesAC(data)))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }

  // const test = () => {
  //   console.log({
  //     selectedPrice,
  //     selectedYear,
  //     selectedMillage,
  //     selectedPower,
  //     selectedOwners,
  //     selectedFile,
  //     selectedBrand,
  //     selectedTransmission,
  //     selectedModel,
  //     selectedSteeringWheel,
  //     selectedColor,
  //     selectedDriveUnit,
  //     selectedBodyType,
  //     selectedDescription
  //
  //   })
  // }



  const addCar =  () => {
    const formData = new FormData()
    formData.append('price', `${selectedPrice}`)
    formData.append('year', `${selectedYear}`)
    formData.append('millage', `${selectedMillage}`)
    formData.append('power', `${selectedPower}`)
    formData.append('owners', `${selectedOwners}`)
    formData.append('img', selectedFile)
    formData.append('brandId', selectedBrand)
    formData.append('transmissionId', selectedTransmission)
    formData.append('modelId', selectedModel)
    formData.append('steeringWheelId', selectedSteeringWheel)
    formData.append('colorId', selectedColor)
    formData.append('driveUnitId', selectedDriveUnit)
    formData.append('bodyTypeId', selectedBodyType)
    formData.append('description', selectedDescription)

    createCar(formData).then(data => {
      console.log(data)
    })
  }

  return (
    <div className={style.addCar}>
      <AddSpecificationModal active={addSpecActive} setActive={setAddSpecActive} chosenSpec={chosenSpec}/>
      <h1>Добавить автомобиль</h1>
      <div className={style.filter}>
        <AutoCompleteDropDown optionsData={brands} dropDownName={'Марка'} isAdd={true} setChosen={setSelectedBrandAC} choseSpecAdd={choseSpecAdd}/>
        <AutoCompleteDropDown optionsData={models} dropDownName={'Модель'} isAdd={true} setChosen={setSelectedModelsAC} choseSpecAdd={choseSpecAdd}/>
        <AutoCompleteDropDown optionsData={bodyTypes} dropDownName={'Тип кузова'} isAdd={true} setChosen={setSelectedBodyTypeAC} choseSpecAdd={choseSpecAdd}/>
        <AutoCompleteDropDown optionsData={driveUnits} dropDownName={'Привод'} isAdd={true} setChosen={setSelectedDriveUnitAC} choseSpecAdd={choseSpecAdd}/>
        <AutoCompleteDropDown optionsData={transmissions} dropDownName={'КПП'} isAdd={true} setChosen={setSelectedTransmissionAC} choseSpecAdd={choseSpecAdd}/>
        <AutoCompleteDropDown optionsData={steeringWheels} dropDownName={'Руль'} isAdd={true} setChosen={setSelectedSteeringWheelAC} choseSpecAdd={choseSpecAdd}/>
        <AutoCompleteDropDown optionsData={colors} dropDownName={'Цвет'} isAdd={true} setChosen={setSelectedColorAC} choseSpecAdd={choseSpecAdd}/>
        <input type="number" placeholder="Год выпуска" className={style.textInput}
               onChange={e => dispatch(setSelectedYearAC(e.target.value))}/>
        <input type="number" placeholder="Пробег" className={style.textInput}
               onChange={e => dispatch(setSelectedMillageAC(e.target.value))}/>
        <input type="number" placeholder="Мощность" className={style.textInput}
               onChange={e => dispatch(setSelectedPowerAC(e.target.value))}/>
        <input type="number" placeholder="Цена" className={style.textInput}
               onChange={e => dispatch(setSelectedPriceAC(e.target.value))}/>
        <input type="number" placeholder="Владельцев" className={style.textInput}
               onChange={e => dispatch(setSelectedOwnersAC(e.target.value))}/>
      </div>
      <div className={style.spec}>
         <textarea placeholder="Описание" className={style.descriptionInput}
                   onChange={e => dispatch(setSelectedDescriptionAC(e.target.value))}/>
        <FileLoadInput classname={style.fileInput}/>
      </div>
      <button className={style.addButton} onClick={addCar}>Добавить</button>
    </div>
  )

}

export default AddCar