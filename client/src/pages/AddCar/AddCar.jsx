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
  setDriveUnitsAC, setFilterModels,
  setSelectedBodyTypeAC, setSelectedBrandAC, setSelectedColorAC,
  setSelectedDescriptionAC, setSelectedDriveUnitAC, setSelectedFileAC,
  setSelectedMillageAC, setSelectedModelsAC, setSelectedOwnersAC,
  setSelectedPowerAC,
  setSelectedPriceAC, setSelectedSteeringWheelAC, setSelectedTransmissionAC,
  setSelectedYearAC, setSpecErrorSearch,
  setSteeringWheelsAC,
  setTransmissionsAC
} from '../../redux/carSpecReducer';
import Spinner from '../../components/Spinner/Spinner';
import AddSpecificationModal from '../../components/Modals/AddSpecification/AddSpecificationModal';
import FileLoadInput from '../../components/FileLoadInput/FileLoadInput';
import ErrorPopUp from '../../components/ErrorPopUp/ErrorPopUp';
import {FormattedMessage, useIntl} from 'react-intl';

const AddCar = () => {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [addSpecActive, setAddSpecActive] = useState(false)
  const [chosenSpec, setChosenSpec] = useState('')
  const [errorPopUpActive, setErrorPopUpActive] = useState(false)
  const specErrorSearch = useSelector(state => state.specifications.specErrorSearch)

  const choseSpecAdd = (name) => {
    setChosenSpec(name)
    setAddSpecActive(true)
  }


  const brands = useSelector(state => state.specifications.brands)
  const filterModels = useSelector(state => state.specifications.filterModels)
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
  const intl = useIntl()

  useEffect(() => {
    fetchBrands().then(data => dispatch(setBrandsAC(data)))
    fetchModels().then(data => dispatch(setFilterModels(data)))
    fetchDriveUnits().then(data => dispatch(setDriveUnitsAC(data)))
    fetchTransmission().then(data => dispatch(setTransmissionsAC(data)))
    fetchColors().then(data => dispatch(setColorsAC(data)))
    fetchSteeringWheels().then(data => dispatch(setSteeringWheelsAC(data)))
    fetchBodyTypes().then(data => dispatch(setBodyTypesAC(data)))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    fetchModels(selectedBrand.id).then(data => {
      dispatch(setFilterModels(data))
      dispatch(setSelectedModelsAC(''))
    })
  }, [selectedBrand])

  if (loading) {
    return <Spinner/>
  }

  const addCar = () => {

    if (selectedPrice && selectedYear && selectedMillage && selectedPower && selectedOwners && selectedFile && selectedBrand && selectedTransmission &&
      selectedModel && selectedSteeringWheel && selectedColor && selectedDriveUnit && selectedBodyType && selectedDescription) {
      const formData = new FormData()
      formData.append('price', `${selectedPrice}`)
      formData.append('year', `${selectedYear}`)
      formData.append('millage', `${selectedMillage}`)
      formData.append('power', `${selectedPower}`)
      formData.append('owners', `${selectedOwners}`)
      formData.append('img', selectedFile)
      formData.append('brandId', selectedBrand.id)
      formData.append('transmissionId', selectedTransmission.id)
      formData.append('modelId', selectedModel.id)
      formData.append('steeringWheelId', selectedSteeringWheel.id)
      formData.append('colorId', selectedColor.id)
      formData.append('driveUnitId', selectedDriveUnit.id)
      formData.append('bodyTypeId', selectedBodyType.id)
      formData.append('description', selectedDescription)
      createCar(formData).then(data => {
        clear()
      })
    } else {
      dispatch(setSpecErrorSearch(true))
      setErrorPopUpActive(true)

    }

  }

  const clear = () => {
    dispatch(setSelectedBrandAC(''))
    dispatch(setSelectedModelsAC(''))
    dispatch(setSelectedPriceAC(''))
    dispatch(setSelectedYearAC(''))
    dispatch(setSelectedMillageAC(''))
    dispatch(setSelectedPowerAC(''))
    dispatch(setSelectedOwnersAC(''))
    dispatch(setSelectedFileAC(''))
    dispatch(setSelectedTransmissionAC(''))
    dispatch(setSelectedColorAC(''))
    dispatch(setSelectedDriveUnitAC(''))
    dispatch(setSelectedBodyTypeAC(''))
    dispatch(setSelectedDescriptionAC(''))
    dispatch(setSelectedSteeringWheelAC(''))
    dispatch(setSpecErrorSearch(false))
    setErrorPopUpActive(false)
  }


  return (
    <div className={style.addCar}>
      <AddSpecificationModal active={addSpecActive} setActive={setAddSpecActive} chosenSpec={chosenSpec}/>
      <ErrorPopUp active={errorPopUpActive} setActive={setErrorPopUpActive} errorText={intl.formatMessage({id: 'add_error'})}/>
      <h1><FormattedMessage id='add_head' /></h1>
      <div className={style.filter}>
        <AutoCompleteDropDown optionsData={brands} dropDownName={intl.formatMessage({id: 'filter_brand'})} isAdd={true} setChosen={setSelectedBrandAC}
                              choseSpecAdd={choseSpecAdd} chosen={selectedBrand}/>
        {selectedBrand ?
          <AutoCompleteDropDown optionsData={filterModels} dropDownName={intl.formatMessage({id: 'filter_model'})} isAdd={true} setChosen={setSelectedModelsAC}
                                choseSpecAdd={choseSpecAdd} chosen={selectedModel}/>
          : <input placeholder={intl.formatMessage({id: 'filter_model'})} className={style.textInput} readOnly/>
        }
        <AutoCompleteDropDown optionsData={bodyTypes} dropDownName={intl.formatMessage({id: 'filter_body_type'})} isAdd={true}
                              setChosen={setSelectedBodyTypeAC} choseSpecAdd={choseSpecAdd} chosen={selectedBodyType}/>
        <AutoCompleteDropDown optionsData={driveUnits} dropDownName={intl.formatMessage({id: 'filter_drive_unit'})} isAdd={true}
                              setChosen={setSelectedDriveUnitAC} choseSpecAdd={choseSpecAdd}
                              chosen={selectedDriveUnit}/>
        <AutoCompleteDropDown optionsData={transmissions} dropDownName={intl.formatMessage({id: 'filter_transmission'})} isAdd={true}
                              setChosen={setSelectedTransmissionAC} choseSpecAdd={choseSpecAdd}
                              chosen={selectedTransmission}/>
        <AutoCompleteDropDown optionsData={steeringWheels} dropDownName={intl.formatMessage({id: 'filter_steering_wheel'})} isAdd={true}
                              setChosen={setSelectedSteeringWheelAC} choseSpecAdd={choseSpecAdd}
                              chosen={selectedSteeringWheel}/>
        <AutoCompleteDropDown optionsData={colors} dropDownName={intl.formatMessage({id: 'add_color'})} isAdd={true} setChosen={setSelectedColorAC}
                              choseSpecAdd={choseSpecAdd} chosen={selectedColor}/>

        <input type="number" placeholder={intl.formatMessage({id: 'filter_year'})}
               className={specErrorSearch && selectedYear === '' ? style.textInputError : style.textInput}
               value={selectedYear}
               onChange={e => dispatch(setSelectedYearAC(e.target.value))}/>
        <input type="number" placeholder={intl.formatMessage({id: 'filter_millage'})}
               className={specErrorSearch && selectedMillage === '' ? style.textInputError : style.textInput}
               value={selectedMillage}
               onChange={e => dispatch(setSelectedMillageAC(e.target.value))}/>
        <input type="number" placeholder={intl.formatMessage({id: 'add_power'})}
               className={specErrorSearch && selectedPower === '' ? style.textInputError : style.textInput}
               value={selectedPower}
               onChange={e => dispatch(setSelectedPowerAC(e.target.value))}/>
        <input type="number" placeholder={intl.formatMessage({id: 'add_price'})}
               className={specErrorSearch && selectedPrice === '' ? style.textInputError : style.textInput}
               value={selectedPrice}
               onChange={e => dispatch(setSelectedPriceAC(e.target.value))}/>
        <input type="number" placeholder={intl.formatMessage({id: 'add_owners'})}
               className={specErrorSearch && selectedOwners === '' ? style.textInputError : style.textInput}
               value={selectedOwners}
               onChange={e => dispatch(setSelectedOwnersAC(e.target.value))}/>
      </div>
      <div className={style.spec}>
         <textarea placeholder={intl.formatMessage({id: 'add_description'})} className={(specErrorSearch && selectedDescription === '') || selectedDescription.length > 255 ? style.descriptionInputError : style.descriptionInput}
                   value={selectedDescription}
                   onChange={e => dispatch(setSelectedDescriptionAC(e.target.value))}/>
        <FileLoadInput classname={style.fileInput} />
      </div>
      <div>
        <button className={style.addButton} onClick={addCar}><FormattedMessage id='add_add_button' /></button>
        <button className={style.clearButton} onClick={clear}><FormattedMessage id='add_clear_button' /></button>
      </div>

    </div>
  )

}

export default AddCar