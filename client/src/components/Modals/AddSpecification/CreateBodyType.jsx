import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createBodyType} from '../../../http/carAPI';
import {setBodyTypesAC, setSpecAddErrorSearch} from '../../../redux/carSpecReducer';
import {useDispatch, useSelector} from 'react-redux';
import {FormattedMessage, useIntl} from 'react-intl';

const CreateBodyType = ({setActive}) => {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const specAddErrorSearch = useSelector(state => state.specifications.specAddErrorSearch)
  const intl = useIntl()

  const addBodyType = () => {
    if (value) {
      createBodyType({name: value.toLowerCase()}).then(data => {
        dispatch(setBodyTypesAC(data))
        setValue('')
        setActive(false)
      })
    } else {
      dispatch(setSpecAddErrorSearch(true))
    }
  }

  return (
    <div>
      <div className={style.info}>
        <input type="text"
               placeholder={intl.formatMessage({id: 'new_body_type'})}
               className={specAddErrorSearch && value === '' ? style.addInputError : style.addInput}
               value={value}
               onChange={e => setValue(e.target.value)}/>
        <button className={style.addButton} onClick={addBodyType}><FormattedMessage id='add_spec_button' /></button>
      </div>
    </div>
  );
};

export default CreateBodyType;