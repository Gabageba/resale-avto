import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createTransmission} from '../../../http/carAPI';
import {useDispatch, useSelector} from 'react-redux';
import {setSpecAddErrorSearch, setTransmissionsAC} from '../../../redux/carSpecReducer';
import {FormattedMessage, useIntl} from 'react-intl';

const CreateTransmission = ({setActive}) => {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const specAddErrorSearch = useSelector(state => state.specifications.specAddErrorSearch)
  const intl = useIntl()

  const addTransmission = () => {
    if (value) {
      createTransmission({name: value.toLowerCase()}).then(data => {
        dispatch(setTransmissionsAC(data))
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
               placeholder={intl.formatMessage({id: 'new_transmission'})}
               className={specAddErrorSearch && value === '' ? style.addInputError : style.addInput}
               value={value}
               onChange={e => setValue(e.target.value)}/>
        <button className={style.addButton} onClick={addTransmission}><FormattedMessage id='add_spec_button' /></button>
      </div>
    </div>
  );
};

export default CreateTransmission;