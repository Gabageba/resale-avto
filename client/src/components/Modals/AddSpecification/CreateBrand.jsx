import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createBrand} from '../../../http/carAPI';
import {setBrandsAC, setSpecAddErrorSearch} from '../../../redux/carSpecReducer';
import {useDispatch, useSelector} from 'react-redux';
import ErrorPopUp from '../../ErrorPopUp/ErrorPopUp';
import {FormattedMessage, useIntl} from 'react-intl';

const CreateBrand = ({setActive}) => {

  const [value, setValue] = useState('')
  const [repeatError, setRepeatError] = useState(false)
  const dispatch = useDispatch()
  const specAddErrorSearch = useSelector(state => state.specifications.specAddErrorSearch)
  const brands = useSelector(state => state.specifications.brands)
  const intl = useIntl()


  const addBrand = () => {
    if (value) {

      createBrand({name: value.toLowerCase()}).then(data => {
        dispatch(setBrandsAC(data))
        setActive(false)
        setValue('')
      })
      if (value) {
        setRepeatError(true)
      }

    } else {
      dispatch(setSpecAddErrorSearch(true))
    }
  }

  return (
    <div>
      <div className={style.info}>
        <input type="text"
               placeholder={intl.formatMessage({id: 'new_brand'})}
               className={specAddErrorSearch && value === '' ? style.addInputError : style.addInput}
               value={value}
               onChange={e => setValue(e.target.value)}/>
        <button className={style.addButton} onClick={addBrand}><FormattedMessage id='add_spec_button' /></button>
      </div>
    </div>
  );
};

export default CreateBrand;