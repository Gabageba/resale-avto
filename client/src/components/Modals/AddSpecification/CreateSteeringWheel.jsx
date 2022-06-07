import React, {useState} from 'react';
import style from './AddSpecificationModal.module.css';
import {createSteeringWheel} from '../../../http/carAPI';
import {setSpecAddErrorSearch, setSteeringWheelsAC} from '../../../redux/carSpecReducer';
import {useDispatch, useSelector} from 'react-redux';
import {FormattedMessage, useIntl} from 'react-intl';

const CreateSteeringWheel = ({setActive}) => {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const specAddErrorSearch = useSelector(state => state.specifications.specAddErrorSearch)
  const intl = useIntl()

  const addSteeringWheel = () => {
    if (value) {
      createSteeringWheel({name: value.toLowerCase()}).then(data => {
        dispatch(setSteeringWheelsAC(data))
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
               placeholder={intl.formatMessage({id: 'new_steering_wheel'})}
               className={specAddErrorSearch && value === '' ? style.addInputError : style.addInput}
               value={value}
               onChange={e => setValue(e.target.value)}/>
        <button className={style.addButton} onClick={addSteeringWheel}><FormattedMessage id='add_spec_button' /></button>
      </div>
    </div>
  );
};

export default CreateSteeringWheel;