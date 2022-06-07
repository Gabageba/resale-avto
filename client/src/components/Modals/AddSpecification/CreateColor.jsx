import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createColor} from '../../../http/carAPI';
import {setColorsAC, setSpecAddErrorSearch} from '../../../redux/carSpecReducer';
import {useDispatch, useSelector} from 'react-redux';
import {FormattedMessage, useIntl} from 'react-intl';

const CreateColor = ({setActive}) => {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const specAddErrorSearch = useSelector(state => state.specifications.specAddErrorSearch)
  const intl = useIntl()

  const addColor = () => {
    if (value) {
      createColor({name: value.toLowerCase()}).then(data => {
        dispatch(setColorsAC(data))
        setActive(false)
        setValue('')
      })
    } else {
      dispatch(setSpecAddErrorSearch(true))
    }


  }

  return (
    <div>
      <div className={style.info}>
        <input type="text"
               placeholder={intl.formatMessage({id: 'new_color'})}
               className={specAddErrorSearch && value === '' ? style.addInputError : style.addInput}
               value={value}
               onChange={e => setValue(e.target.value)}/>
        <button className={style.addButton} onClick={addColor}><FormattedMessage id='add_spec_button' /></button>
      </div>
    </div>
  );
};

export default CreateColor;