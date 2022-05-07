import React, {useEffect, useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createModel, fetchBrands} from '../../../http/carAPI';
import AutoCompleteDropDown from '../../AutoCompleteDropDown/AutoCompleteDropDown';
import Spinner from '../../Spinner/Spinner';

const CreateModel = ({setActive}) => {

  const [brands, setBrands] = useState([])
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(true)
  const [chosen, setChosen] = useState('')

  useEffect(() => {
    fetchBrands().then(data => setBrands(data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }
  const addModel = () => {
    const formData = new FormData()
    formData.append('name', value)
    formData.append('brandId', chosen)
    createModel(formData).then(r => setActive(false))
  }

  return (
    <div>
      <h2 className={style.header}>Добавить модель</h2>
      <AutoCompleteDropDown dropDownName={'Марка'} optionsData={brands} setChosen={setChosen}/>
      <input type="text"
             placeholder={'Новая модель'}
             className={style.addInput}
             value={value}
             onChange={e => setValue(e.target.value)}/>
      <button className={style.addButton} onClick={addModel}>Добавить</button>
    </div>
  );
};

export default CreateModel;