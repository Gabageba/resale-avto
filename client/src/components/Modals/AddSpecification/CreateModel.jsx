import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createModel} from '../../../http/carAPI';
import AutoCompleteDropDown from '../../AutoCompleteDropDown/AutoCompleteDropDown';
import {useDispatch, useSelector} from 'react-redux';
import {setModelsAC, setSelectedBrandAC, setSpecAddErrorSearch} from '../../../redux/carSpecReducer';

const CreateModel = ({setActive}) => {

  const [value, setValue] = useState('')
  const specAddErrorSearch = useSelector(state => state.specifications.specAddErrorSearch)
  const dispatch = useDispatch()

  const selectedBrand = useSelector(state => state.specifications.selectedBrand)
  const brands = useSelector(state => state.specifications.brands)

  const addModel = () => {
    if (value && selectedBrand) {
      const formData = new FormData()
      formData.append('name', value.toLowerCase())
      formData.append('brandId', selectedBrand.id)
      createModel(formData).then(data => {
        dispatch(setModelsAC(data))
        setActive(false)
        setValue('')
        setSelectedBrandAC('')
      })
    } else {
      dispatch(setSpecAddErrorSearch(true))
    }
  }


  return (
    <div>
      <div className={style.infoDropDown}>
        <AutoCompleteDropDown dropDownName={'Марка'} optionsData={brands} setChosen={setSelectedBrandAC}/>
      </div>
      <div className={style.info}>
        <input type="text"
               placeholder={'Новая модель'}
               className={specAddErrorSearch && value === '' ? style.addModelInputError : style.addModelInput}
               value={value}
               onChange={e => setValue(e.target.value)}/>
        <button className={style.addButton} onClick={addModel}>Добавить</button>
      </div>
    </div>
  );
};

export default CreateModel;