import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createModel} from '../../../http/carAPI';
import AutoCompleteDropDown from '../../AutoCompleteDropDown/AutoCompleteDropDown';
import {useSelector} from 'react-redux';
import {setSelectedBrandAC} from '../../../redux/carSpecReducer';

const CreateModel = ({setActive}) => {

  const [value, setValue] = useState('')

  const selectedBrand = useSelector(state => state.specifications.selectedBrand)
  const brands = useSelector(state => state.specifications.brands)

  const addModel = () => {
    const formData = new FormData()
    formData.append('name', value.toLowerCase())
    formData.append('brandId', selectedBrand)
    createModel(formData).then(r => setActive(false))
  }


  return (
    <div>
      <h2 className={style.header}>Добавить модель</h2>
      <AutoCompleteDropDown dropDownName={'Марка'} optionsData={brands} setChosen={setSelectedBrandAC}/>
      <input type="text"
             placeholder={'Новая модель'}
             className={style.addModelInput}
             value={value}
             onChange={e => setValue(e.target.value)}/>
      <button className={style.addButton} onClick={addModel}>Добавить</button>
    </div>
  );
};

export default CreateModel;